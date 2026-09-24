import { tenCommitments, tenCommitmentsIntro } from "@/lib/manifesto";

type TenCommitmentsProps = {
  heading: string;
};

export function TenCommitments({ heading }: TenCommitmentsProps) {
  return (
    <div>
      <h2 className="font-serif text-3xl tracking-tight text-ink uppercase">
        {heading}
      </h2>
      <p className="mt-4 text-[1.05rem] leading-7 text-muted">
        {tenCommitmentsIntro}
      </p>
      <ol className="mt-10 grid gap-8">
        {tenCommitments.map((commitment) => (
          <li key={commitment.number} className="scroll-mt-28">
            <h3 className="font-serif text-2xl text-ink">
              {commitment.number}. {commitment.title}
            </h3>
            <p className="mt-3 text-[1.05rem] leading-7 text-muted">
              {commitment.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
