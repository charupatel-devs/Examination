import React, { useState } from "react";

function InvigilationAssignment() {
  const [faculty, setFaculty] = useState("");
  const [dutyRoster, setDutyRoster] = useState(null);

  const assignDuties = () => {
    // Logic to assign duties to faculty
    // Placeholder; you'll need to implement the actual logic
    setDutyRoster("Duty Roster Generated...");
  };

  return (
    <div>
      <h1>Invigilation Duty Assignment</h1>
      <div>
        <label>Faculty (comma-separated):</label>
        <input
          type="text"
          value={faculty}
          onChange={(e) => setFaculty(e.target.value)}
        />
      </div>
      <button onClick={assignDuties}>Assign Duties</button>
      {dutyRoster && <div>{dutyRoster}</div>}
    </div>
  );
}

export default InvigilationAssignment;
