import React, { useState } from "react";
import { toast } from "react-toastify";
import { postRequest, endpoints } from "../../Component/AllApi/ApiService";
import "./ForgetPassword.css";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await postRequest(endpoints.forgotPassword(), { email });
      toast.success(res.message || "Reset link sent to your email!");
      setEmail("");
    } catch (err: any) {
      toast.error(err.message || "Failed to send reset link");
    }
  };

  return (
    <div className="forget-container">
      <div className="forget-card">
        <h2>Forgot Password</h2>
        <p>Enter your email and we’ll send you a reset link</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="forget-input"
            required
          />

          <button type="submit" className="forget-btn">
            Send Reset Link
          </button>
        </form>

        <div className="back-login">
          Remember your password? <a href="/signin">Login</a>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
