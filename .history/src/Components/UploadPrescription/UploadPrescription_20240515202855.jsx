import React, { useState } from "react";
import Papa from "papaparse";
import styles from "./UploadPrescription.module.css";
import XLSX from "xlsx";
const UploadPrescription = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [prescriptionData, setPrescriptionData] = useState([]);

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

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    readExcelFile(selectedFile)
      .then(({ headers, rows }) => {
        console.log("Columns:", headers);
        console.log("Rows:", rows);
      })
      .catch((error) => {
        console.error("Error reading Excel file:", error);
      });
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
              {Object.keys(prescriptionData[0]).map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {prescriptionData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {Object.values(row).map((value, colIndex) => (
                  <td key={colIndex}>{value}</td>
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
