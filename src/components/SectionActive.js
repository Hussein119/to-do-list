import "bootstrap/dist/css/bootstrap.min.css";

export default function SectionActive({ onSelect }) {
  return (
    <li
      className="nav-item"
      role="presentation"
      onClick={() => onSelect("Active")}
    >
      <a
        className="nav-link"
        id="ex1-tab-2"
        data-mdb-toggle="tab"
        href="#ex1-tabs-2"
        role="tab"
        aria-controls="ex1-tabs-2"
        aria-selected="false"
      >
        Active
      </a>
    </li>
  );
}
