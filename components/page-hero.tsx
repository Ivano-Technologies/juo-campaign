import { Button } from "@/components/button";

type PageHeroProps = {
  kicker?: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
};

export function PageHero({ kicker, title, lede, children }: PageHeroProps) {
  return (
    <section className="bg-forest text-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        {kicker ? (
          <p className="text-xs uppercase tracking-[0.28em] text-gold-soft">
            {kicker}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-paper/85">{lede}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

export function CtaRow() {
  return (
    <>
      <Button href="/join" variant="primary">
        Join the Movement
      </Button>
      <Button href="/donate" variant="gold">
        Donate
      </Button>
      <Button href="/manifesto" variant="ghost">
        Manifesto
      </Button>
      <Button href="/contact" variant="ghost">
        Contact
      </Button>
    </>
  );
}
