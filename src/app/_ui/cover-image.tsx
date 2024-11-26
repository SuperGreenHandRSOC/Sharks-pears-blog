import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      alt={`Cover Image for ${title}`}
      className={cn("shadow-sm w-full h-full md:object-cover", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      // layout="full"
      width={480}
      height={480}
    />
  );
  return (
    <div className="md:w-full md:h-full">
      {image}
    </div>
  );
};

export default CoverImage;
