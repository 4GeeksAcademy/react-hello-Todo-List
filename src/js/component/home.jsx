import React, { useState } from "react";
import Element from "./element";


const Home = () => {
  const [newTodo, setNewTodo] = useState(""); // useState hook to create a new state variable called newTodo and a function to update it called setNewTodo. The initial value of the state variable is an empty string.
  const [list, setList] = useState(["Make the bed", "Wash my hands"]); // 
  const [hoveredIndex, setHoveredIndex] = useState(null); 

  const addNewTodo = () => { // function to add a new tasks to the list
    setList([...list, newTodo]);// setList function to update the list state variable. We pass it a new array that contains all the elements of the previous list array, plus the newTodo string.
    setNewTodo(""); // here we reset the newTodo state variable to an empty string.
  };

  const deleteTask = (index) => { // function to delete a task from the list
    const updatedList = [...list]; // we create a copy of the list array
    updatedList.splice(index, 1); // we remove the element at the index position
    setList(updatedList); // we update the list state variable with the updatedList array
  };

  return (
    <div className="container mt-4 alert alert-info" role="alert">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setNewTodo(e.target.value)} // onChange event handler to update the newTodo state variable with the value of the input field
          value={newTodo} // display new todo value
          id="add-todo"
          placeholder="Add your new task here"
          onKeyUp={(e) => { // onKeyUp event handler to add a new task when the user presses the Enter key
            if (e.key === "Enter") {
              addNewTodo(); 
            }
          }}
        />
        <div className="input-group-append">
          <button
            className="btn btn-primary ms-2"
            onClick={addNewTodo} // other way to add a new task, using button
            type="button"
            id="add-button"
          >
            AddTask
          </button>
        </div>
      </div>

      {list.length === 0 ? (
        <p className="mt-3">No tasks, add a task please</p>
      ) : (
        <ul className="list-group mt-3">
          {list.map((task, index) => ( // map method to iterate over the list array and display each task
            <Element
              key={index} // key prop to uniquely identify each element
              text={task} // text prop to display the task
              onDelete={() => deleteTask(index)} // onDelete prop to delete a task
              onMouseEnter={() => setHoveredIndex(index)} 
              onMouseLeave={() => setHoveredIndex(null)}
              isHovered={index === hoveredIndex} 
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
