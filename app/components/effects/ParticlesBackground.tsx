"use client";

import { useMemo } from "react";
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  const options = useMemo(
    () => ({
      fullScreen: {
        enable: false,
      },
      background: {
        color: "transparent",
      },
      particles: {
        number: {
          value: 50,
        },
        color: {
          value: "#22d3ee",
        },
        links: {
          enable: true,
          color: "#22d3ee",
          opacity: 0.2,
          distance: 150,
        },
        move: {
          enable: true,
          speed: 0.8,
        },
        opacity: {
          value: 0.35,
        },
        size: {
          value: {
            min: 1,
            max: 3,
          },
        },
      },
    }),
    []
  );

  return (
    <Particles
      id="particles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}