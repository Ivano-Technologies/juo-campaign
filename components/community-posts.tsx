import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import {
  communityPostPath,
  communityPosts,
  type CommunityPost,
} from "@/lib/community";

type CommunityPostListProps = {
  layout?: "grid" | "stack";
};

function PostImages({
  post,
  layout,
  preview,
}: {
  post: CommunityPost;
  layout: "grid" | "stack";
  preview: boolean;
}) {
  const images = preview ? post.images.slice(0, 1) : post.images;
  if (images.length === 0) {
    return null;
  }

  return (
    <div className={images.length > 1 ? "mt-6 grid gap-4" : "mt-6"}>
      {images.map((image) => (
        <figure key={image.src}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes={
              layout === "stack"
                ? "(min-width: 768px) 42rem, 100vw"
                : "(min-width: 768px) 50vw, 100vw"
            }
            className="h-auto w-full border border-brand-blue/15"
          />
        </figure>
      ))}
    </div>
  );
}

function PostWatch({ post }: { post: CommunityPost }) {
  if (!post.watch) {
    return null;
  }

  return (
    <div className="mt-8 space-y-5">
      <div className="relative aspect-video w-full overflow-hidden border border-brand-blue/15 bg-brand-blue">
        <iframe
          src={post.watch.embedSrc}
          title={post.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <Button href={post.watch.url} variant="primary" className="w-full sm:w-auto">
        {post.watch.label}
      </Button>
    </div>
  );
}

function PostClose({ post }: { post: CommunityPost }) {
  if (!post.close) {
    return null;
  }

  return (
    <div className="mt-10 border-t border-line pt-10">
      <p className="font-serif text-2xl font-extrabold tracking-tight text-brand-blue uppercase">
        {post.close.lead}
      </p>
      <p className="mt-2 font-serif text-2xl font-extrabold tracking-tight text-brand-blue uppercase">
        {post.close.lockup}
      </p>
    </div>
  );
}

export function CommunityPostArticle({
  post,
  layout = "stack",
  preview = false,
  showHeader = true,
}: {
  post: CommunityPost;
  layout?: "grid" | "stack";
  preview?: boolean;
  showHeader?: boolean;
}) {
  const href = communityPostPath(post.id);
  const paragraphs = preview ? post.body.slice(0, 1) : post.body;

  return (
    <article>
      {showHeader ? (
        <>
          <h3 className="font-serif text-2xl font-extrabold text-brand-blue sm:text-3xl">
            <Link
              href={href}
              className="underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
            >
              {post.title}
            </Link>
          </h3>
          {post.dateline ? (
            <p className="mt-2 text-sm font-semibold tracking-[0.08em] text-brand-red uppercase">
              {post.dateline}
            </p>
          ) : null}
        </>
      ) : null}
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="mt-4 text-[1.05rem] leading-7 text-muted">
          {paragraph}
        </p>
      ))}
      {preview ? (
        <p className="mt-4">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center font-semibold text-brand-blue underline"
          >
            Read the full post
          </Link>
        </p>
      ) : (
        <>
          <PostWatch post={post} />
          <PostClose post={post} />
        </>
      )}
      <PostImages post={post} layout={layout} preview={preview} />
    </article>
  );
}

export function CommunityPostList({ layout = "grid" }: CommunityPostListProps) {
  const listClass =
    layout === "stack" ? "grid gap-16" : "grid gap-12 md:grid-cols-2";

  return (
    <ul className={listClass}>
      {communityPosts.map((post) => (
        <li key={post.id} id={post.id}>
          <CommunityPostArticle
            post={post}
            layout={layout}
            preview={layout === "grid"}
          />
        </li>
      ))}
    </ul>
  );
}
