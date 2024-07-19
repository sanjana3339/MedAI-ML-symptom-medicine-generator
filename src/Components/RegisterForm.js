import React, { useState, useEffect } from "react";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";

function RegisterForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  },[]);

  const [name, setName] = useState("");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientPassword, setPatientPassword] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form inputs
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }

    if (!patientName.trim()) {
      errors.patientName = "Patient name is required";
    } else if (patientName.trim().length < 8) {
      errors.patientName = "Patient name must be at least 8 characters";
    }

    if (!patientPhone.trim()) {
      errors.patientPhone = "Patient phone number is required";
    } else if (patientPhone.trim().length !== 10) {
      errors.patientPhone = "Patient phone number must be of 10 digits";
    }

    if (!patientPassword.trim()) {
      errors.patientPassword = "Password is required";
    } else if (patientPassword.trim().length < 8) {
      errors.patientPassword = "Password must be at least 8 characters";
    }

    if (patientGender === "default") {
      errors.patientGender = "Please select patient gender";
    }

    if (!dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    
    setName("");
    setPatientName("");
    setPatientPhone("");
    setPatientPassword("");
    setPatientGender("default");
    setDateOfBirth("");
    setFormErrors({});

    toast.success("Appointment Scheduled!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <Navbar />
      <h1 className="legal-siteTitle">
       
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Register</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {formErrors.name && (
              <p className="error-message">{formErrors.name}</p>
            )}
          </label>

          <br />
          <label>
            Username:
            <input
              type="text"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
            {formErrors.patientName && (
              <p className="error-message">{formErrors.patientName}</p>
            )}
          </label>
          <br />
          <label>
            Set Password:
            <input
              type="password"
              value={patientPassword}
              onChange={(e) => setPatientPassword(e.target.value)}
              required
            />
            {formErrors.patientPassword && (
              <p className="error-message">{formErrors.patientPassword}</p>
            )}
          </label>

          <br />
          <label>
            Phone Number:
            <input
              type="text"
              value={patientPhone}
              onChange={(e) => setPatientPhone(e.target.value)}
              required
            />
            {formErrors.patientPhone && (
              <p className="error-message">{formErrors.patientPhone}</p>
            )}
          </label>

          <br />
          <label>
            Gender:
            <select
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {formErrors.patientGender && (
              <p className="error-message">{formErrors.patientGender}</p>
            )}
          </label>

          <br />

          <label>
            Date of Birth:
            <input
              type="date"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
            {formErrors.dateOfBirth && (
              <p className="error-message">{formErrors.dateOfBirth}</p>
            )}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Submit
          </button>

          <p className="success-message"
            style={{ display: isSubmitted ? "block" : "none" }}
          >
            Appointment details have been sent to the patient's phone number via SMS.
          </p>
        </form>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default RegisterForm;
