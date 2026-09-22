"use client";

import { useEffect, useState } from "react";

/** True while the document is in a background tab. */
export function useDocumentHidden(): boolean {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sync = () => {
      setHidden(document.hidden);
    };
    sync();
    document.addEventListener("visibilitychange", sync);
    return () => document.removeEventListener("visibilitychange", sync);
  }, []);

  return hidden;
}
