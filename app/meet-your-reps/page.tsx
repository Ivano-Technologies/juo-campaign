import type { Metadata } from "next";
import { Button } from "@/components/button";
import { PageHero } from "@/components/page-hero";
import {
  repsDirectoryEmpty,
  repsDirectoryStatus,
  repsDirectoryTitle,
  repsFacesBody,
  repsFacesTitle,
  repsFilterRoles,
  repsFindItems,
  repsFindTitle,
  repsPageDescription,
  repsPageTitle,
  repsServeBody,
  repsServeTitle,
} from "@/lib/reps";
import { pageShareTags } from "@/lib/page-seo";
import { crossRiverLgas } from "@/lib/site";

const directoryLgas = crossRiverLgas.filter(
  (lga) => lga !== "Diaspora / outside Cross River",
);

export const metadata: Metadata = {
  title: {
    absolute: repsPageTitle,
  },
  description: repsPageDescription,
  ...pageShareTags(repsPageTitle, repsPageDescription, "/meet-your-reps"),
};

export default function MeetYourRepsPage() {
  return (
    <>
      <PageHero title="Meet Your Reps" lede={repsFacesBody[0]}>
        <Button href="/join" variant="white">
          Join the Movement
        </Button>
        <Button href="/contact" variant="ghost">
          Contact the campaign
        </Button>
      </PageHero>

      <section className="mx-auto max-w-3xl space-y-14 px-4 py-16 sm:px-6">
        <div>
          <h2 className="font-serif text-3xl text-ink">{repsFacesTitle}</h2>
          {repsFacesBody.map((paragraph) => (
            <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
              {paragraph}
            </p>
          ))}
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{repsFindTitle}</h2>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-[1.05rem] leading-7 text-muted">
            {repsFindItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h3 className="mt-10 font-serif text-2xl text-ink">{repsDirectoryTitle}</h3>
          <p className="mt-3 font-semibold text-ink">{repsDirectoryStatus}</p>
          <p className="mt-3 text-[1.05rem] leading-7 text-muted">
            {repsDirectoryEmpty}
          </p>

          <form
            className="mt-8 grid gap-4 rounded-2xl border border-dashed border-line bg-brand-white p-6 sm:grid-cols-2"
            aria-label="Future representative directory filters"
          >
            <label className="grid gap-1 text-sm">
              Local government
              <select
                name="lga"
                disabled
                className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-paper px-3 py-2 text-muted"
                defaultValue=""
              >
                <option value="">All LGAs</option>
                {directoryLgas.map((lga) => (
                  <option key={lga} value={lga}>
                    {lga}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-sm">
              Role
              <select
                name="role"
                disabled
                className="min-h-11 w-full min-w-0 rounded-lg border border-line bg-paper px-3 py-2 text-muted"
                defaultValue={repsFilterRoles[0]}
              >
                {repsFilterRoles.map((role) => (
                  <option key={role} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </label>
            <p className="sm:col-span-2 text-sm text-muted">
              Filters will work when confirmed names are published. No
              representative cards are listed yet.
            </p>
          </form>
        </div>

        <div>
          <h2 className="font-serif text-3xl text-ink">{repsServeTitle}</h2>
          <p className="mt-4 text-[1.05rem] leading-7 text-muted">{repsServeBody}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/join" variant="primary">
              Join the Movement
            </Button>
            <Button href="/contact" variant="secondary">
              Contact the campaign
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
