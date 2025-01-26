import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { PostTagList } from "./post-tags";

type Props = {
  title: string;
  date: string;
  slug: string;
  tags: string[];
};

export function PostPreview({
  title,
  date,
  slug,
  tags
}: Props) {

  return (
    <div className="mb-8 lg:mb-3 md:flex">
      {/* <div className="mb-5 md:m-0 md:w-2/3 md:h-auto md:p-4 md:pb-9 md:max-w-64">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div> */}
      <div className="md:p-4">
        <h3 className="text-2xl mb-1 leading-snug font-semibold">
          <Link href={`/Post/${slug}`} className="hover:underline text-slate-600">
            {title}
          </Link>
        </h3>
        <div className="lg:flex">
          <DateFormatter dateString={date} />
          <PostTagList tags={tags} className="text-xs lg:mt-0 mt-1" />
        </div>
        {/* <p className="text-sm leading-relaxed mb-4">{excerpt}</p> */}
      </div>
    </div>
  );
}
