import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import "./StarryBackground.css";

// Deterministic-ish scattered stars, regenerated only once per mount.
function generateStars(count) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 1.6 + 1,
      delay: Math.random() * 4,
      duration: Math.random() * 3 + 2.5,
    });
  }
  return stars;
}

export default function StarryBackground() {
  const stars = useMemo(() => generateStars(70), []);
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    let cancelled = false;
    let timeoutId;

    const spawnShootingStar = () => {
      if (cancelled) return;

      const star = document.createElement("div");
      star.className = "shooting-star";

      // Start somewhere in the upper-left two thirds of the screen,
      // travel diagonally down-right, like the reference sketch.
      const startX = Math.random() * window.innerWidth * 0.6;
      const startY = Math.random() * window.innerHeight * 0.4;
      const travel = 420 + Math.random() * 260;
      const angle = 32 + Math.random() * 10; // degrees
      const rad = (angle * Math.PI) / 180;
      const dx = Math.cos(rad) * travel;
      const dy = Math.sin(rad) * travel;

      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      star.style.transform = `rotate(${angle}deg)`;

      layer.appendChild(star);

      const tl = gsap.timeline({
        onComplete: () => {
          star.remove();
        },
      });

      tl.set(star, { opacity: 0, x: 0, y: 0 })
        .to(star, {
          opacity: 1,
          duration: 0.15,
          ease: "power1.in",
        })
        .to(
          star,
          {
            x: dx,
            y: dy,
            duration: 0.9,
            ease: "power1.out",
          },
          "<"
        )
        .to(
          star,
          {
            opacity: 0,
            duration: 0.35,
          },
          "-=0.35"
        );

      // schedule next one, 2 - 3.2s later
      timeoutId = setTimeout(spawnShootingStar, 2000 + Math.random() * 1200);
    };

    timeoutId = setTimeout(spawnShootingStar, 900);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="starry-bg" aria-hidden="true">
      <div className="starry-bg__static">
        {stars.map((s) => (
          <span
            key={s.id}
            className="static-star"
            style={{
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>
      <div className="starry-bg__shooting" ref={layerRef} />
    </div>
  );
}
