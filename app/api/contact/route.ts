import { after } from "next/server";
import { createContactPostHandler } from "@/lib/contact-submit";
import { getSmtpMailer } from "@/lib/smtp-mailer";
import { createAnonSupabaseClient } from "@/lib/supabase/anon";

/**
 * POST /api/contact
 * Stores the message in `contact_messages`, then (after the response) sends
 * the approved auto reply to the address the person entered (IVA-47).
 * An auto reply failure is logged and never fails the submission.
 */
export const POST = createContactPostHandler({
  getStore: () => {
    const supabase = createAnonSupabaseClient();
    if (!supabase) {
      return null;
    }
    return {
      async insertContactMessage(row) {
        const { error } = await supabase.from("contact_messages").insert(row);
        return { error };
      },
    };
  },
  getMailer: () => getSmtpMailer(),
  defer: (task) => after(task),
});
