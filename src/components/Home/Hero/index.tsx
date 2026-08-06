import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="home" className="relative z-10 overflow-hidden pb-16 pt-14 md:pt-16 xl:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
        <div className="grid-pattern" />
      </div>

      <div className="mx-auto max-w-6xl px-4 text-center sm:px-8 xl:px-0">
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:border-amber-400/30 dark:bg-amber-500/10 dark:text-amber-300">
          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-amber-400" />
          Open to Software Engineering Roles
        </span>

        <h1 className="mt-8 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-7xl">
          Adam Walker
        </h1>

        <p className="mt-5 bg-gradient-to-r from-violet-600 via-cyan-600 to-sky-600 bg-clip-text text-xl font-semibold text-transparent dark:from-violet-400 dark:via-red-400 dark:to-amber-300 md:text-2xl">
          Software Engineer • Full-Stack Developer • Product-Minded Builder
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 dark:text-stone-400 md:text-lg">
          I build reliable, high-quality web products end to end — from interface
          design and frontend architecture to backend logic, deployment, and
          iteration. I care about clean code, thoughtful UX, and shipping things
          that work.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="#about"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:brightness-110 dark:from-red-600 dark:to-amber-500"
          >
            Explore Profile
          </Link>
          <a
            href="/resume"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-500/10 dark:border-red-900/25 dark:bg-black/30 dark:text-white dark:hover:border-amber-400/40 dark:hover:bg-amber-500/10"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-600 dark:text-stone-300">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Tailwind",
            "API Design",
            "Product UX",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white/70 px-3 py-2 transition hover:border-cyan-400/40 hover:text-slate-900 dark:border-red-950/30 dark:bg-black/40 dark:hover:border-amber-400/40 dark:hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-4 px-4 sm:grid-cols-3 sm:px-8 xl:px-0">
        {[
          { value: "Modern", label: "Web applications built for real users" },
          { value: "Scalable", label: "Frontend systems that hold up in production" },
          { value: "Practical", label: "Delivery focused on business outcomes" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white/70 p-6 text-center backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-300/30 dark:border-red-950/25 dark:bg-black/50 dark:hover:border-amber-300/30"
          >
            <div className="text-2xl font-black text-slate-900 dark:text-white">{stat.value}</div>
            <div className="mt-2 text-sm text-slate-500 dark:text-stone-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
