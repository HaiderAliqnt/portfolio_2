import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Contact.css";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/HaiderAliqnt",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/haider-ali-35b72b304/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3.5a1.96 1.96 0 1 0 0 3.92 1.96 1.96 0 0 0 0-3.92ZM20.44 20h-3.37v-5.6c0-1.34-.03-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V20H9.68V8.5h3.24v1.57h.05c.45-.85 1.55-1.75 3.2-1.75 3.42 0 4.05 2.25 4.05 5.18V20Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:muhammadhaideraliua@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xeebnvba";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    gsap.fromTo(
      formRef.current.children,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.09, ease: "power2.out" },
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
        gsap.fromTo(
          ".submit-btn",
          { scale: 1 },
          {
            scale: 1.12,
            duration: 0.15,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
        );
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="page page--with-sidebar">
      <Header />
      <Sidebar />

      <h2 className="section-title">Hey, let's grab a coffee together</h2>

      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email.."
          required
          className="contact-input"
          disabled={status === "sending"}
        />
        <textarea
          name="message"
          placeholder="Text...."
          required
          className="contact-textarea"
          rows={6}
          disabled={status === "sending"}
        />

        <div className="contact-form__footer">
          <div className="socials">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="social-btn"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <button
            type="submit"
            className="submit-btn"
            aria-label="Send message"
            disabled={status === "sending"}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>

        {status === "sent" && (
          <p className="contact-status">Message sent — talk soon.</p>
        )}
        {status === "error" && (
          <p className="contact-status contact-status--error">
            Something went wrong — try again, or email me directly.
          </p>
        )}
      </form>
    </div>
  );
}
