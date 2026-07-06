import { useEffect, useRef } from "react";
import { Link, useParams } from "react-router-dom";
import gsap from "gsap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getProject } from "../data/projects";
import "./ProjectDetail.css";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProject(id);
  const bannerRef = useRef(null);
  const bodyRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      bannerRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    ).fromTo(
      bodyRef.current.children,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out" },
      "-=0.25"
    );
  }, [id]);

  if (!project) {
    return (
      <div className="page page--with-sidebar">
        <Header />
        <Sidebar />
        <p>Project not found.</p>
        <Link to="/projects">&larr; Back to projects</Link>
      </div>
    );
  }

  return (
    <div className="page page--with-sidebar">
      <Header />
      <Sidebar />

      <div className={`project-banner project-banner--${project.color}`} ref={bannerRef}>
        <span className="project-banner__name">{project.name}</span>
        <span className="project-banner__thumb" />
      </div>

      <div className="project-body" ref={bodyRef}>
        <div className="project-body__row">
          <h3>About</h3>
          <span className="project-tag">{project.tag}</span>
        </div>
        <p className="project-tagline">{project.tagline}</p>
        <p className="project-about">{project.about}</p>

        <ul className="project-stack">
          {project.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>

        <Link to="/projects" className="back-link">
          &larr; View other projects
        </Link>
      </div>
    </div>
  );
}
