import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
import styles from "./UploadPrescription.module.css";
import { Table, Button } from "react-bootstrap";

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
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);
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
    setPrescriptionData([]);
    readExcelFile(selectedFile)
      .then(({ headers, rows }) => {
        setHeaders(headers);
        setData(rows);
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
        if (!arraysEqual(requiredColumns, rows[0])) {
          setErrorMessage("Columns do not match the required format.");
          return;
        }

        // If all checks pass, set prescription data
        setPrescriptionData(rows);
        downloadFile();
        console.log("Columns:", headers);
        console.log("Rows:", rows);
      })
      .catch((error) => {
        console.error("Error reading Excel file:", error);
      });
  };
  const downloadFile = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = file.name;
    downloadLink.click();
  };
  // Utility function to compare arrays
  const arraysEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  };
  const renderCheckbox = (value) => {
    return <input type="checkbox" checked={value} disabled />;
  };
  return (
    <div className={styles.container}>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Upload File (Accepted File Extensions: .CSV, .XLSX)
        </label>
        <input
          type="file"
          class="form-control"
          id="exampleFormControlFile1"
          accept=".csv,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
          onChange={handleFileChange}
        />
      </div>

      {file && <p>Selected file: {file.name}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {prescriptionData.length > 0 && (
        <div className={styles.tableContainer}>
          <div className={styles.gridContainer}>
            <Table striped bordered hover className={styles.table}>
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
                      <td key={colIndex}>
                        {cell == "FALSE" ||
                        cell == "true" ||
                        cell == "false" ||
                        cell == "TRUE"
                          ? renderCheckbox(cell)
                          : cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      )}
      <div className={styles.note}>
        <p>
          We accept a special header for the uploaded file. Download the format
          file{" "}
          <a href="/Assets/Prescription File Format.xlsx" download>
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default UploadPrescription;
