"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { FormStatusNote } from "@/components/form-status";
import { donateAmountsNgn, formatNgn } from "@/lib/donate";

export function DonateForm() {
  const [amount, setAmount] = useState<number>(donateAmountsNgn[1] ?? 5000);
  const [custom, setCustom] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  const customValue = Number.parseInt(custom.replaceAll(/[^\d]/g, ""), 10);
  const selected = Number.isFinite(customValue) && customValue > 0 ? customValue : amount;

  function onGive() {
    setStatus(
      `NGN checkout is gated until the campaign processor is connected. ${formatNgn(selected)} is ready to send when giving opens. Confirmation and failure screens are already at /donate/confirm and /donate/fail.`,
    );
  }

  return (
    <form
      className="grid min-w-0 gap-6 rounded-2xl border border-line bg-brand-white p-8 shadow-sm"
      onSubmit={(event) => {
        event.preventDefault();
        onGive();
      }}
    >
      <div>
        <h2 className="font-serif text-3xl text-ink">Give in naira</h2>
        <p className="mt-2 text-muted">
          Choose an amount. Online donations — coming soon. Card and
          international options stay closed until counsel and banking sign off.
        </p>
      </div>

      <fieldset>
        <legend className="text-sm font-semibold text-ink">Amount</legend>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {donateAmountsNgn.map((value) => {
            const active = custom === "" && amount === value;
            return (
              <button
                key={value}
                type="button"
                className={`min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                  active
                    ? "border-brand-red bg-brand-red text-brand-white"
                    : "border-line bg-brand-white text-ink hover:border-brand-blue"
                }`}
                aria-pressed={active}
                onClick={() => {
                  setAmount(value);
                  setCustom("");
                  setStatus(null);
                }}
              >
                {formatNgn(value)}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label className="grid gap-1 text-sm">
        Other amount (NGN)
        <input
          inputMode="numeric"
          name="customAmount"
          value={custom}
          placeholder="e.g. 15000"
          onChange={(event) => {
            setCustom(event.target.value);
            setStatus(null);
          }}
          className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-brand-white px-3 py-2"
        />
      </label>

      {status ? <FormStatusNote tone="info" message={status} /> : null}

      <Button type="submit" variant="primary">
        Donate {formatNgn(selected)} — coming soon
      </Button>
      <p className="text-sm text-muted">
        See{" "}
        <a href="/privacy" className="text-brand-blue underline">
          privacy
        </a>{" "}
        for how donor data will be handled when donations open. Volunteer or
        write the desk on{" "}
        <a href="/join" className="text-brand-blue underline">
          Join the Movement
        </a>{" "}
        or{" "}
        <a href="/contact" className="text-brand-blue underline">
          Contact
        </a>
        .
      </p>
    </form>
  );
}
