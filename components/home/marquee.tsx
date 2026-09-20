const phrase = "The future demands a different approach";
const repeats = Array.from({ length: 6 }, (_, index) => `${phrase}-${index}`);

export function HomeMarquee() {
  return (
    <section
      className="home-marquee-band bg-brand-blue text-brand-white"
      aria-label={phrase}
    >
      <p className="home-marquee-static motion-safe:hidden">{phrase}</p>
      <div className="home-marquee-track motion-reduce:hidden" aria-hidden="true">
        <div className="home-marquee-group">
          {repeats.map((key) => (
            <span key={`a-${key}`}>{phrase}</span>
          ))}
        </div>
        <div className="home-marquee-group">
          {repeats.map((key) => (
            <span key={`b-${key}`}>{phrase}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
