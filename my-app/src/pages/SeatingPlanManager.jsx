import React, { useState } from "react";

function SeatingPlanManager() {
  const [students, setStudents] = useState("");
  const [rooms, setRooms] = useState("");
  const [seatingPlan, setSeatingPlan] = useState(null);

  const generateSeatingPlan = () => {
    // Logic to assign students to rooms
    // Placeholder; you'll need to implement the actual logic
    setSeatingPlan("Seating Plan Generated...");
  };

  return (
    <div>
      <h1>Seating Plan Management</h1>
      <div>
        <label>Students (comma-separated):</label>
        <input
          type="text"
          value={students}
          onChange={(e) => setStudents(e.target.value)}
        />
      </div>
      <div>
        <label>Rooms (comma-separated):</label>
        <input
          type="text"
          value={rooms}
          onChange={(e) => setRooms(e.target.value)}
        />
      </div>
      <button onClick={generateSeatingPlan}>Generate Seating Plan</button>
      {seatingPlan && <div>{seatingPlan}</div>}
    </div>
  );
}

export default SeatingPlanManager;
