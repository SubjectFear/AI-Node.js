import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;

  return {
    title: `Author: ${params.slug} | Blog`,
    description: `Author: ${params.slug} | Blog`,
  };
}

const AuthorPage = async (props: Props) => {
  const params = await props.params;

  return (
    <>
      <Breadcrumb pageTitle={params.slug} />

      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <p className="text-white/80">Author pages are disabled because the blog CMS was removed.</p>
        </div>
      </section>
    </>
  );
};

export default AuthorPage;
