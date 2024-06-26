import { twMerge } from "tailwind-merge";
import { FaArrowRight } from "react-icons/fa6";

export type BlogCardsProps = {
  title: string;
  summary: string;
  thumbnail: string;
  createdAt: string;
  averageReadTime: string;
  author: string;
  className?: string;
  titleTextSize?: string;
  lineClamp?: string;
  showReadTime?: boolean;
  onClick?: () => void;
};

const BlogCard: React.FC<BlogCardsProps> = ({
  averageReadTime,
  thumbnail,
  summary,
  createdAt,
  title,
  className,
  author,
  titleTextSize,
  lineClamp,
  onClick
}) => {
  return (
    <div
      className={twMerge(
        "group cursor-pointer overflow-hidden text-ellipsis whitespace-normal bg-transparent transition-transform duration-200 ease-in-out active:scale-95",
        className
      )}
      onClick={onClick}
    >
      <div className="overflow-hidden">
        <img
          src={thumbnail}
          className="h-64 w-full object-cover object-center transition-transform duration-300 ease-in-out lg:group-hover:scale-125"
        />
      </div>
      <div className="flex items-center justify-between pt-6 text-sm text-[#6941C6]">
        <p>{createdAt}</p>
        <p>{averageReadTime}</p>
      </div>
      <p className="text-xs text-[#C0C5D0]">by {author}</p>
      <div className="flex items-center justify-between">
        <h1 className={twMerge("py-3 text-xl font-semibold", titleTextSize)}>
          {title}
        </h1>
        <FaArrowRight className="rotate-[315deg]" size={20} />
      </div>
      <p
        className={twMerge(
          "line-clamp-3 overflow-hidden text-ellipsis text-[#C0C5D0]",
          lineClamp
        )}
        style={{
          display: "-webkit-box",
          WebkitBoxOrient: "vertical"
        }}
      >
        {summary}
      </p>
    </div>
  );
};

export default BlogCard;
