import type { Metadata } from "next";
import { redirect } from "next/navigation";

export async function generateMetadata(): Promise<Metadata> {
  if (process.env.NEXT_PUBLIC_SHOW_STELLA === "true") {
    // Load only when the flag is on so the ticket copy is not in the off bundle.
    const { metadata } = await import("./stella-page");
    return metadata;
  }

  return {
    robots: {
      index: false,
      follow: false,
    },
  };
}

export default async function OdeyArchibongPage() {
  if (process.env.NEXT_PUBLIC_SHOW_STELLA === "true") {
    const { default: StellaPage } = await import("./stella-page");
    return <StellaPage />;
  }

  redirect("/");
}
