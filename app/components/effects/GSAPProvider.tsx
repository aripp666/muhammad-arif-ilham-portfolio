"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GSAPProvider() {
  useGSAP(() => {
    gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 60, filter: "blur(10px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
        }
      );
    });
  });

  return null;
}