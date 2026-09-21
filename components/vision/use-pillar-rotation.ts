"use client";

import { useEffect, useState } from "react";

const STEP_MS = 2800;

export function usePillarRotation(count: number, reduced: boolean) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduced || paused || count < 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, STEP_MS);
    return () => window.clearInterval(timer);
  }, [count, paused, reduced]);

  return { active, setActive, paused, setPaused };
}
