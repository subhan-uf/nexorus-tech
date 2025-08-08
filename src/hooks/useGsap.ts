import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lightweight GSAP setup with Apple-like subtlety
export function useGsap() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return; // Respect user preferences

    gsap.registerPlugin(ScrollTrigger);

    // Base reveal on scroll for sections
    const sections = gsap.utils.toArray<HTMLElement>("section");
    sections.forEach((section) => {
      const targets = section.querySelectorAll(
        ".container, h1, h2, h3, p, .apple-card, .apple-card-lg, button"
      );
      gsap.from(targets, {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: "power2.out",
        stagger: 0.06,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Gentle parallax for background gradient orbs
    gsap.utils.toArray<HTMLElement>(".blur-3xl.bg-gradient-nexorus").forEach((el) => {
      gsap.to(el, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest("section") || el,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.3,
        },
      });
    });

    // Storytelling timeline for Services (subtle stagger)
    const services = document.querySelector("#services");
    if (services) {
      const items = services.querySelectorAll(".apple-card, .apple-card-lg");
      gsap.from(items, {
        opacity: 0,
        y: 16,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: services,
          start: "top 80%",
          end: "bottom 70%",
          scrub: 0.2,
        },
      });
    }

    // Clean-up on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      gsap.globalTimeline.clear();
    };
  }, []);
}
