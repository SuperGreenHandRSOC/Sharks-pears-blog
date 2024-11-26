import CoverImage from "../_components/cover-image";
import DateFormatter from "./date-formatter";
import { PostTitle } from "@/app/_ui/post-title";
import { PostTagList } from "./post-tags";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  tags:string[];
};

export function PostHeader({ title, coverImage, date, tags }: Props) {
  return (
    <><div>
      {/* <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div> */}
      {/* <div className="mb-8 md:mb-16 sm:mx-0"> */}
      <div className="w-full max-h-40 lg:max-h-64 overflow-hidden mb-8">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <PostTagList tags={tags} />
      <div className="text-center lg:text-left mb-8">
        <DateFormatter dateString={date} />
      </div></div>
    </>
  );
}
