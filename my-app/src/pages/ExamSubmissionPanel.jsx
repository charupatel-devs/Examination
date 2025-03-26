import React, { useState } from "react";

function ExamSubmissionPanel() {
  const [examDetails, setExamDetails] = useState("");
  const [submissionReceipt, setSubmissionReceipt] = useState(null);

  const submitExam = () => {
    // Logic to submit exam copies
    // Placeholder; you'll need to implement the actual logic
    setSubmissionReceipt("Submission Receipt Generated...");
  };

  return (
    <div>
      <h1>Exam Submission Panel</h1>
      <div>
        <label>Exam Details:</label>
        <textarea
          value={examDetails}
          onChange={(e) => setExamDetails(e.target.value)}
        />
      </div>
      <button onClick={submitExam}>Submit Exam</button>
      {submissionReceipt && <div>{submissionReceipt}</div>}
    </div>
  );
}

export default ExamSubmissionPanel;
