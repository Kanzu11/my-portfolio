import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  baseBrightness: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
}

interface FloatingShape {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  size: number;
  type: "cube" | "octahedron" | "diamond";
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates smoothed with lerp
    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    // 1. Star Field with Twinkling
    const starCount = Math.min(140, Math.floor((width * height) / 8000));
    const stars: Star[] = [];

    // Warm human starlight palette
    const starColors = [
      "rgba(255, 255, 255, ",
      "rgba(255, 245, 230, ",
      "rgba(240, 163, 91, ",  // Warm amber
      "rgba(255, 215, 160, ", // Soft gold
    ];

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: (Math.random() - 0.5) * width * 1.8,
        y: (Math.random() - 0.5) * height * 1.8,
        z: Math.random() * 900 + 100,
        size: Math.random() * 1.8 + 0.6,
        baseBrightness: Math.random() * 0.5 + 0.35,
        twinkleSpeed: Math.random() * 2 + 0.8,
        phase: Math.random() * Math.PI * 2,
        color: starColors[Math.floor(Math.random() * starColors.length)],
      });
    }

    // 2. 3D Floating Geometries
    const shapes: FloatingShape[] = [
      {
        x: -width * 0.28,
        y: -height * 0.2,
        z: 400,
        vx: 0.1,
        vy: -0.06,
        vz: 0.04,
        rotX: 0.3,
        rotY: 0.2,
        rotZ: 0.1,
        vRotX: 0.005,
        vRotY: 0.008,
        vRotZ: 0.003,
        size: 38,
        type: "cube",
      },
      {
        x: width * 0.3,
        y: -height * 0.14,
        z: 480,
        vx: -0.09,
        vy: 0.08,
        vz: -0.04,
        rotX: 1.1,
        rotY: 0.8,
        rotZ: 0.4,
        vRotX: 0.006,
        vRotY: 0.004,
        vRotZ: 0.007,
        size: 42,
        type: "octahedron",
      },
      {
        x: width * 0.24,
        y: height * 0.26,
        z: 450,
        vx: -0.07,
        vy: -0.1,
        vz: 0.03,
        rotX: 0.5,
        rotY: 1.2,
        rotZ: 0.3,
        vRotX: 0.004,
        vRotY: 0.007,
        vRotZ: 0.005,
        size: 34,
        type: "diamond",
      },
      {
        x: -width * 0.32,
        y: height * 0.3,
        z: 500,
        vx: 0.08,
        vy: 0.06,
        vz: -0.03,
        rotX: 0.8,
        rotY: 0.4,
        rotZ: 0.9,
        vRotX: 0.005,
        vRotY: 0.005,
        vRotZ: 0.003,
        size: 40,
        type: "cube",
      },
    ];

    function rotate3D(p: Point3D, rx: number, ry: number, rz: number): Point3D {
      let y1 = p.y * Math.cos(rx) - p.z * Math.sin(rx);
      let z1 = p.y * Math.sin(rx) + p.z * Math.cos(rx);
      let x1 = p.x;

      let x2 = x1 * Math.cos(ry) + z1 * Math.sin(ry);
      let z2 = -x1 * Math.sin(ry) + z1 * Math.cos(ry);
      let y2 = y1;

      let x3 = x2 * Math.cos(rz) - y2 * Math.sin(rz);
      let y3 = x2 * Math.sin(rz) + y2 * Math.cos(rz);
      let z3 = z2;

      return { x: x3, y: y3, z: z3 };
    }

    const cubeVertices: Point3D[] = [
      { x: -1, y: -1, z: -1 },
      { x: 1, y: -1, z: -1 },
      { x: 1, y: 1, z: -1 },
      { x: -1, y: 1, z: -1 },
      { x: -1, y: -1, z: 1 },
      { x: 1, y: -1, z: 1 },
      { x: 1, y: 1, z: 1 },
      { x: -1, y: 1, z: 1 },
    ];
    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
    ];

    const octaVertices: Point3D[] = [
      { x: 0, y: -1.3, z: 0 },
      { x: 0, y: 1.3, z: 0 },
      { x: -1, y: 0, z: 0 },
      { x: 1, y: 0, z: 0 },
      { x: 0, y: 0, z: -1 },
      { x: 0, y: 0, z: 1 },
    ];
    const octaEdges = [
      [0, 2], [0, 3], [0, 4], [0, 5],
      [1, 2], [1, 3], [1, 4], [1, 5],
      [2, 4], [4, 3], [3, 5], [5, 2],
    ];

    const fov = 680;
    let time = 0;

    const render = () => {
      time += 0.02;

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.045;
      mouseY += (targetMouseY - mouseY) * 0.045;

      const normMouseX = (mouseX / width - 0.5) * 2;
      const normMouseY = (mouseY / height - 0.5) * 2;

      // Background clear
      ctx.fillStyle = "#07090e";
      ctx.fillRect(0, 0, width, height);

      // Subtle warm ambient glow around mouse
      const mouseGlow = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        width * 0.45
      );
      mouseGlow.addColorStop(0, "rgba(240, 163, 91, 0.045)");
      mouseGlow.addColorStop(0.5, "rgba(255, 245, 230, 0.015)");
      mouseGlow.addColorStop(1, "transparent");
      ctx.fillStyle = mouseGlow;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;

      // Render Twinkling Stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        // Slight drift
        star.y -= 0.15;
        if (star.y < -height) star.y = height;

        // Mouse parallax
        const starTiltX = star.x - normMouseX * 45;
        const starTiltY = star.y - normMouseY * 35;

        const scale = fov / (fov + star.z);
        const sx = centerX + starTiltX * scale;
        const sy = centerY + starTiltY * scale;

        // Skip if outside viewport
        if (sx < 0 || sx > width || sy < 0 || sy > height) continue;

        // Twinkle calculation
        const twinkle = Math.sin(time * star.twinkleSpeed + star.phase);
        const brightness = Math.max(
          0.15,
          Math.min(1, star.baseBrightness + twinkle * 0.35)
        );

        ctx.fillStyle = `${star.color}${brightness})`;
        ctx.beginPath();
        const renderSize = Math.max(0.7, star.size * scale);
        ctx.arc(sx, sy, renderSize, 0, Math.PI * 2);
        ctx.fill();

        // Cross sparkle on brightest stars
        if (brightness > 0.8 && renderSize > 1.2) {
          ctx.strokeStyle = `${star.color}${brightness * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(sx - 3.5, sy);
          ctx.lineTo(sx + 3.5, sy);
          ctx.moveTo(sx, sy - 3.5);
          ctx.lineTo(sx, sy + 3.5);
          ctx.stroke();
        }
      }

      // Render 3D Floating Shapes
      shapes.forEach((shape) => {
        shape.x += shape.vx;
        shape.y += shape.vy;
        shape.z += shape.vz;
        shape.rotX += shape.vRotX;
        shape.rotY += shape.vRotY;
        shape.rotZ += shape.vRotZ;

        if (shape.x < -width * 0.6) shape.x = width * 0.6;
        if (shape.x > width * 0.6) shape.x = -width * 0.6;
        if (shape.y < -height * 0.6) shape.y = height * 0.6;
        if (shape.y > height * 0.6) shape.y = -height * 0.6;

        const targetWorldX = shape.x - normMouseX * 65;
        const targetWorldY = shape.y - normMouseY * 55;

        const scale = fov / (fov + shape.z);
        const screenOriginX = centerX + targetWorldX * scale;
        const screenOriginY = centerY + targetWorldY * scale;

        const vertices = shape.type === "octahedron" ? octaVertices : cubeVertices;
        const edges = shape.type === "octahedron" ? octaEdges : cubeEdges;

        const projected = vertices.map((v) => {
          const local: Point3D = {
            x: v.x * shape.size,
            y: v.y * shape.size,
            z: v.z * shape.size,
          };
          const r = rotate3D(
            local,
            shape.rotX + normMouseY * 0.25,
            shape.rotY + normMouseX * 0.25,
            shape.rotZ
          );
          return {
            x: screenOriginX + r.x * scale,
            y: screenOriginY + r.y * scale,
            depth: r.z,
          };
        });

        // Warm amber wireframe edges
        ctx.strokeStyle = "rgba(240, 163, 91, 0.22)";
        ctx.lineWidth = 1;

        edges.forEach(([startIdx, endIdx]) => {
          const p1 = projected[startIdx];
          const p2 = projected[endIdx];
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        });

        // Glowing joints
        projected.forEach((pt) => {
          ctx.beginPath();
          ctx.arc(pt.x, pt.y, 1.5 * scale, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 235, 210, 0.65)";
          ctx.fill();
        });
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldReduceMotion]);

  return (
    <div className="interactive-bg-container" aria-hidden="true">
      <canvas ref={canvasRef} className="interactive-bg-canvas" />
    </div>
  );
}
