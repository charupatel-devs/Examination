import React from "react";
import { Container } from "react-bootstrap";
// import "../assets/bootstrap-grid.css";
import "../components/layout/Sidebar";
import Sidebar from "../components/layout/Sidebar";
const Dashboard = () => {
  const examSchedule = [
    {
      examType: "Data Structures",
      courseCode: "MCA101",
      date: "March 26, 2025",
      time: "10:00 AM",
      location: "Design Studio A",
      status: "Published",
    },
    {
      examType: "Software Engineering",
      courseCode: "MCA103",
      date: "March 27, 2025",
      time: "02:00 PM",
      location: "Computer Lab 2",
      status: "Published",
    },
    // Add other exams similarly
  ];

  return (
    <Container fluid className="bg-light min-vh-100">
      <div>
        {/* Sidebar */}
        <div md={2} className="bg-dark text-white ">
          <Sidebar />
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
