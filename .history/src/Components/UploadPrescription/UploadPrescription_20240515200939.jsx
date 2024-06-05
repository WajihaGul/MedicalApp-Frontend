import React, { useState } from "react";
import Papa from "papaparse";
import styles from "./UploadPrescription.module.css";

const UploadPrescription = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [prescriptionData, setPrescriptionData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setErrorMessage("");

    Papa.parse(selectedFile, {
      header: true,
      complete: (result) => {
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
        const headers = result.meta.fields;
        const missingColumns = requiredColumns.filter(
          (col) => !headers.includes(col)
        );

        if (missingColumns.length > 0) {
          setErrorMessage(`Missing columns: ${missingColumns.join(", ")}`);
          return;
        }

        // Check if there's at least one row of data
        if (result.data.length < 1) {
          setErrorMessage("File must contain at least one row of data.");
          return;
        }

        // If all checks pass, set prescription data
        setPrescriptionData(result.data);
      },
      error: (error) => {
        setErrorMessage("Error parsing file.");
        console.error("CSV parsing error:", error);
      },
    });
  };

  return (
    <div className={styles.container}>
      <input type="file" accept=".csv" onChange={handleFileChange} />
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
