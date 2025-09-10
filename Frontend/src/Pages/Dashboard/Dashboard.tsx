import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./Dashboard.css";

interface User {
  id: string;
  email: string;
  name: string;
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userData = localStorage.getItem("user");

    if (!token || !userData) {
      navigate("/signin");
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      toast.error("Invalid user data");
      navigate("/signin");
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    navigate("/signin");
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  // Dummy data for charts
  const donationData = [
    { month: "Jan", amount: 200 },
    { month: "Feb", amount: 400 },
    { month: "Mar", amount: 300 },
    { month: "Apr", amount: 500 },
    { month: "May", amount: 700 },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <h1>🌿 Al-Infaq Trust Dashboard</h1>
          <div className="user-info">
            <span>Assalamu Alaikum, {user?.name}</span>
            <button onClick={handleLogout} className="logout-btn">
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-main">
        {/* Welcome Section */}
        <div className="welcome-card">
          <h2>Welcome {user?.name} 👋</h2>
          <p>
            Manage your donations, track progress, and explore{" "}
            <strong>Al-Infaq Trust</strong> projects.
          </p>
          <div className="user-details">
            <p>
              <strong>Email:</strong> {user?.email}
            </p>
            <p>
              <strong>User ID:</strong> {user?.id}
            </p>
          </div>
        </div>

        {/* Stats with Progress */}
        <div className="stats-grid">
          <div className="stat-card green">
            <h3>Donations</h3>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "70%" }}></div>
            </div>
            <p>70% of target reached</p>
          </div>

          <div className="stat-card gold">
            <h3>Projects</h3>
            <div className="progress-bar">
              <div className="progress gold" style={{ width: "50%" }}></div>
            </div>
            <p>5 Active Projects</p>
          </div>

          <div className="stat-card green">
            <h3>Volunteers</h3>
            <div className="progress-bar">
              <div className="progress green" style={{ width: "85%" }}></div>
            </div>
            <p>85% Engagement</p>
          </div>

          <div className="stat-card gold">
            <h3>Reports</h3>
            <div className="progress-bar">
              <div className="progress gold" style={{ width: "40%" }}></div>
            </div>
            <p>40% Completed</p>
          </div>
        </div>

        {/* Donation Chart */}
        <div className="chart-section">
          <h3>📊 Monthly Donations</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={donationData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="amount" fill="#2ecc71" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Recent Activity */}
        <div className="recent-activity">
          <h3>📌 Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-icon">✅</span>
              <div className="activity-content">
                <p>Successfully signed in</p>
                <span className="activity-time">Just now</span>
              </div>
            </div>
            <div className="activity-item">
              <span className="activity-icon">💚</span>
              <div className="activity-content">
                <p>Donated ₹500 to Orphan Care</p>
                <span className="activity-time">Today</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
