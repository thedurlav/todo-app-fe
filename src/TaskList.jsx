import { useEffect } from "react";
import Task from "./Task";
import axios from "axios";

const TaskList = ({ tasks, setTasks, onDeleteTask, onUpdateTask }) => {
  useEffect(() => {
    async function fetchTask() {
      try {
        // let response = await axios.get("http://localhost:8080/todo/list");
        let response = await axios.get(
          "https://todoapp-production-11b7.up.railway.app/todo/list"
        );
        let data = response.data;
        setTasks(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchTask();
  }, [setTasks]);
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <Task
          task={task}
          onDeleteTask={onDeleteTask}
          onUpdateTask={onUpdateTask}
          key={task.id}
        />
      ))}
    </ul>
  );
};

export default TaskList;
