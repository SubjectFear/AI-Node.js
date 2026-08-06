import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Adam Walker",
  description: "About Adam Walker, a software engineer focused on product-minded web development and modern full-stack engineering.",
};

const focusAreas = [
  {
    title: "Frontend Craft",
    description: "Interfaces built with React, Next.js, and Tailwind that feel fast and intentional.",
  },
  {
    title: "Backend & APIs",
    description: "Node.js services, auth flows, and data models designed to scale cleanly.",
  },
  {
    title: "Delivery",
    description: "Comfortable owning a feature from planning through deployment and iteration.",
  },
];

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="About" />

      <section className="relative z-10 mx-auto max-w-5xl px-4 pb-24 pt-8 sm:px-8 xl:px-0">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/60 dark:border-red-950/30 dark:bg-black/40 dark:shadow-black/50 dark:backdrop-blur-sm md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-amber-300">About</p>
          <h1 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Product-minded software engineer.
          </h1>
          <p className="mt-6 text-base leading-8 text-slate-600 dark:text-stone-400">
            I build modern web experiences with an emphasis on clean architecture,
            practical product thinking, and polished execution. My work spans the full
            stack, from interface design and frontend implementation to API logic,
            deployment, and iteration.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-600 dark:text-stone-400">
            I enjoy solving real product problems with strong engineering fundamentals,
            clear communication, and an eye for user experience. I’m especially drawn
            to teams building thoughtful digital products that need both technical depth
            and business clarity.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 dark:border-violet-950/30 dark:bg-black/40 dark:hover:border-amber-300/30"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{area.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-stone-500">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
