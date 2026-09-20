"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { FormStatusNote } from "@/components/form-status";
import { FORM_NOT_READY } from "@/lib/forms";
import { crossRiverLgas, joinInterests } from "@/lib/site";

type JoinState = {
  name: string;
  email: string;
  phone: string;
  lga: string;
  interest: string;
  privacy: boolean;
};

const initial: JoinState = {
  name: "",
  email: "",
  phone: "",
  lga: "",
  interest: "",
  privacy: false,
};

export function JoinForm() {
  const [values, setValues] = useState<JoinState>(initial);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);

    try {
      const response = await fetch("/api/join", {
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
        Phone
        <input
          required
          type="tel"
          name="phone"
          value={values.phone}
          onChange={(event) => setValues({ ...values, phone: event.target.value })}
          className="rounded-lg border border-line bg-cream px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Local government or location
        <select
          required
          name="lga"
          value={values.lga}
          onChange={(event) => setValues({ ...values, lga: event.target.value })}
          className="rounded-lg border border-line bg-cream px-3 py-2"
        >
          <option value="">Select</option>
          {crossRiverLgas.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        How do you want to help?
        <select
          required
          name="interest"
          value={values.interest}
          onChange={(event) => setValues({ ...values, interest: event.target.value })}
          className="rounded-lg border border-line bg-cream px-3 py-2"
        >
          <option value="">Select</option>
          {joinInterests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
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
          </a>{" "}
          and agree that the campaign may contact me about volunteering and
          updates. This is not INEC voter registration.
        </span>
      </label>
      {status ? <FormStatusNote tone="info" message={status} /> : null}
      <Button type="submit" variant="primary" disabled={pending}>
        {pending ? "Sending…" : "Join the Movement"}
      </Button>
    </form>
  );
}
