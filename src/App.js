import { useState } from "react";
import "./App.css";
import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  async function handleAddTask(task) {
    //

    try {
      // let response = await axios.post(
      //   "http://localhost:8080/todo/addTask",
      //   task,
      //   { headers: { "Content-Type": "application/json" } }
      // );
      let response = await axios.post(
        "https://todoapp-production-11b7.up.railway.app/todo/addTask",
        task,
        { headers: { "Content-Type": "application/json" } }
      );
      let data = await response.data;
      setTasks((prevTasks) => [...prevTasks, data]);
      alert("New Task Added");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h2>My ToDo List 📕</h2>
      <TaskAdder onAddTask={handleAddTask} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
