import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import "./Header.css";

const phrases = ["A WEB DEVELOPER", "AN APP DEVELOPER", "AN ETHICAL HACKER"];

export default function Header() {
  const nameRef = useRef(null);
  const logoRef = useRef(null);

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    gsap.fromTo(
      [nameRef.current, logoRef.current],
      { opacity: 0, y: -14 },
      { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", stagger: 0.1 },
    );
  }, []);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const newText = currentPhrase.slice(0, displayedText.length + 1);
          setDisplayedText(newText);
          if (newText === currentPhrase) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          const newText = currentPhrase.slice(0, displayedText.length - 1);
          setDisplayedText(newText);
          if (newText === "") {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 100 : 200,
    );
    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  return (
    <header className="site-header">
      <Link to="/" className="site-header__brand" ref={nameRef}>
        <h1>HAIDER ALI</h1>
        <p>
          {displayedText}
          <span className="typing-cursor">|</span>
        </p>
      </Link>
      <Link to="/" className="site-header__logo" ref={logoRef}>
        {"<MHA/>"}
      </Link>
    </header>
  );
}
