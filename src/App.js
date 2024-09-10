import React from "react";
import IssueList from "./components/IssueList";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Linear Issue Tracker</h1>
      <IssueList />
    </div>
  );
}

export default App;
