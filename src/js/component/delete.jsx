import React from "react";

const Delete = ({ onDelete }) => {
  return (
    <span
      className="badge badge-danger"
      onClick={onDelete}
      style={{ cursor: "pointer", color: "red" }}
    >
      <i className="fas fa-trash-alt"></i> Delete
    </span>
  );
};

export default Delete;
