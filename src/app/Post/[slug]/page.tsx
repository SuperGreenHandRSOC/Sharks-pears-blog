import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Container from "@/app/_components/container";
import { PostBody } from "@/app/_ui/post-body";
import { PostHeader } from "@/app/_ui/post-header";
import {extractHeadings} from 'extract-md-headings'
import Toc from '@/app/_ui/post-toc'


export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  // const content = await markdownToHtml(post.content || "");
  const content = post.content || "";
  const headings = extractHeadings(`./_posts/${params.slug}.md`)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center w-5/6 mx-auto md:w-4/5 lg:mt-20 lg:mx-100 mb-64">
      {/* <Alert preview={post.preview} /> */}
      <Container>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          tags={post.tags}
        />
        <div className=" flex">
        {/* <Header /> */}
          <article className="min-h-screen flex-col items-center justify-center w-5/6 mx-auto md:w-4/5 lg:mx-100">
            <PostBody content={content} className="lg:w-3/4 lg:mr-20" />
          </article>
          <div className="invisible lg:visible w-0 lg:w-64 py-10">
            <Toc className="sticky top-32" />
          </div>
        </div>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
