import React, { useState } from "react";
import * as XLSX from "xlsx";
import styles from "./UploadPrescription.module.css";
const readExcelFile = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();

    fileReader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming the first sheet is the one to be read
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Extracting column headers
      const headers = [];
      for (let cell in sheet) {
        if (cell[0] === "A") {
          const col = cell.slice(0, 1);
          headers.push(sheet[col + "1"].v);
        } else {
          break;
        }
      }

      // Extracting rows
      const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, raw: false });

      resolve({ headers, rows });
    };

    fileReader.onerror = (error) => {
      reject(error);
    };

    fileReader.readAsArrayBuffer(file);
  });
};

const UploadPrescription = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [prescriptionData, setPrescriptionData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setErrorMessage("");

    readExcelFile(selectedFile)
      .then(({ headers, rows }) => {
        // Check if the required columns exist
        const requiredColumns = [
          "Medicine Name",
          "Strength",
          "Morning",
          "Afternoon",
          "Evening",
          "Night",
          "Quantity",
          "Important Information",
        ];

        if (!arraysEqual(requiredColumns, headers)) {
          setErrorMessage("Columns do not match the required format.");
          return;
        }

        // If all checks pass, set prescription data
        setPrescriptionData(rows.slice(1)); // Remove header row
      })
      .catch((error) => {
        setErrorMessage("Error reading Excel file.");
        console.error("Error reading Excel file:", error);
      });
  };

  // Utility function to compare arrays
  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };

  return (
    <div className={styles.container}>
      <input
        type="file"
        accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
        onChange={handleFileChange}
      />
      {file && <p>Selected file: {file.name}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {prescriptionData.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {prescriptionData[0].map((cell, index) => (
                <th key={index}>{cell}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {prescriptionData.slice(1).map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <td key={colIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UploadPrescription;
