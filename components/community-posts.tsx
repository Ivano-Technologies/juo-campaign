import Image from "next/image";
import { communityPosts } from "@/lib/community";

type CommunityPostListProps = {
  layout?: "grid" | "stack";
};

export function CommunityPostList({ layout = "grid" }: CommunityPostListProps) {
  const listClass =
    layout === "stack"
      ? "grid gap-16"
      : "grid gap-12 md:grid-cols-2";

  return (
    <ul className={listClass}>
      {communityPosts.map((post) => (
        <li key={post.id} id={post.id}>
          <article>
            <h3 className="font-serif text-2xl font-extrabold text-brand-blue sm:text-3xl">
              {post.title}
            </h3>
            {post.body.map((paragraph) => (
              <p
                key={paragraph}
                className="mt-4 text-[1.05rem] leading-7 text-muted"
              >
                {paragraph}
              </p>
            ))}
            <figure className="mt-6">
              <Image
                src={post.src}
                alt={post.alt}
                width={post.width}
                height={post.height}
                sizes={
                  layout === "stack"
                    ? "(min-width: 768px) 42rem, 100vw"
                    : "(min-width: 768px) 50vw, 100vw"
                }
                className="h-auto w-full border border-brand-blue/15"
              />
            </figure>
          </article>
        </li>
      ))}
    </ul>
  );
}
