import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Campaign admin",
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16 md:px-8">{children}</section>
  );
}
