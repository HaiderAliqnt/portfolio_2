import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { projects } from "../data/projects";
import { ProjectIcon } from "../components/projectIcons";
import "./Projects.css";

const FILTERS = ["ALL", "DEV", "CYB"];

export default function Projects() {
  const [filter, setFilter] = useState("ALL");
  const listRef = useRef(null);

  const visible = projects.filter((p) => filter === "ALL" || p.tag === filter);

  useEffect(() => {
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.07, ease: "power2.out" },
    );
  }, [filter]);

  return (
    <div className="page page--with-sidebar">
      <Header />
      <Sidebar />

      <div className="projects-layout">
        <div>
          <h2 className="section-title section-title--center">Projects</h2>
          <div className="project-list" ref={listRef}>
            {visible.map((p) => (
              <Link
                to={`/projects/${p.id}`}
                key={p.id}
                className={`project-card project-card--${p.color}`}
              >
                <span className="project-card__name">{p.name}</span>
                <span className="project-card__thumb">
                  <ProjectIcon id={p.id} />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="filter-group">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={
                "filter-btn" + (filter === f ? " filter-btn--active" : "")
              }
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
