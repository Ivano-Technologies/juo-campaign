import { Button } from "@/components/button";

export default function NotFound() {
  return (
    <section className="bg-brand-blue px-4 py-24 text-center text-brand-white">
      <p className="text-xs uppercase tracking-[0.28em] text-brand-red">404</p>
      <h1 className="mt-4 font-serif text-4xl sm:text-5xl">
        This page is not on the campaign map
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-brand-white/80">
        The WordPress demo URLs are gone. Use the menu, or go back to a Fresh
        Start.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="gold">
          Home
        </Button>
        <Button href="/contact" variant="ghost">
          Contact
        </Button>
      </div>
    </section>
  );
}
