import React, { useState } from "react";
import styles from "./UploadPrescription.module.css";
import { Table, Button } from "react-bootstrap";
import axios from "axios"; // Import Axios for making HTTP requests

const UploadPrescription = () => {
  const [file, setFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [prescriptionData, setPrescriptionData] = useState([]);
  const [headers, setHeaders] = useState([]);
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPrescriptionData([]);
    setFile(selectedFile);

    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://<backend-ip>:<backend-port>/api/upload", formData)
      .then((response) => {
        // Handle successful response from backend
        console.log("Response from backend:", response.data);
        setPrescriptionData(response.data.prescriptionData);
        setHeaders(response.data.headers);
        setData(response.data.rows);
      })
      .catch((error) => {
        // Handle error
        console.error("Error uploading file:", error);
        setErrorMessage("Error uploading file. Please try again.");
      });
  };

  return (
    <div className={styles.container}>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">
          Upload File (Accepted File Extensions: .CSV, .XLSX)
        </label>
        <input
          type="file"
          className="form-control"
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
