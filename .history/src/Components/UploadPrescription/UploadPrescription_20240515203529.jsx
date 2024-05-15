import React, { useState } from "react";
import XLSX from "xlsx";
import styles from "./UploadPrescription.module.css";
const UploadPrescription = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [prescriptionData, setPrescriptionData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setErrorMessage("");
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
