import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { experience } from "../data/experience";
import "./Experience.css";

const FILTERS = ["ALL", "FREELANCE", "CONTRACT"];

export default function Experience() {
  const [filter, setFilter] = useState("ALL");
  const listRef = useRef(null);
  const visible = experience.filter((e) => filter === "ALL" || e.tag === filter);

  useEffect(() => {
    gsap.fromTo(
      listRef.current.children,
      { opacity: 0, x: -16 },
      { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [filter]);

  return (
    <div className="page page--with-sidebar">
      <Header />
      <Sidebar />

      <h2 className="section-title">Experience</h2>

      <div className="experience-layout">
        <ol className="timeline" ref={listRef}>
          {visible.map((item) => (
            <li key={item.role + item.org} className="timeline__item">
              <div className="timeline__marker" />
              <div className="timeline__body">
                <div className="timeline__heading">
                  <h3>{item.role}</h3>
                  <span className="timeline__period">{item.period}</span>
                </div>
                <p className="timeline__org">{item.org}</p>
                <p className="timeline__desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

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
