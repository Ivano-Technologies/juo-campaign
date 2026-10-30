"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { FormStatusNote } from "@/components/form-status";
import { readJsonMessage } from "@/lib/forms";
import { crossRiverLgas, joinInterests } from "@/lib/site";
import {
  AGE_CONFIRM_LABEL,
  AGE_CONFIRM_REQUIRED_MESSAGE,
  COMMUNITY_MAX_LENGTH,
  volunteerRoles,
} from "@/lib/volunteer-intake";
import {
  WARD_FREE_TEXT_MAX_LENGTH,
  WARD_NOT_LISTED,
  lgaIsFreeTextOnly,
  lgaNeedsWard,
  wardCopy,
  wardsForLga,
} from "@/lib/wards";

type IntakeState = {
  name: string;
  phone: string;
  lga: string;
  ward: string;
  wardOther: string;
  community: string;
  interest: string;
  role: string;
  ageConfirmed: boolean;
};

const initial: IntakeState = {
  name: "",
  phone: "",
  lga: "",
  ward: "",
  wardOther: "",
  community: "",
  interest: "",
  role: "",
  ageConfirmed: false,
};

const fieldClass =
  "min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2";

export function OfflineIntakeForm() {
  const [values, setValues] = useState<IntakeState>(initial);
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ tone: "error" | "success"; message: string } | null>(null);
  const [ageError, setAgeError] = useState(false);

  const wardList = wardsForLga(values.lga);
  const showWard = values.lga === "" || lgaNeedsWard(values.lga);
  const wardUnlisted = lgaIsFreeTextOnly(values.lga) || values.ward === WARD_NOT_LISTED;

  function set<K extends keyof IntakeState>(key: K, value: IntakeState[K]) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(null);
    if (!values.ageConfirmed) {
      setAgeError(true);
      setStatus({ tone: "error", message: AGE_CONFIRM_REQUIRED_MESSAGE });
      return;
    }
    setAgeError(false);
    setPending(true);
    try {
      const response = await fetch("/api/admin/volunteers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          phone: values.phone,
          lga: values.lga,
          ward: wardUnlisted ? values.wardOther : values.ward,
          ward_unlisted: wardUnlisted,
          community: values.community,
          interest: values.interest,
          role: values.role,
          age_confirmed: values.ageConfirmed,
        }),
      });
      const payload = await readJsonMessage(response);
      if (response.ok) {
        setStatus({ tone: "success", message: payload.message ?? "Volunteer saved." });
        setValues(initial);
      } else {
        setStatus({ tone: "error", message: payload.message ?? "Something went wrong." });
      }
    } catch {
      setStatus({ tone: "error", message: "Could not reach the campaign server." });
    } finally {
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid min-w-0 gap-4 rounded-2xl border border-line bg-brand-white p-6 shadow-sm sm:grid-cols-2"
    >
      <label className="grid gap-1 text-sm sm:col-span-2">
        Full name
        <input required value={values.name} onChange={(e) => set("name", e.target.value)} className={fieldClass} />
      </label>
      <label className="grid gap-1 text-sm">
        Phone
        <input
          required
          type="tel"
          inputMode="tel"
          placeholder="0803 123 4567"
          value={values.phone}
          onChange={(e) => set("phone", e.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="grid gap-1 text-sm">
        Local government or location
        <select
          required
          value={values.lga}
          onChange={(e) => setValues({ ...values, lga: e.target.value, ward: "", wardOther: "" })}
          className={fieldClass}
        >
          <option value="">Select</option>
          {crossRiverLgas.map((lga) => (
            <option key={lga} value={lga}>
              {lga}
            </option>
          ))}
        </select>
      </label>
      {showWard ? (
        <label className="grid gap-1 text-sm">
          {wardCopy.label}
          <select
            required={values.lga !== "" && !lgaIsFreeTextOnly(values.lga)}
            disabled={values.lga === "" || lgaIsFreeTextOnly(values.lga)}
            value={values.ward}
            onChange={(e) => set("ward", e.target.value)}
            className={`${fieldClass} disabled:text-muted`}
          >
            <option value="">{values.lga ? wardCopy.placeholder : wardCopy.pickLgaFirst}</option>
            {wardList.map((ward) => (
              <option key={ward.name} value={ward.name}>
                {ward.name}
              </option>
            ))}
            {values.lga ? <option value={WARD_NOT_LISTED}>{wardCopy.notListed}</option> : null}
          </select>
        </label>
      ) : null}
      {values.lga !== "" && wardUnlisted ? (
        <label className="grid gap-1 text-sm">
          {wardCopy.otherLabel}
          <input
            required
            maxLength={WARD_FREE_TEXT_MAX_LENGTH}
            value={values.wardOther}
            onChange={(e) => set("wardOther", e.target.value)}
            className={fieldClass}
          />
        </label>
      ) : null}
      <label className="grid gap-1 text-sm">
        Community
        <input
          required
          maxLength={COMMUNITY_MAX_LENGTH}
          value={values.community}
          onChange={(e) => set("community", e.target.value)}
          className={fieldClass}
        />
      </label>
      <label className="grid gap-1 text-sm">
        How they want to help
        <select required value={values.interest} onChange={(e) => set("interest", e.target.value)} className={fieldClass}>
          <option value="">Select</option>
          {joinInterests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        Role
        <select required value={values.role} onChange={(e) => set("role", e.target.value)} className={fieldClass}>
          <option value="">Select</option>
          {volunteerRoles.map((role) => (
            <option key={role} value={role}>
              {role}
            </option>
          ))}
        </select>
      </label>
      <label className="flex min-h-11 items-start gap-3 py-2.5 text-sm sm:col-span-2">
        <input
          type="checkbox"
          name="age_confirmed"
          aria-required="true"
          aria-invalid={ageError ? true : undefined}
          checked={values.ageConfirmed}
          onChange={(e) => {
            set("ageConfirmed", e.target.checked);
            if (e.target.checked) setAgeError(false);
          }}
          className="mt-0.5 h-5 w-5 shrink-0 accent-brand-red"
        />
        <span className={ageError ? "text-brand-red" : undefined}>{AGE_CONFIRM_LABEL}</span>
      </label>
      <div className="sm:col-span-2">
        <Button type="submit" variant="primary" disabled={pending}>
          {pending ? "Saving" : "Save volunteer"}
        </Button>
      </div>
      {status ? (
        <div className="sm:col-span-2">
          <FormStatusNote tone={status.tone} message={status.message} />
        </div>
      ) : null}
    </form>
  );
}
