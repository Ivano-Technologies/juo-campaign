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
import {
  WARD_FREE_TEXT_MAX_LENGTH,
  WARD_NOT_LISTED,
  lgaIsFreeTextOnly,
  lgaNeedsWard,
  validateWard,
  wardCopy,
  wardsForLga,
} from "@/lib/wards";

type JoinState = {
  name: string;
  email: string;
  phone: string;
  lga: string;
  /** Selected ward name, WARD_NOT_LISTED, or "" (none yet). */
  ward: string;
  /** Free text ward when the ward isn't listed. */
  wardOther: string;
  interest: string;
  privacy: boolean;
};

type StatusTone = "error" | "info" | "success";

const initial: JoinState = {
  name: "",
  email: "",
  phone: "",
  lga: "",
  ward: "",
  wardOther: "",
  interest: "",
  privacy: false,
};

const WARD_SELECT_ID = "join-ward";
const WARD_OTHER_ID = "join-ward-other";
const WARD_HELP_ID = "join-ward-help";
const WARD_OTHER_HELP_ID = "join-ward-other-help";
const WARD_ERROR_ID = "join-ward-error";

type JoinFormProps = {
  campaignSource?: string | null;
};

export function JoinForm({ campaignSource = null }: JoinFormProps) {
  const [values, setValues] = useState<JoinState>(initial);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [tone, setTone] = useState<StatusTone>("info");
  const [wardError, setWardError] = useState<string | null>(null);
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

  const wardList = wardsForLga(values.lga);
  const showWardField = values.lga === "" || lgaNeedsWard(values.lga);
  const wardFreeTextOnly = lgaIsFreeTextOnly(values.lga);
  const wardUnlisted = wardFreeTextOnly || values.ward === WARD_NOT_LISTED;
  const showWardOther = values.lga !== "" && wardUnlisted;

  function selectLga(lga: string) {
    // A new LGA means a new ward list: always start the ward over.
    setValues({ ...values, lga, ward: "", wardOther: "" });
    setWardError(null);
  }

  function describedBy(...ids: Array<string | false>): string | undefined {
    const value = ids.filter(Boolean).join(" ");
    return value || undefined;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const wardValue = wardUnlisted ? values.wardOther : values.ward;
    const wardCheck = validateWard({
      lga: values.lga,
      ward: wardValue,
      wardUnlisted,
    });
    if (!wardCheck.ok) {
      setWardError(wardCheck.message);
      document
        .getElementById(showWardOther ? WARD_OTHER_ID : WARD_SELECT_ID)
        ?.focus();
      return;
    }
    setWardError(null);
    setPending(true);
    setStatus(null);
    const attribution = currentAttribution();

    try {
      const response = await fetch("/api/join", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          lga: values.lga,
          ward: wardCheck.ward,
          ward_unlisted: wardUnlisted,
          interest: values.interest,
          privacy: values.privacy,
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
          onChange={(event) => selectLga(event.target.value)}
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
      {showWardField ? (
        <div className="grid gap-2">
          {wardFreeTextOnly ? null : (
            <label className="grid gap-1 text-sm">
              {wardCopy.label}
              <select
                id={WARD_SELECT_ID}
                required
                name="ward"
                disabled={values.lga === ""}
                value={values.ward}
                onChange={(event) => {
                  setValues({
                    ...values,
                    ward: event.target.value,
                    wardOther: "",
                  });
                  setWardError(null);
                }}
                onInvalid={() => setWardError(wardCopy.errors.select)}
                aria-invalid={wardError && !showWardOther ? true : undefined}
                aria-describedby={describedBy(
                  values.lga === "" && WARD_HELP_ID,
                  Boolean(wardError) && !showWardOther && WARD_ERROR_ID,
                )}
                className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <option value="">{wardCopy.placeholder}</option>
                {wardList.map((ward) => (
                  <option key={ward.code} value={ward.name}>
                    {ward.name}
                  </option>
                ))}
                {values.lga ? (
                  <option value={WARD_NOT_LISTED}>{wardCopy.notListed}</option>
                ) : null}
              </select>
            </label>
          )}
          {values.lga === "" ? (
            <p id={WARD_HELP_ID} className="text-xs text-muted">
              {wardCopy.pickLgaFirst}
            </p>
          ) : null}
          {showWardOther ? (
            <label className="grid gap-1 text-sm">
              {wardFreeTextOnly ? wardCopy.label : wardCopy.otherLabel}
              <input
                id={WARD_OTHER_ID}
                required
                name="ward_other"
                autoComplete="off"
                maxLength={WARD_FREE_TEXT_MAX_LENGTH}
                placeholder={wardCopy.otherPlaceholder}
                value={values.wardOther}
                onChange={(event) => {
                  setValues({ ...values, wardOther: event.target.value });
                  setWardError(null);
                }}
                onInvalid={() => setWardError(wardCopy.errors.type)}
                aria-invalid={wardError ? true : undefined}
                aria-describedby={describedBy(
                  WARD_OTHER_HELP_ID,
                  Boolean(wardError) && WARD_ERROR_ID,
                )}
                className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2"
              />
              <span id={WARD_OTHER_HELP_ID} className="text-xs text-muted">
                {wardCopy.otherHelp}
              </span>
            </label>
          ) : null}
          {wardError ? (
            <p
              id={WARD_ERROR_ID}
              role="alert"
              className="text-sm font-semibold text-brand-red"
            >
              {wardError}
            </p>
          ) : null}
        </div>
      ) : null}
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
