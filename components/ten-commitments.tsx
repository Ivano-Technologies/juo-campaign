import Image from "next/image";
import { tenCommitmentsPortraitSizes } from "@/lib/image-sizes";
import { tenCommitments, tenCommitmentsIntro } from "@/lib/manifesto";

type TenCommitmentsProps = {
  heading: string;
};

export function TenCommitments({ heading }: TenCommitmentsProps) {
  return (
    <div>
      <div className="grid gap-8 sm:grid-cols-12 sm:items-start">
        <div className="min-w-0 sm:col-span-7">
          <h2 className="font-serif text-3xl tracking-tight text-ink uppercase">
            {heading}
          </h2>
          <p className="mt-4 text-[1.05rem] leading-7 text-muted">
            {tenCommitmentsIntro}
          </p>
        </div>
        <Image
          src="/brand/juo-ten-commitments.webp"
          alt="John Upan Odey in a white shirt, hand on chin, in a thoughtful pose"
          width={1067}
          height={1600}
          sizes={tenCommitmentsPortraitSizes}
          className="mx-auto h-auto w-full max-w-[280px] rounded-lg bg-brand-white object-cover sm:col-span-5 sm:mr-0"
        />
      </div>
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
