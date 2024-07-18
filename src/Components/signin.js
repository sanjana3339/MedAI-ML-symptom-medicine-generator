import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "./Navbar";

function SignInForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!username.trim()) {
      errors.username = "Username is required";
    }

    if (!password.trim()) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Reset form fields and errors after successful submission
    setUsername("");
    setPassword("");
    setFormErrors({});
    toast.success("Login Successful!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="appointment-form-section">
      <Navbar/>

      <div className="form-container">
        <h2 className="form-title">
          <span>Login</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            {formErrors.username && <p className="error-message">{formErrors.username}</p>}
          </label>

          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            {formErrors.password && <p className="error-message">{formErrors.password}</p>}
          </label>

          <br />
          <button type="submit" className="text-appointment-btn">
            Submit
          </button>
        </form>
      </div>

      {/* <div className="legal-footer">
        <p>© 2013-2023 Health+. All rights reserved.</p>
      </div> */}

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default SignInForm;
