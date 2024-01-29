import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";

import Add from "./components/Add";
import TasksType from "./components/TasksType";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const storedValue = localStorage.getItem("tasks");
    return JSON.parse(storedValue) || [];
  });
  console.log(localStorage.getItem("tasks"));

  const [section, setSection] = useState("All");

  function handleAdd(task) {
    setTasks((tasks) => [...tasks, task]);
  }

  function handleToggleTask(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks((tasks) => tasks.filter((task) => task.id !== id));
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="card-body p-5">
              <Add onAdd={handleAdd} />
              <TasksType onSelect={setSection} />
              <TaskList
                type={section}
                tasks={tasks}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
