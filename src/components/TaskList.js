import "bootstrap/dist/css/bootstrap.min.css";

import Task from "./Task";

export default function TaskList({ tasks, onToggleTask, onDeleteTask, type }) {
  return (
    <div className="tab-content" id="ex1-content">
      <div
        className="tab-pane fade show active"
        id="ex1-tabs-1"
        role="tabpanel"
        aria-labelledby="ex1-tab-1"
      >
        <ul className="list-group mb-0">
          {type === "All" &&
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onToggleTask={onToggleTask}
                onDeleteTask={onDeleteTask}
              />
            ))}
          {type === "Active" &&
            tasks
              .filter((task) => !task.checked)
              .map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onToggleTask={onToggleTask}
                  onDeleteTask={onDeleteTask}
                />
              ))}
          {type === "Completed" &&
            tasks
              .filter((task) => task.checked)
              .map((task) => (
                <Task
                  key={task.id}
                  task={task}
                  onToggleTask={onToggleTask}
                  onDeleteTask={onDeleteTask}
                />
              ))}
        </ul>
      </div>
    </div>
  );
}
