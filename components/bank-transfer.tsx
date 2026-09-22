import { donateBank } from "@/lib/donate";
import { donateBankFields, donateBankLead, donateBankNote, donateBankTitle } from "@/lib/donate-copy";

const fieldClass: Record<(typeof donateBankFields)[number]["key"], string> = {
  accountName:
    "break-words text-[1.15rem] font-semibold leading-snug text-brand-white sm:text-xl",
  bank: "break-words text-[1.35rem] font-semibold tracking-wide text-brand-white sm:text-2xl",
  accountNumber:
    "break-all font-mono text-[1.65rem] font-bold leading-tight tracking-[0.08em] text-brand-white tabular-nums sm:text-3xl",
};

export function BankTransferDetails() {
  return (
    <section id="bank-transfer" className="bg-brand-white">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="min-w-0 rounded-2xl bg-brand-blue p-5 text-brand-white shadow-sm sm:p-8">
          <p className="text-xs uppercase tracking-[0.28em] text-brand-red">
            Official campaign account
          </p>
          <h2 className="mt-3 font-serif text-3xl leading-tight">{donateBankTitle}</h2>
          <p className="mt-3 text-base leading-7 text-brand-white/85">{donateBankLead}</p>

          <dl className="mt-8 grid gap-6">
            {donateBankFields.map((field) => (
              <div key={field.key} className="min-w-0 border-t border-brand-white/20 pt-5">
                <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-white/70">
                  {field.label}
                </dt>
                <dd className={`mt-2 ${fieldClass[field.key]}`}>{donateBank[field.key]}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 text-sm leading-6 text-brand-white/80">{donateBankNote}</p>
        </div>
      </div>
    </section>
  );
}
