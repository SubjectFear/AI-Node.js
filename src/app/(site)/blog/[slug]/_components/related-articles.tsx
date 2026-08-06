export async function RelatedArticles() {
  return (
    <section>
      <h2 className="mb-10 mt-25 max-w-[579px] text-[34px] leading-[45px] font-semibold text-white">
        Related Articles
      </h2>

      <div className="grid grid-cols-1 gap-7.5 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/80">
          Related content is disabled because the blog CMS was removed.
        </div>
      </div>
    </section>
  );
}
