"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    opacity: number;
    rotation: number;
    rotationSpeed: number;
}

export default function MegaMendungBg() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const checkTheme = () => {
            setIsDark(document.documentElement.classList.contains("dark"));
        };
        checkTheme();
        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["class"],
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        setCanvasSize();
        window.addEventListener("resize", setCanvasSize);

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            };
        };
        canvas.addEventListener("mousemove", handleMouseMove);

        // Colors based on theme
        const colors = isDark
            ? ["#7dd3fc", "#38bdf8", "#0ea5e9", "#0284c7"] // Sky blue for dark
            : ["#fb923c", "#f97316", "#ea580c", "#fdba74"]; // Orange for light

        // Create particles
        const particles: Particle[] = [];
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 12 + 4,
                speedX: (Math.random() - 0.5) * 2,
                speedY: (Math.random() - 0.5) * 2,
                opacity: Math.random() * 0.5 + 0.3,
                rotation: Math.random() * 360,
                rotationSpeed: (Math.random() - 0.5) * 4,
            });
        }

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach((p, i) => {
                // Mouse repulsion
                const dx = mouseRef.current.x - p.x;
                const dy = mouseRef.current.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120) {
                    const force = (120 - dist) / 120;
                    p.speedX -= (dx / dist) * force * 0.5;
                    p.speedY -= (dy / dist) * force * 0.5;
                }

                // Update position
                p.x += p.speedX;
                p.y += p.speedY;
                p.rotation += p.rotationSpeed;

                // Slow down
                p.speedX *= 0.99;
                p.speedY *= 0.99;

                // Add random movement
                p.speedX += (Math.random() - 0.5) * 0.1;
                p.speedY += (Math.random() - 0.5) * 0.1;

                // Bounce off edges
                if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

                // Keep in bounds
                p.x = Math.max(0, Math.min(canvas.width, p.x));
                p.y = Math.max(0, Math.min(canvas.height, p.y));

                // Draw cloud-like shape (Mega Mendung inspired)
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = p.opacity;

                const color = colors[i % colors.length];
                ctx.fillStyle = color;

                // Draw curved cloud shape
                ctx.beginPath();
                ctx.arc(0, 0, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Add smaller circles for cloud effect
                ctx.beginPath();
                ctx.arc(p.size * 0.6, -p.size * 0.3, p.size * 0.5, 0, Math.PI * 2);
                ctx.fill();

                ctx.beginPath();
                ctx.arc(-p.size * 0.5, -p.size * 0.2, p.size * 0.4, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            });

            animationId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            canvas.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, [isDark]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-5 w-full h-full pointer-events-auto"
            style={{ touchAction: "none" }}
        />
    );
}
