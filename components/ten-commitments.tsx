import Image from "next/image";
import { tenCommitmentsPortraitSizes } from "@/lib/image-sizes";
import { tenCommitments, tenCommitmentsIntro } from "@/lib/manifesto";

type TenCommitmentsProps = {
  heading: string;
};

export function TenCommitments({ heading }: TenCommitmentsProps) {
  return (
    <div className="grid md:grid-cols-[minmax(0,1fr)_280px] md:gap-x-10 lg:grid-cols-12 lg:gap-x-16">
      <div className="min-w-0 md:col-start-1 md:row-start-1 lg:col-span-7">
        <h2 className="font-serif text-3xl tracking-tight text-ink uppercase">
          {heading}
        </h2>
        <p className="mt-4 text-[1.05rem] leading-7 text-muted">
          {tenCommitmentsIntro}
        </p>
      </div>
      <div className="mx-auto mt-8 mb-8 w-[70%] max-w-[260px] md:sticky md:top-28 md:col-start-2 md:row-span-2 md:row-start-1 md:mx-0 md:mt-0 md:mb-0 md:w-full md:max-w-none md:self-start lg:col-span-5 lg:col-start-8">
        <Image
          src="/brand/juo-ten-commitments.webp"
          alt="John Upan Odey in a white shirt, hand on chin, in a thoughtful pose"
          width={1067}
          height={1600}
          sizes={tenCommitmentsPortraitSizes}
          className="aspect-[1200/1658] h-auto w-full rounded-lg border border-white/10 bg-brand-white object-cover object-[50%_20%] shadow-xl shadow-brand-blue/15"
        />
      </div>
      <ol className="grid min-w-0 gap-8 md:col-start-1 md:row-start-2 md:mt-10 lg:col-span-7">
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
