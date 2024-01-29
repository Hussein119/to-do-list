import "bootstrap/dist/css/bootstrap.min.css";

export default function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li
      className="list-group-item d-flex align-items-center border-0 mb-2 rounded"
      style={{ backgroundColor: "#f4f6f7" }}
    >
      <input
        className="form-check-input me-2"
        type="checkbox"
        value={task.checked}
        aria-label="..."
        onChange={() => onToggleTask(task.id)}
      />

      {task.checked ? <s>{task.text}</s> : task.text}

      <button
        onClick={() => onDeleteTask(task.id)}
        className="btn btn-danger ms-auto"
      >
        Delete
      </button>
    </li>
  );
}
