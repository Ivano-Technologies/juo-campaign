"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/button";
import { FormStatusNote } from "@/components/form-status";
import {
  JOIN_FORM_ID,
  VOLUNTEER_FORM_START_EVENT,
  VOLUNTEER_FORM_SUBMIT_EVENT,
  trackGaEvent,
} from "@/lib/analytics";
import {
  persistCampaignSource,
  readStoredCampaignSource,
} from "@/lib/campaign-source";
import { JOIN_SUCCESS, readJsonMessage } from "@/lib/forms";
import { crossRiverLgas, joinInterests } from "@/lib/site";

type JoinState = {
  name: string;
  email: string;
  phone: string;
  lga: string;
  interest: string;
  privacy: boolean;
};

type StatusTone = "error" | "info" | "success";

const initial: JoinState = {
  name: "",
  email: "",
  phone: "",
  lga: "",
  interest: "",
  privacy: false,
};

type JoinFormProps = {
  campaignSource?: string | null;
};

export function JoinForm({ campaignSource = null }: JoinFormProps) {
  const [values, setValues] = useState<JoinState>(initial);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [tone, setTone] = useState<StatusTone>("info");
  const formStartSent = useRef(false);

  useEffect(() => {
    if (campaignSource) {
      persistCampaignSource(campaignSource);
    }
  }, [campaignSource]);

  function currentAttribution(): string | null {
    if (campaignSource) {
      persistCampaignSource(campaignSource);
      return campaignSource;
    }
    return readStoredCampaignSource();
  }

  function markFormStart() {
    if (formStartSent.current) {
      return;
    }
    formStartSent.current = true;
    trackGaEvent(VOLUNTEER_FORM_START_EVENT, {
      form_id: JOIN_FORM_ID,
      campaign_source: currentAttribution() ?? undefined,
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus(null);
    const attribution = currentAttribution();

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          campaign_source: attribution,
        }),
      });
      const payload = await readJsonMessage(response);

      if (response.ok) {
        trackGaEvent(VOLUNTEER_FORM_SUBMIT_EVENT, {
          form_id: JOIN_FORM_ID,
          campaign_source: attribution ?? "(not_set)",
          lga: values.lga,
          interest: values.interest,
        });
        setTone("success");
        setStatus(payload.message ?? JOIN_SUCCESS.message);
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
    <form
      onSubmit={onSubmit}
      onFocusCapture={markFormStart}
      className="grid min-w-0 gap-4 rounded-2xl border border-line bg-brand-white p-6 shadow-sm"
    >
      <label className="grid gap-1 text-sm">
        Full name
        <input
          required
          autoComplete="name"
          name="name"
          value={values.name}
          onChange={(event) => setValues({ ...values, name: event.target.value })}
          className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2"
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
          className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Phone
        <input
          required
          autoComplete="tel"
          type="tel"
          name="phone"
          value={values.phone}
          onChange={(event) => setValues({ ...values, phone: event.target.value })}
          className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Local government or location
        <select
          required
          name="lga"
          value={values.lga}
          onChange={(event) => setValues({ ...values, lga: event.target.value })}
          className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2"
        >
          <option value="">Select</option>
          {crossRiverLgas.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>
      </label>
      <label id="diaspora" className="grid scroll-mt-28 gap-1 text-sm">
        How do you want to help?
        <select
          required
          name="interest"
          value={values.interest}
          onChange={(event) => setValues({ ...values, interest: event.target.value })}
          className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2"
        >
          <option value="">Select</option>
          {joinInterests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
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
          and agree that the campaign may contact me about volunteering,
          Diaspora Connect, and campaign updates. This is not INEC voter
          registration.
        </span>
      </label>
      {status ? <FormStatusNote tone={tone} message={status} /> : null}
      <Button type="submit" variant="primary" disabled={pending}>
        {pending ? "Sending…" : "Join the Movement"}
      </Button>
    </form>
  );
}
