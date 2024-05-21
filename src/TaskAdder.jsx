import { useState } from "react";

const TaskAdder = ({ onAddTask }) => {
  const [name, setName] = useState("");
  function addNewTask(e) {
    e.preventDefault();
    onAddTask({ name });
    setName("");
  }

  return (
    <form className="task-adder">
      <input
        type="text"
        placeholder="Write the task here...."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button
        onClick={(e) => {
          addNewTask(e);
        }}
      >
        Add
      </button>
    </form>
  );
};

export default TaskAdder;
