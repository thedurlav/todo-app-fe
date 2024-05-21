import { useState } from "react";
import "./App.css";
import TaskAdder from "./TaskAdder";
import TaskList from "./TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  async function handleAddTask(task) {
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
      console.log(data);
      setTasks((prevTasks) => [...prevTasks, data]);
      alert("New Task Added");
    } catch (error) {
      console.log(error);
    }
  }
  async function handleDeleteTask(id) {
    let confirmation = window.confirm("You want to delete?");
    if (confirmation) {
      try {
        // let response = await axios.delete(
        //   "http://localhost:8080/todo/deleteTask",
        //   { headers: { id: id } }
        // );
        let response = await axios.delete(
          "https://todoapp-production-11b7.up.railway.app/todo/deleteTask",
          { headers: { id: id } }
        );
        let data = await response.data;
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
        alert(data);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function handleUpdateTask(id) {
    try {
      let config = {
        headers: {
          id,
        },
      };
      // let response = await axios.put(
      //   "http://localhost:8080/todo/updateTask",
      //   null,
      //   config
      // );
      let response = await axios.put(
        "https://todoapp-production-11b7.up.railway.app/todo/updateTask",
        null,
        config
      );
      let data = await response.data;
      console.log(data);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? data : task))
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <h2>My ToDo List 📕</h2>
      <TaskAdder onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        onDeleteTask={handleDeleteTask}
        onUpdateTask={handleUpdateTask}
      />
    </div>
  );
}

export default App;
