"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { FormStatusNote } from "@/components/form-status";
import { FORM_NOT_READY } from "@/lib/forms";

type ContactState = {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
};

const initial: ContactState = {
  name: "",
  email: "",
  message: "",
  privacy: false,
};

export function ContactForm() {
  const [values, setValues] = useState<ContactState>(initial);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const payload = (await response.json()) as { message?: string };

      if (response.status === 501) {
        setStatus(payload.message ?? FORM_NOT_READY.message);
        return;
      }

      setStatus(payload.message ?? "Something went wrong. Please try again later.");
    } catch {
      setStatus("Could not reach the campaign server. Please try again later.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-line bg-paper p-6 shadow-sm">
      <label className="grid gap-1 text-sm">
        Full name
        <input
          required
          name="name"
          value={values.name}
          onChange={(event) => setValues({ ...values, name: event.target.value })}
          className="rounded-lg border border-line bg-cream px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Email
        <input
          required
          type="email"
          name="email"
          value={values.email}
          onChange={(event) => setValues({ ...values, email: event.target.value })}
          className="rounded-lg border border-line bg-cream px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Message
        <textarea
          required
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) =>
            setValues({ ...values, message: event.target.value })
          }
          className="rounded-lg border border-line bg-cream px-3 py-2"
        />
      </label>
      <label className="flex items-start gap-2 text-sm text-muted">
        <input
          required
          type="checkbox"
          checked={values.privacy}
          onChange={(event) =>
            setValues({ ...values, privacy: event.target.checked })
          }
          className="mt-1"
        />
        <span>
          I have read the{" "}
          <a href="/privacy" className="text-forest underline">
            privacy notice
          </a>
          .
        </span>
      </label>
      {status ? <FormStatusNote tone="info" message={status} /> : null}
      <Button type="submit" variant="primary" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
