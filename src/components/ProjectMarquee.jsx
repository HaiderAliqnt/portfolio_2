import { PROJECT_ICONS } from "./projectIcons.jsx";
import "./ProjectMarquee.css";

const ICON_IDS = Object.keys(PROJECT_ICONS);

export default function ProjectMarquee() {
  const track = [...ICON_IDS, ...ICON_IDS];

  return (
    <div className="project-marquee" aria-hidden="true">
      <div className="project-marquee__track">
        {track.map((id, i) => {
          const Icon = PROJECT_ICONS[id];
          return (
            <span className="project-marquee__item" key={`${id}-${i}`}>
              <Icon />
            </span>
          );
        })}
      </div>
    </div>
  );
}
