"use client";

import { useState } from "react";
import { Button } from "@/components/button";
import { FormStatusNote } from "@/components/form-status";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function AdminLoginForm() {
  const [email, setEmail] = useState("");
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<{ tone: "error" | "success"; message: string } | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const supabase = createBrowserSupabaseClient();
    if (!supabase) {
      setStatus({ tone: "error", message: "Sign in is not available right now." });
      return;
    }
    setPending(true);
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/admin/volunteers`,
        shouldCreateUser: true,
      },
    });
    setPending(false);
    setStatus(
      error
        ? { tone: "error", message: "We could not send the link. Please try again." }
        : { tone: "success", message: "Check your email for the sign in link." },
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-line bg-brand-white p-6 shadow-sm">
      <label className="grid gap-1 text-sm">
        Staff email
        <input
          required
          type="email"
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-h-11 w-full rounded-lg border border-line bg-brand-white px-3 py-2"
        />
      </label>
      <Button type="submit" variant="primary" disabled={pending}>
        {pending ? "Sending" : "Send sign in link"}
      </Button>
      {status ? <FormStatusNote tone={status.tone} message={status.message} /> : null}
    </form>
  );
}
