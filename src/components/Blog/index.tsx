import SectionTitle from "../Common/SectionTitle";

export default function BlogSection() {
  return (
    <section className="py-20 lg:py-25">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <SectionTitle
          subTitle="Read Our Latest Blogs"
          title="Latest Blogs & News"
          paragraph="Blog content is disabled in this template. Enable a CMS or content source if you want dynamic blog posts."
        />

        <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/80">
            Blog posts are currently disabled.
          </div>
        </div>
      </div>
    </section>
  );
}
