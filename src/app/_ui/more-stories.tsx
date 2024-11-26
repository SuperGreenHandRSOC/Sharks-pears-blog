import { Post } from "@/interfaces/post";
import { PostPreview } from "./post-preview";

type Props = {
  posts: Post[];
  searchKey: string;
  filter: string[];
};

export function MoreStories({ posts, searchKey, filter }: Props) {
  return (
    <section className="mb-32">
      {posts.map((post) => ((searchKey == "" || post.title.includes(searchKey)) && (post.tags.filter(function(v){ return filter.indexOf(v) > -1 })).length == 0)?(
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          slug={post.slug}
          excerpt={post.excerpt}
          tags={post.tags}
        />
      ):null)}
    </section>
  );
}
