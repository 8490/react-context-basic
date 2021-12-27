import React from "react";

const StudentItem = ({ student }) => {
  const { name, email, age, color } = student;
  return (
    <div>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <h4>{age}</h4>
      <h4>
        Color:
        <input type="text" value={color} />
      </h4>
    </div>
  );
};

export default StudentItem;
