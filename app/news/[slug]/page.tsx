import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/button";
import { CommunityPostArticle } from "@/components/community-posts";
import { PageHero } from "@/components/page-hero";
import {
  communityPath,
  communityPostPath,
  communityPosts,
  communityPostSeoTitle,
  getCommunityPost,
} from "@/lib/community";
import { pageShareTags } from "@/lib/page-seo";

type NewsDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return communityPosts.map((post) => ({ slug: post.id }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getCommunityPost(slug);
  if (!post) {
    return {};
  }

  const title = communityPostSeoTitle(post.title);
  const description = post.body[0] ?? post.title;

  return {
    title: {
      absolute: title,
    },
    description,
    ...pageShareTags(title, description, communityPostPath(post.id)),
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = getCommunityPost(slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        kicker={post.dateline ?? "Campaign news"}
        title={post.title}
        lede={post.body[0] ?? post.title}
      >
        {post.watch ? (
          <Button href={post.watch.url} variant="primary">
            {post.watch.label}
          </Button>
        ) : null}
        <Button href={communityPath} variant="white">
          All news
        </Button>
        <Button href="/join" variant="ghost">
          Join the Movement
        </Button>
      </PageHero>
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <CommunityPostArticle post={post} layout="stack" showHeader={false} />
      </section>
    </>
  );
}
