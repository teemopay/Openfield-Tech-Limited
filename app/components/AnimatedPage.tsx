"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AnimatedPage({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTitle = gsap.utils.toArray<HTMLElement>(".hero-reveal-title");
      const heroCopy = gsap.utils.toArray<HTMLElement>(".hero-reveal-copy");
      const heroOthers = gsap.utils.toArray<HTMLElement>(
        ".hero-reveal:not(.hero-reveal-title):not(.hero-reveal-copy)",
      );
      const heroLinesTitle = document.querySelector(".hero-lines-title");
      const heroTitleLines = gsap.utils.toArray<HTMLElement>(
        ".hero-lines-title .hero-title-line",
      );
      const heroLinesSubtitle = gsap.utils.toArray<HTMLElement>(
        ".hero-lines-subtitle",
      );
      const heroLinesCta = gsap.utils.toArray<HTMLElement>(".hero-lines-cta");
      const heroLinesImage =
        gsap.utils.toArray<HTMLElement>(".hero-lines-image");

      const heroTimeline = gsap.timeline();

      if (heroLinesTitle && heroTitleLines.length) {
        gsap.set(heroLinesTitle, {
          perspective: 800,
          transformStyle: "preserve-3d",
        });

        heroTimeline.from(heroTitleLines, {
          rotationX: -100,
          transformOrigin: "50% 50% -160px",
          opacity: 0,
          duration: 0.8,
          ease: "power3",
          stagger: 0.25,
        });
      }

      if (heroLinesSubtitle.length) {
        heroTimeline.to(heroLinesSubtitle, {
          opacity: 1,
          y: 0,
          duration: 0.75,
          ease: "power3.out",
        });
      }

      if (heroLinesCta.length) {
        heroTimeline.to(heroLinesCta, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
        });
      }

      if (heroLinesImage.length) {
        heroTimeline.to(heroLinesImage, {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: "power3.out",
        });
      }

      if (heroTitle.length) {
        heroTimeline.to(heroTitle, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        });
      }

      if (heroCopy.length) {
        heroTimeline.to(
          heroCopy,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
          },
          "+=0.05",
        );
      }

      if (heroOthers.length) {
        heroTimeline.to(
          heroOthers,
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: "power3.out",
          },
          "+=0.05",
        );
      }

      gsap.utils.toArray<HTMLElement>(".module-title").forEach((el) => {
        let lastPlayedAt = 0;
        let titleTween: ReturnType<typeof gsap.to> | null = null;
        let isPrimed = false;

        const resetTitle = (y = 32) => {
          gsap.set(el, {
            scale: 0.92,
            y,
            transformOrigin: "bottom center",
            force3D: true,
          });
          isPrimed = true;
        };

        const playTitle = () => {
          const now = Date.now();
          if (now - lastPlayedAt < 500) return;
          lastPlayedAt = now;
          titleTween?.kill();
          if (!isPrimed) return;
          isPrimed = false;
          titleTween = gsap.to(el, {
            scale: 1,
            y: 0,
            duration: 0.7,
            ease: "cubic-bezier(.16, 1, .3, 1)",
            force3D: true,
            overwrite: "auto",
          });
        };

        gsap.set(el, { transformOrigin: "bottom center", willChange: "transform" });
        if (el.getBoundingClientRect().top > window.innerHeight) {
          resetTitle();
        }

        ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          onEnter: playTitle,
          onEnterBack: playTitle,
          onLeave: resetTitle,
          onLeaveBack: resetTitle,
        });
      });

      gsap.utils.toArray<HTMLElement>(".module-subtitle").forEach((el) => {
        let lastPlayedAt = 0;
        let subtitleTween: ReturnType<typeof gsap.to> | null = null;
        let isPrimed = false;

        const resetSubtitle = () => {
          gsap.set(el, {
            scale: 0.99,
            y: 24,
            transformOrigin: "bottom center",
            force3D: true,
          });
          isPrimed = true;
        };

        const playSubtitle = () => {
          const now = Date.now();
          if (now - lastPlayedAt < 500) return;
          lastPlayedAt = now;
          subtitleTween?.kill();
          if (!isPrimed) return;
          isPrimed = false;
          subtitleTween = gsap.to(el, {
            scale: 1,
            y: 0,
            duration: 0.7,
            delay: 0.08,
            ease: "cubic-bezier(.16, 1, .3, 1)",
            force3D: true,
            overwrite: "auto",
          });
        };

        gsap.set(el, { transformOrigin: "bottom center", willChange: "transform" });
        if (el.getBoundingClientRect().top > window.innerHeight) {
          resetSubtitle();
        }

        ScrollTrigger.create({
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          onEnter: playSubtitle,
          onEnterBack: playSubtitle,
          onLeave: resetSubtitle,
          onLeaveBack: resetSubtitle,
        });
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
          },
        });
      });

      gsap.to(".float-slow", {
        y: -14,
        duration: 3.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return children;
}
