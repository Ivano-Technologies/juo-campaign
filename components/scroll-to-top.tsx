"use client";

import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY > 480;
      if (window.innerWidth >= 768) {
        setVisible(scrolled);
        return;
      }
      const remaining =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);
      setVisible(scrolled && remaining < 560);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      className="fixed right-3 bottom-6 z-30 flex h-11 w-11 items-center justify-center bg-navy text-brand-white shadow-lg transition hover:bg-brand-red md:right-4 md:bottom-5"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M12 5.5 5 12.5h4.2V19h5.6v-6.5H19L12 5.5z" />
      </svg>
    </button>
  );
}
