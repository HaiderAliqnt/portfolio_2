import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import Header from "../components/Header";
import ProjectMarquee from "../components/ProjectMarquee";
import "./Home.css";
import doodle from "../assets/doodle2.png";
export default function Home() {
  const tilesRef = useRef([]);
  tilesRef.current = [];

  const addTile = (el) => {
    if (el && !tilesRef.current.includes(el)) tilesRef.current.push(el);
  };

  useEffect(() => {
    gsap.fromTo(
      tilesRef.current,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.08,
        delay: 0.15,
      },
    );
  }, []);

  const handleEnter = (e) => {
    gsap.to(e.currentTarget, { y: -4, duration: 0.25, ease: "power2.out" });
  };
  const handleLeave = (e) => {
    gsap.to(e.currentTarget, { y: 0, duration: 0.25, ease: "power2.out" });
  };

  return (
    <div className="page">
      <Header />

      <div className="home-grid">
        <div className="home-grid__stack">
          <Link
            to="/about"
            ref={addTile}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="home-tile"
          >
            <span>About Me</span>
            <span className="home-tile__glyph home-tile__glyph--figure">
              <img src="\assets\doodle2.png"></img>
              {/* {doodle}*/}
            </span>
          </Link>

          <Link
            to="/experience"
            ref={addTile}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="home-tile"
          >
            <span>Experience</span>
            <span className="home-tile__glyph">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="3" y="7" width="18" height="13" rx="2" />
                <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>
            </span>
          </Link>

          <Link
            to="/contact"
            ref={addTile}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            className="home-tile"
          >
            <span>Contact</span>
            <span className="home-tile__glyph">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <rect x="4" y="4" width="16" height="16" rx="3" />
                <path d="M8 9h8M8 13h5" />
              </svg>
            </span>
          </Link>
        </div>

        <Link
          to="/projects"
          ref={addTile}
          onMouseEnter={handleEnter}
          onMouseLeave={handleLeave}
          className="home-tile home-tile--projects"
        >
          <div className="home-tile--projects__marquee-slot">
            <ProjectMarquee />
          </div>
          <span className="home-tile__glyph home-tile__glyph--outline">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.4"
            >
              <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" />
            </svg>
          </span>
          <span>Projects</span>
        </Link>
      </div>
    </div>
  );
}
