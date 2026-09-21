"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { FormStatusNote } from "@/components/form-status";
import { CONTACT_SUCCESS, readJsonMessage } from "@/lib/forms";

type ContactState = {
  name: string;
  email: string;
  message: string;
  privacy: boolean;
};

type StatusTone = "error" | "info" | "success";

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
  const [tone, setTone] = useState<StatusTone>("info");

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
      const payload = (await readJsonMessage(response));

      if (response.ok) {
        setTone("success");
        setStatus(payload.message ?? CONTACT_SUCCESS.message);
        setValues(initial);
        return;
      }

      setTone("error");
      setStatus(payload.message ?? "Something went wrong. Please try again later.");
    } catch {
      setTone("error");
      setStatus("Could not reach the campaign server. Please try again later.");
    } finally {
      setPending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-line bg-brand-white p-6 shadow-sm">
      <label className="grid gap-1 text-sm">
        Full name
        <input
          required
          autoComplete="name"
          name="name"
          value={values.name}
          onChange={(event) => setValues({ ...values, name: event.target.value })}
          className="rounded-lg border border-line bg-brand-white px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Email
        <input
          required
          autoComplete="email"
          type="email"
          name="email"
          value={values.email}
          onChange={(event) => setValues({ ...values, email: event.target.value })}
          className="rounded-lg border border-line bg-brand-white px-3 py-2"
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
          className="rounded-lg border border-line bg-brand-white px-3 py-2"
        />
      </label>
      <label className="flex min-h-11 items-start gap-3 py-2.5 text-sm text-muted">
        <input
          required
          type="checkbox"
          checked={values.privacy}
          onChange={(event) =>
            setValues({ ...values, privacy: event.target.checked })
          }
          className="mt-0.5 h-5 w-5 shrink-0 accent-brand-red"
        />
        <span>
          I have read the{" "}
          <a href="/privacy" className="text-brand-blue underline">
            privacy notice
          </a>{" "}
          and agree that the campaign desk may use these details to reply.
        </span>
      </label>
      {status ? <FormStatusNote tone={tone} message={status} /> : null}
      <Button type="submit" variant="primary" disabled={pending}>
        {pending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}
