import "bootstrap/dist/css/bootstrap.min.css";

import SectionAll from "./SectionAll";
import SectionActive from "./SectionActive";
import SectionCompleted from "./SectionCompleted";

export default function TasksType({ onSelect }) {
  return (
    <ul className="nav nav-tabs mb-4 pb-2" id="ex1" role="tablist">
      <SectionAll onSelect={onSelect} />
      <SectionActive onSelect={onSelect} />
      <SectionCompleted onSelect={onSelect} />
    </ul>
  );
}
