import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const students = [
    {
      name: "Rahul Sharma",
      rollNumber: "CSE001",
      department: "Computer Science",
      semester: 6,
      cgpa: 9.2,
      photo: "https://i.pravatar.cc/150?img=12",
    },
    {
      name: "Priya Das",
      rollNumber: "CSE002",
      department: "Computer Science",
      semester: 6,
      cgpa: 8.7,
      photo: "https://i.pravatar.cc/150?img=47",
    },
    {
      name: "Amit Roy",
      rollNumber: "ECE003",
      department: "Electronics",
      semester: 4,
      cgpa: 9.5,
      photo: "https://i.pravatar.cc/150?img=11",
    },
    {
      name: "Sneha Sen",
      rollNumber: "IT004",
      department: "Information Technology",
      semester: 5,
      cgpa: 8.9,
      photo: "https://i.pravatar.cc/150?img=32",
    },
  ];

  const [sortOrder, setSortOrder] = useState("none");

  const sortedStudents = [...students].sort((a, b) => {
    if (sortOrder === "high") {
      return b.cgpa - a.cgpa;
    }

    if (sortOrder === "low") {
      return a.cgpa - b.cgpa;
    }

    return 0;
  });

  return (
    <div className="app">
      <Header title="Student Information Portal" />

      <main>
        <div className="controls">
          <label htmlFor="sort">Sort by CGPA:</label>

          <select
            id="sort"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Default Order</option>
            <option value="high">Highest to Lowest</option>
            <option value="low">Lowest to Highest</option>
          </select>
        </div>

        <StudentList students={sortedStudents} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
