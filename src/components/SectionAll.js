import "bootstrap/dist/css/bootstrap.min.css";

export default function SectionAll({ onSelect }) {
  return (
    <li
      className="nav-item"
      role="presentation"
      onClick={() => onSelect("All")}
    >
      <a
        className="nav-link active"
        id="ex1-tab-1"
        data-mdb-toggle="tab"
        href="#ex1-tabs-1"
        role="tab"
        aria-controls="ex1-tabs-1"
        aria-selected="true"
      >
        All
      </a>
    </li>
  );
}
