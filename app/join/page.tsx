import type { Metadata } from "next";
import { BrandMarks } from "@/components/brand-marks";
import { Button } from "@/components/button";
import { JoinForm } from "@/components/join-form";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Join the Movement",
  description:
    "Volunteer with the John Upan Odey Jnr campaign. Join the Movement for a Fresh Start in Cross River.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        kicker="Get involved"
        title="Join the Movement"
        lede="This campaign belongs to Cross Riverians who want competence, unity, and work — in every ward and from the diaspora. Tell us how you want to help."
        aside={<BrandMarks variant="join" />}
      >
        <Button href="/donate" variant="white">
          Donate
        </Button>
        <Button href="/manifesto" variant="ghost">
          Manifesto
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </PageHero>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="min-w-0 space-y-4 text-muted">
          <h2 className="font-serif text-3xl text-ink">What happens next</h2>
          <p>
            A volunteer coordinator will follow up on the interest you select —
            ward work, professional skills, media, donations, or Diaspora
            Connect if you are outside Cross River. We will not treat this as
            voter registration, and we will not share your details as a public
            petition.
          </p>
          <p>
            Read the{" "}
            <a href="/privacy" className="text-brand-blue underline">
              privacy notice
            </a>{" "}
            before you submit. Your details are stored so the campaign can
            contact you about volunteering and updates.
          </p>
        </div>
        <JoinForm />
      </section>
    </>
  );
}
