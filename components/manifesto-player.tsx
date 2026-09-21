"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/button";
import {
  manifestoPdfHref,
  manifestoPlaceholderLabel,
  manifestoPlaceholderScript,
} from "@/lib/manifesto";

export function ManifestoPlayer() {
  const [speaking, setSpeaking] = useState(false);
  const [supported] = useState(
    () => typeof window !== "undefined" && "speechSynthesis" in window,
  );

  useEffect(() => {
    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  function stop() {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
  }

  function play() {
    if (!supported) {
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(manifestoPlaceholderScript);
    utterance.lang = "en-NG";
    utterance.rate = 0.95;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utterance);
    setSpeaking(true);
  }

  return (
    <div className="rounded-2xl border border-line bg-brand-white p-6 sm:p-8">
      <p className="text-xs font-semibold tracking-[0.2em] text-brand-red uppercase">
        {manifestoPlaceholderLabel}
      </p>
      <p className="mt-4 text-lg leading-8 text-ink">
        {manifestoPlaceholderScript}
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <Button
          type="button"
          variant="secondary"
          onClick={speaking ? stop : play}
          disabled={!supported}
        >
          {speaking ? "Stop readout" : "Read aloud"}
        </Button>
        {manifestoPdfHref ? (
          <a
            href={manifestoPdfHref}
            download
            className="inline-flex items-center justify-center rounded-full border border-transparent bg-brand-red px-5 py-2.5 text-sm font-semibold tracking-wide text-brand-white transition hover:bg-brand-red/90"
          >
            Download PDF
          </a>
        ) : (
          <Button type="button" variant="primary" disabled>
            Download PDF — pending IVA-17
          </Button>
        )}
      </div>
      {!supported ? (
        <p className="mt-3 text-sm text-muted">
          Read-aloud needs a browser that supports speech synthesis. The text
          above can still be read on the page.
        </p>
      ) : null}
    </div>
  );
}
