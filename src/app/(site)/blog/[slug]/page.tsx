import Breadcrumb from "@/components/Breadcrumb";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props) {
  const params = await props.params;

  return {
    title: `Blog post: ${params.slug}`,
    description: "Blog content is disabled in this template.",
  };
}

export default async function BlogDetails(props: Props) {
  const params = await props.params;

  return (
    <>
      <Breadcrumb pageTitle="Blog Details" />
      <section className="pb-17.5 pt-20 lg:pb-22.5 lg:pt-25 xl:pb-27.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
          <h1 className="mb-4 text-3xl font-semibold text-white">Blog content disabled</h1>
          <p className="text-white/80">
            The blog route is available but the content source has been removed from this project.
          </p>
          <p className="mt-4 text-sm text-white/60">Requested slug: {params.slug}</p>
        </div>
      </section>
    </>
  );
}
