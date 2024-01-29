import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import uuid from "react-uuid";

export default function Add({ onAdd }) {
  const [task, setTask] = useState("");
  return (
    <form className="d-flex justify-content-center align-items-center mb-4">
      <div className="form-outline flex-fill">
        <input
          type="text"
          id="form2"
          className="form-control"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label className="form-label" htmlFor="form2">
          New task...
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-info ms-2"
        style={{ marginTop: "-34px" }}
        onClick={() => {
          onAdd({
            id: uuid(),
            text: task,
            checked: false,
          });
          setTask("");
        }}
      >
        Add
      </button>
    </form>
  );
}
