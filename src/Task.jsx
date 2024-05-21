const Task = ({ task }) => {
  return (
    <li className="task">
      <p>{task.name}</p>
      <div className="buttons">
        <button>❌</button>
        <button>✅</button>
      </div>
    </li>
  );
};

export default Task;
