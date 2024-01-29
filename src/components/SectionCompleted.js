import "bootstrap/dist/css/bootstrap.min.css";

export default function SectionCompleted({ onSelect }) {
  return (
    <li
      className="nav-item"
      role="presentation"
      onClick={() => onSelect("Completed")}
    >
      <a
        className="nav-link"
        id="ex1-tab-3"
        data-mdb-toggle="tab"
        href="#ex1-tabs-3"
        role="tab"
        aria-controls="ex1-tabs-3"
        aria-selected="false"
      >
        Completed
      </a>
    </li>
  );
}
