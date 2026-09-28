"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Set up Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create Atmospheric Wave Grid Mesh
    const planeGeo = new THREE.PlaneGeometry(42, 28, 48, 36);
    const planeMat = new THREE.MeshBasicMaterial({
      color: 0x444444,
      wireframe: true,
      transparent: true,
      opacity: 0.18,
    });
    const waveMesh = new THREE.Mesh(planeGeo, planeMat);
    waveMesh.rotation.x = -Math.PI / 3.2;
    waveMesh.position.y = -3;
    waveMesh.position.z = -2;
    scene.add(waveMesh);

    // Create Ambient Floating Particles
    const particleCount = window.innerWidth < 768 ? 120 : 280;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 45;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 20;

      positions[i] = x;
      positions[i + 1] = y;
      positions[i + 2] = z;

      originalPositions[i] = x;
      originalPositions[i + 1] = y;
      originalPositions[i + 2] = z;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMat = new THREE.PointsMaterial({
      color: 0xaaaaaa,
      size: 0.08,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // Pointer and Scroll Tracking with Smooth Interpolation
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const onMouseMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      targetMouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    // Handle Window Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const positionAttribute = planeGeo.attributes.position;
    const count = positionAttribute.count;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse and scroll values
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;
      scrollY += (targetScrollY - scrollY) * 0.08;

      // Animate plane geometry vertices like fluid waves
      for (let i = 0; i < count; i++) {
        const u = positionAttribute.getX(i);
        const v = positionAttribute.getY(i);
        const z =
          Math.sin(u * 0.35 + elapsedTime * 0.8) * 0.75 +
          Math.cos(v * 0.4 + elapsedTime * 0.6) * 0.6;
        positionAttribute.setZ(i, z);
      }
      positionAttribute.needsUpdate = true;

      // Subtle parallax response to mouse and scroll
      waveMesh.rotation.z = mouseX * 0.08;
      waveMesh.rotation.x = -Math.PI / 3.2 - mouseY * 0.08;
      waveMesh.position.y = -3 - scrollY * 0.005;

      particles.rotation.y = elapsedTime * 0.03 + mouseX * 0.15;
      particles.rotation.x = mouseY * 0.1;
      particles.position.y = -scrollY * 0.004;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);

      planeGeo.dispose();
      planeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none -z-1 overflow-hidden opacity-80"
      aria-hidden="true"
    />
  );
}
