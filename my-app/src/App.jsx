import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DatesheetGenerator from "./pages/DatesheetGenerator";
import ExamSubmissionPanel from "./pages/ExamSubmissionPanel";
import InvigilationAssignment from "./pages/InvigilationAssignment";
import RemunerationManager from "./pages/RemunerationManager";
import SeatingPlanManager from "./pages/SeatingPlanManager";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/datesheet" element={<DatesheetGenerator />} />
        <Route path="/seatingplan" element={<SeatingPlanManager />} />
        <Route path="/invigilation" element={<InvigilationAssignment />} />
        <Route path="/remuneration" element={<RemunerationManager />} />
        <Route path="/submission" element={<ExamSubmissionPanel />} />
      </Routes>
    </div>
  );
}

export default App;
