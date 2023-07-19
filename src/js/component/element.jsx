import React, { useState } from "react";
import Delete from "./delete";

const Element = ({ text, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center"
      style={{ backgroundColor: "beige" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
      {isHovered && <Delete onDelete={onDelete} />}
    </li>
  );
};

export default Element;
