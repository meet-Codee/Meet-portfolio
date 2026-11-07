import { useEffect, useRef } from "react";
import "./CyberBackground.css";

function CyberBackground({ palette = "kyoto" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const paletteColors = {
      kyoto: ["#00d4ff", "#ff007f", "#8b5cf6", "#ffb800", "#38bdf8"],
      solar: ["#ff3366", "#ffb800", "#a855f7", "#00d4ff", "#fb7185"],
      nova: ["#a855f7", "#00d4ff", "#ff007f", "#c084fc", "#ffb800"],
      gold: ["#ffb800", "#00d4ff", "#ff007f", "#fde047", "#a855f7"],
    };
    const colors = paletteColors[palette] || paletteColors.kyoto;

    const mouse = { x: width * 0.5, y: height * 0.4, tx: width * 0.5, ty: height * 0.4 };
    const onMove = (e) => {
      mouse.tx = e.clientX;
      mouse.ty = e.clientY;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    // Create 4K Stardust & Orbital Particles
    const count = Math.min(Math.floor((width * height) / 14000), 115);
    const stars = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      size: Math.random() * 2 + 0.7,
      color: colors[i % colors.length],
      alpha: Math.random() * 0.65 + 0.25,
      phase: Math.random() * Math.PI * 2,
    }));

    // Background Ambient Orbital Rings (Large cosmic gyroscope in deep space)
    const ambientRings = [
      { rx: 0.38, ry: 0.14, speed: 0.0022, tilt: -0.32, color: colors[0] },
      { rx: 0.46, ry: 0.18, speed: -0.0016, tilt: 0.42, color: colors[1] },
      { rx: 0.54, ry: 0.21, speed: 0.0011, tilt: -0.15, color: colors[2] },
    ];

    let angle = 0;

    const render = () => {
      angle += 1;
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // 1. Interactive Cursor Nebula Spotlight
      const nebula = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        10,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.42
      );
      nebula.addColorStop(0, "rgba(0, 212, 255, 0.075)");
      nebula.addColorStop(0.35, "rgba(255, 0, 127, 0.045)");
      nebula.addColorStop(0.7, "rgba(139, 92, 246, 0.025)");
      nebula.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      // 2. Deep-Space Gyroscopic Orbital Rings
      const cx = width * 0.5 + (mouse.x - width * 0.5) * 0.04;
      const cy = height * 0.48 + (mouse.y - height * 0.5) * 0.04;
      const minDim = Math.min(width, height);

      ambientRings.forEach((ring, idx) => {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ring.tilt + (prefersReducedMotion ? 0 : angle * ring.speed));
        ctx.beginPath();
        ctx.ellipse(0, 0, minDim * ring.rx, minDim * ring.ry, 0, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.globalAlpha = 0.09;
        ctx.lineWidth = 1.2;
        ctx.setLineDash(idx % 2 === 0 ? [8, 14] : []);
        ctx.stroke();

        // Orbiting satellite spark on each ambient ring
        const satAngle = angle * ring.speed * 6 + idx * 2;
        const sx = Math.cos(satAngle) * (minDim * ring.rx);
        const sy = Math.sin(satAngle) * (minDim * ring.ry);
        ctx.beginPath();
        ctx.arc(sx, sy, 3, 0, Math.PI * 2);
        ctx.fillStyle = ring.color;
        ctx.globalAlpha = 0.55;
        ctx.shadowColor = ring.color;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();
      });

      // 3. Stars & Neural Constellation Connections
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (!prefersReducedMotion) {
          s.x += s.vx * s.z;
          s.y += s.vy * s.z;

          if (s.x < 0) s.x = width;
          if (s.x > width) s.x = 0;
          if (s.y < 0) s.y = height;
          if (s.y > height) s.y = 0;

          const dx = mouse.x - s.x;
          const dy = mouse.y - s.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 150 && dist > 0) {
            const force = (150 - dist) / 150;
            s.x -= (dx / dist) * force * 1.4;
            s.y -= (dy / dist) * force * 1.4;
          }
        }

        const twinkle = 0.65 + 0.35 * Math.sin(angle * 0.03 + s.phase);
        ctx.save();
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = s.color;
        ctx.globalAlpha = s.alpha * twinkle;
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.restore();

        for (let j = i + 1; j < stars.length; j++) {
          const s2 = stars[j];
          const d = Math.hypot(s.x - s2.x, s.y - s2.y);
          if (d < 95) {
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(s.x, s.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.strokeStyle = s.color;
            ctx.globalAlpha = (1 - d / 95) * 0.13;
            ctx.lineWidth = 0.65;
            ctx.stroke();
            ctx.restore();
          }
        }
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [palette]);

  return <canvas ref={canvasRef} className="cyber-canvas" aria-hidden="true" />;
}

export default CyberBackground;
