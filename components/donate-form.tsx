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
      `Online checkout is coming soon. For naira giving now, use the official bank transfer details on this page. ${formatNgn(selected)} can be transferred to that account.`,
    );
  }

  return (
    <form
      className="grid min-w-0 gap-6 rounded-2xl border border-line bg-brand-white p-5 shadow-sm sm:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        onGive();
      }}
    >
      <div>
        <h2 className="font-serif text-3xl text-ink">Give in naira</h2>
        <p className="mt-2 text-muted">
          Choose an amount. Online donations: coming soon. For naira giving
          now, use the{" "}
          <a href="#bank-transfer" className="font-semibold text-brand-blue underline">
            official bank transfer
          </a>{" "}
          details on this page. Card and international options stay closed
          until counsel and banking sign off.
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
        Donate {formatNgn(selected)}: coming soon
      </Button>
      <p className="text-sm text-muted">
        See{" "}
        <a href="/privacy" className="text-brand-blue underline">
          privacy
        </a>{" "}
        for how donor data will be handled when online checkout opens. Volunteer
        or write the desk on{" "}
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
