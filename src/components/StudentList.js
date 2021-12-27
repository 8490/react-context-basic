import React, { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentList = () => {
  const { students } = useContext(StudentContext);

  return (
    <div>
      <h1>User List</h1>
      {students.map((student) => (
        <h2>{student.name}</h2>
      ))}
    </div>
  );
};

export default StudentList;
