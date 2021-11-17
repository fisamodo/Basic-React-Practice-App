import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th",
      reminder: true,
    },
    {
      id: 2,
      text: "Football Appointment",
      day: "Feb 9th",
      reminder: true,
    },
    {
      id: 3,
      text: "Tennis Appointment",
      day: "Feb 4th",
      reminder: false,
    },
  ]);

//Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />
      : "No Tasks to Show"}
    </div>
  );
}

export default App;
