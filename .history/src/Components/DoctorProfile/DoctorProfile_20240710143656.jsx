import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styles from "./DoctorProfile.module.css";

const DoctorProfile = ({ addEditPharmacyText }) => {
  const [imageUpload, setImageUpload] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [education, setEducation] = useState("");
  const [phone, setPhone] = useState("");
  const [clinicName, setClinicName] = useState("");
  const [fromDay, setFromDay] = useState("");
  const [toDay, setToDay] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [excludeDay, setExcludeDay] = useState("");
  const [awards, setAwards] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("imageUpload", imageUpload);
    formData.append("fullName", fullName);
    formData.append("gender", gender);
    formData.append("specialization", specialization);
    formData.append("education", education);
    formData.append("phone", phone);
    formData.append("clinicName", clinicName);
    formData.append("fromDay", fromDay);
    formData.append("toDay", toDay);
    formData.append("startTime", startTime);
    formData.append("endTime", endTime);
    formData.append("excludeDay", excludeDay);
    formData.append("awards", awards);
    formData.append("additionalNotes", additionalNotes);

    try {
      const response = await fetch("/api/doctor-profile", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Success:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.dhead1}>Doctor's Profile</h1>
      <div className={styles.profile_image_container}>
        <label htmlFor="imageUpload" className={styles.upload_label}>
          <input
            type="file"
            accept="image/*"
            id="imageUpload"
            name="imageUpload"
            className={styles.upload_input}
            onChange={(e) => setImageUpload(e.target.files[0])}
          />
          <span className={styles.upload_text}>Upload Image</span>
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="fullName">
            Full Name<span>*</span>:
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            name="fullName"
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_row}>
          <label htmlFor="gender">
            Gender:<span>*</span>
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.form_group}>
          <label>
            Education and Qualifications<span>*</span>:
          </label>
          <textarea
            type="text"
            id="education"
            placeholder="Write about your Medical degree, board certifications, fellowships, etc."
            value={education}
            onChange={(e) => setEducation(e.target.value)}
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="specialization">
            Specialization<span>*</span>:
          </label>
          <input
            type="text"
            id="specialization"
            value={specialization}
            placeholder="State your area of expertise"
            onChange={(e) => setSpecialization(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="phone">
            Contact Number<span>*</span>:
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            pattern="[\+]?[0-9\s\-]+"
            placeholder="+923244201338"
            required
          />
        </div>

        <div className={styles.form_group}>
          <label htmlFor="clinicName">
            Clinic/Hospital Name<span>*</span>:
          </label>
          <input
            type="text"
            id="clinicName"
            value={clinicName}
            onChange={(e) => setClinicName(e.target.value)}
            required
          />
        </div>
        <div className={styles.form_group}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="fromDay">
                Working Days (From)<span>*</span>:
              </label>
              <select
                id="fromDay"
                value={fromDay}
                onChange={(e) => setFromDay(e.target.value)}
                required
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="toDay">
                Working Days (To)<span>*</span>:
              </label>
              <select
                id="toDay"
                value={toDay}
                onChange={(e) => setToDay(e.target.value)}
                required
              >
                <option value="">Select Day</option>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
          </div>
        </div>
        <div className={styles.form_group}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="startTime">
                Working Hours (Start)<span>*</span>:
              </label>
              <input
                type="time"
                id="startTime"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="endTime">
                Working Hours (End)<span>*</span>:
              </label>
              <input
                type="time"
                id="endTime"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <div className={styles.form_group}>
          <label htmlFor="excludeDay">Exclude a Day:</label>
          <select
            id="excludeDay"
            value={excludeDay}
            onChange={(e) => setExcludeDay(e.target.value)}
          >
            <option value="">Select Day</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
            <option value="Sunday">Sunday</option>
          </select>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="awards">Awards, Honors, Recognitions</label>
          <textarea
            id="awards"
            value={awards}
            onChange={(e) => setAwards(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.form_group}>
          <label htmlFor="additionalNotes">Additional Notes:</label>
          <textarea
            id="additionalNotes"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          ></textarea>
        </div>
        <Button className={styles.submit_btn} type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default DoctorProfile;
