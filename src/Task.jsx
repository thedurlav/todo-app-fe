const Task = ({ task, onDeleteTask, onUpdateTask }) => {
  let isCompleted = task.completed;

  return (
    <li className="task">
      <p className={isCompleted ? "completed" : ""}>{task.name}</p>
      <div className="buttons">
        <button
          onClick={() => {
            onDeleteTask(task.id);
          }}
        >
          ❌
        </button>
        <button
          onClick={() => {
            isCompleted || onUpdateTask(task.id);
          }}
        >
          {isCompleted ? "🎯" : "✅"}
        </button>
      </div>
    </li>
  );
};

export default Task;
