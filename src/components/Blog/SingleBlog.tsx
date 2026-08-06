import Image from "next/image";
import Link from "next/link";

type BlogItem = {
  _id?: string | number;
  title?: string;
  metadata?: string;
  slug?: string | { current?: string };
  author?: { name?: string; slug?: { current?: string } };
  tags?: string[];
  publishedAt?: string;
  mainImage?: string;
};

const SingleBlog = ({ blog }: { blog: BlogItem }) => {
  const title = blog.title ?? "Blog post";
  const slugValue = typeof blog.slug === "string" ? blog.slug : blog.slug?.current ?? "#";
  const imageSrc = blog.mainImage ?? "/images/hero/hero-01.png";

  return (
    <div className="wow fadeInUp group relative isolate">
      <div className="relative mb-6 h-[222px] w-full overflow-hidden rounded-xl">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="w-full scale-100 duration-500 ease-linear group-hover:scale-125"
        />
      </div>

      <div className="mb-4.5 flex flex-wrap items-center gap-2.5">
        {blog.tags?.map((tag) => (
          <span
            key={tag}
            className="cursor-pointer rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-[3px] text-xs font-medium duration-300 ease-out hover:border-white/25 hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <h3>
        <Link
          href={`/blog/${slugValue}`}
          className="line-clamp-2 text-xl font-semibold text-white duration-300 ease-in hover:opacity-80"
        >
          <span className="absolute inset-0" aria-hidden></span>
          {title}
        </Link>
      </h3>
      <p className="mt-4 line-clamp-3 font-medium">{blog.metadata}</p>

      <div className="relative mt-6 flex flex-wrap items-center gap-4.5">
        <div className="flex cursor-pointer flex-wrap items-center gap-2 duration-300 ease-in hover:text-white">
          <Link
            href={`/blog/author/${blog.author?.slug?.current ?? "author"}`}
            className="text-sm font-medium"
          >
            {blog.author?.name ?? "Author"}
          </Link>
        </div>

        <div className="flex cursor-pointer flex-wrap items-center gap-2 duration-300 ease-in hover:text-white">
          <span className="text-sm font-medium">
            {blog.publishedAt ? new Date(blog.publishedAt).toDateString().split(" ").slice(1).join(" ") : "Recently"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
