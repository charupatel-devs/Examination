import React, { useState } from "react";

function DatesheetGenerator() {
  const [startDate, setStartDate] = useState("");
  const [subjects, setSubjects] = useState("");
  const [generatedDatesheet, setGeneratedDatesheet] = useState(null);

  const generateDatesheet = () => {
    // Logic to generate datesheet based on startDate and subjects
    // This is a placeholder; you'll need to implement the actual logic
    setGeneratedDatesheet("Generated Datesheet...");
  };

  return (
    <div>
      <h1>Exam Datesheet Generat</h1>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label>Subjects (comma-separated):</label>
        <input
          type="text"
          value={subjects}
          onChange={(e) => setSubjects(e.target.value)}
        />
      </div>
      <button onClick={generateDatesheet}>Generate Datesheet</button>
      {generatedDatesheet && <div>{generatedDatesheet}</div>}
    </div>
  );
}

export default DatesheetGenerator;
