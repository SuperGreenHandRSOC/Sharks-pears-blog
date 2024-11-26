import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTagList } from "./post-tags";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
  tags: string[];
};

export function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  tags
}: Props) {
  if (excerpt.length > 260){
    excerpt = excerpt.slice(0, 260) + '...'
  }
  return (
    <div className="mb-8 md:flex">
      <div className="mb-5 md:m-0 md:w-2/3 md:h-auto md:p-4 md:pb-9 md:max-w-64">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <div className="md:p-4">
        <h3 className="text-2xl mb-1 leading-snug font-semibold">
          <Link href={`/Post/${slug}`} className="hover:underline">
            {title}
          </Link>
        </h3>
        <PostTagList tags={tags} className="text-xs -mb-1" />
        <div className="text-md mb-2">
          <DateFormatter dateString={date} />
        </div>
        <p className="text-sm leading-relaxed mb-4">{excerpt}</p>
      </div>
    </div>
  );
}
