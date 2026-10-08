import nodemailer from "nodemailer";
import type { AutoReplyMailer } from "@/lib/contact-auto-reply";

/**
 * SMTP transport for campaign mail (Hostinger mailbox campaign@).
 *
 * Env (server only, never NEXT_PUBLIC):
 *   SMTP_HOST   e.g. smtp.hostinger.com              (required)
 *   SMTP_PORT   465 (implicit TLS) or 587 (STARTTLS)  (optional, default 465)
 *   SMTP_USER   campaign@votejohnupanodey.com         (required)
 *   SMTP_PASS   mailbox password                      (required)
 *
 * Returns null when any required value is missing so callers can skip
 * sending without failing the request.
 */
export type SmtpConfig = {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  pass: string;
};

type EnvLike = Record<string, string | undefined>;

export const SMTP_REQUIRED_ENV = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS"] as const;

export function readSmtpConfig(env: EnvLike = process.env): SmtpConfig | null {
  const host = env.SMTP_HOST?.trim();
  const user = env.SMTP_USER?.trim();
  const pass = env.SMTP_PASS;
  if (!host || !user || !pass) {
    return null;
  }

  const rawPort = env.SMTP_PORT?.trim();
  const port = rawPort ? Number.parseInt(rawPort, 10) : 465;
  if (!Number.isInteger(port) || port <= 0 || port > 65535) {
    return null;
  }

  return { host, port, secure: port === 465, user, pass };
}

let cached: { key: string; mailer: AutoReplyMailer } | null = null;

export function getSmtpMailer(env: EnvLike = process.env): AutoReplyMailer | null {
  const config = readSmtpConfig(env);
  if (!config) {
    return null;
  }

  const key = `${config.host}:${config.port}:${config.user}`;
  if (cached?.key === key) {
    return cached.mailer;
  }

  const transport = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    requireTLS: !config.secure,
    auth: { user: config.user, pass: config.pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  cached = { key, mailer: { sendMail: (message) => transport.sendMail(message) } };
  return cached.mailer;
}
