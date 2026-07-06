import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./About.css";

const STACK = [
  "PostgreSQL",
  "Express JS",
  "React & React Native",
  "Node JS",
  "C & C++",
  "Python",
];

export default function About() {
  const contentRef = useRef(null);
  const noteRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      contentRef.current.children,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: "power2.out" },
    ).fromTo(
      noteRef.current,
      { opacity: 0, rotate: 0, scale: 0.9 },
      {
        opacity: 1,
        rotate: -6,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.6)",
      },
      "-=0.3",
    );
  }, []);

  return (
    <div className="page page--with-sidebar">
      <Header />
      <Sidebar />

      <div className="about-layout">
        <div className="about-content" ref={contentRef}>
          <h2 className="section-title">About me</h2>
          <p>
            Hey there, welcome to my den. I'm a CS sophomore at GIKI and a
            part-time developer, part-time hacker, based in Karachi, Pakistan.
          </p>
          <p>
            I love coffee, open source, and building things that hold up under
            pressure — whether that's a product people rely on or a system I'm
            trying to break on purpose. Let's create an impact together.
          </p>

          <h3 className="section-subtitle">Tech Stack</h3>
          <ul className="stack-list">
            {STACK.map((item) => (
              <li key={item}>
                <span className="stack-arrow">&rarr;</span> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="about-figure">
          <div className="sticky-note" ref={noteRef}>
            "I hope the systems I build create opportunities for others."
          </div>
          <div className="figure-frame">
            <img src="\assets\doodle2.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

function StickFigure() {
  return (
    <svg
      viewBox="0 0 100 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <circle cx="50" cy="26" r="16" />
      <path
        d="M32 20c3-11 33-11 36 1"
        fill="var(--accent-red)"
        stroke="var(--accent-red)"
        strokeWidth="2"
      />
      <line x1="50" y1="42" x2="50" y2="80" />
      <line x1="50" y1="52" x2="26" y2="68" />
      <line x1="50" y1="52" x2="74" y2="68" />
      <line x1="50" y1="80" x2="30" y2="112" />
      <line x1="50" y1="80" x2="70" y2="112" />
    </svg>
  );
}
