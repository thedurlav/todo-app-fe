const Task = ({ task }) => {
  return (
    <li className="task">
      <p>
        <b>{task.id})</b>
        {task.name}
      </p>
    </li>
  );
};

export default Task;
