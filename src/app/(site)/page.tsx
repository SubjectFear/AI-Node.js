import Image from "next/image";
import Hero from "@/components/Home/Hero";
import ContactCTA from "@/components/Contact/ContactCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adam Walker | Software Engineer",
  description:
    "Software engineer portfolio for Adam Walker, focused on full-stack web products, modern frontend architecture, and scalable product engineering.",
};

const projectCards = [
  {
    title: "Product-focused web applications",
    description:
      "Built interfaces and flows that balance high-quality UX with delivery speed, maintainability, and business value.",
    meta: "Frontend + product thinking",
    tags: ["React", "Next.js", "Tailwind"],
  },
  {
    title: "API and SaaS architecture",
    description:
      "Designed and integrated backend systems, auth patterns, and data-driven product experiences that scale cleanly.",
    meta: "Backend + systems design",
    tags: ["Node.js", "REST APIs", "Auth"],
  },
  {
    title: "Deployment-ready engineering",
    description:
      "Worked across implementation, testing, deployment, and iteration to move product ideas from concept to production.",
    meta: "Delivery + iteration",
    tags: ["CI/CD", "Vercel", "Testing"],
  },
];

const featuredProjects = [
  {
    name: "TaskFlow",
    description:
      "A collaborative task and sprint planning app with real-time boards, comments, and role-based permissions.",
    tags: ["Next.js", "PostgreSQL", "WebSockets"],
  },
  {
    name: "MarketPulse",
    description:
      "A dashboard for tracking product pricing and inventory trends across multiple e-commerce marketplaces.",
    tags: ["React", "Node.js", "Chart.js"],
  },
  {
    name: "Recipely",
    description:
      "A recipe discovery and meal-planning app with saved collections, grocery lists, and nutrition breakdowns.",
    tags: ["React Native", "Firebase", "GraphQL"],
  },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Product-focused engineering work",
    period: "Recent",
    stack: ["React", "Next.js", "TypeScript"],
    bullets: [
      "Built modern web experiences using React, Next.js, TypeScript, and design systems.",
      "Delivered data-driven product work with a focus on usability, reliability, and scaling.",
      "Worked across frontend and backend responsibilities to keep features cohesive and production-ready.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "End-to-end product implementation",
    period: "Core work",
    stack: ["Node.js", "APIs", "SQL"],
    bullets: [
      "Developed user flows, internal features, and marketing-facing experiences with strong business alignment.",
      "Connected application logic to APIs, auth flows, and data models without losing interface quality.",
      "Partnered on iteration cycles to keep product improvements moving quickly and cleanly.",
    ],
  },
  {
    role: "Application Tester",
    company: "Manual & functional QA testing",
    period: "3 years",
    stack: ["Manual Testing", "Test Cases", "Bug Tracking"],
    bullets: [
      "Tested web and desktop applications for functionality, usability, and regressions before release.",
      "Wrote and executed test cases, logged and tracked bugs, and verified fixes across release cycles.",
      "Collaborated with developers to reproduce issues and confirm quality before shipping features.",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section id="about" className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-5 sm:px-8 xl:px-0">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/60 dark:border-red-950/30 dark:bg-black/40 dark:shadow-black/50 dark:backdrop-blur-sm">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-amber-300">
              About Me
            </p>
            <h2 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl">
              Building polished products with thoughtful engineering.
            </h2>
            <p className="text-base leading-8 text-slate-600 dark:text-stone-400">
              I’m a software engineer focused on shipping reliable, product-minded web
              experiences. My work sits at the intersection of frontend craft,
              backend logic, and business impact — from architecture and API design to
              polished interfaces that users actually trust.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600 dark:text-stone-400">
              Right now I’m looking for software engineering roles where I can own
              features end to end, work closely with product and design, and help a
              team ship high-quality software at a steady pace.
            </p>

            <a
              href="http://localhost:5173/#home"
              target="_blank"
              rel="noreferrer"
              className="group mt-6 block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:border-cyan-300/30 dark:border-violet-950/30 dark:bg-black/40 dark:hover:border-amber-300/30"
            >
              <div className="aspect-video w-full overflow-hidden bg-slate-100 dark:bg-black/60">
                <iframe
                  src="http://localhost:5173/#home"
                  title="The Beans Place — Student Template live preview"
                  loading="lazy"
                  className="pointer-events-none h-full w-full"
                />
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  The Beans Place
                </span>
                <span className="text-sm font-semibold text-cyan-600 transition group-hover:underline dark:text-amber-300">
                  Visit site →
                </span>
              </div>
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-200/60 dark:border-red-950/30 dark:bg-black/50 dark:shadow-black/50 dark:backdrop-blur-sm sm:p-3">
              <Image
                src="/images/hero/chatgpt-image.png"
                alt="Portfolio illustration"
                width={1200}
                height={800}
                className="h-auto w-full rounded-[1.4rem] object-cover"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Frontend", "Next.js, React, TypeScript, Tailwind"],
                ["Backend", "Node.js, APIs, auth flows, data modeling"],
                ["Product", "UI systems, UX optimization, delivery"],
                ["Workflow", "Git, CI/CD, deployment, iteration"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-cyan-300/30 dark:border-violet-950/30 dark:bg-black/40 dark:hover:border-amber-300/30"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-stone-500">{label}</p>
                  <p className="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="relative z-10 mx-auto max-w-6xl px-4 pb-20 sm:px-8 xl:px-0">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-amber-300">
            What I Bring
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            Practical strengths I bring to a team
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projectCards.map((card) => (
            <article
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition hover:-translate-y-1 hover:border-violet-300/30 dark:border-red-950/30 dark:bg-black/40 dark:shadow-black/30 dark:hover:border-violet-400/30"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{card.meta}</p>
              <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-600 dark:text-stone-400">{card.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:border-amber-900/20 dark:bg-amber-950/10 dark:text-amber-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="featured-projects" className="relative z-10 mx-auto max-w-6xl px-4 pb-20 sm:px-8 xl:px-0">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-amber-300">
            On GitHub
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">
            More projects worth a look
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 transition hover:-translate-y-1 hover:border-violet-300/30 dark:border-red-950/30 dark:bg-black/40 dark:shadow-black/30 dark:hover:border-amber-300/30"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{project.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-stone-400">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 dark:border-amber-900/20 dark:bg-amber-950/10 dark:text-amber-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="relative z-10 mx-auto max-w-6xl px-4 pb-20 sm:px-8 xl:px-0">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Experience
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.role}
              className="rounded-3xl border border-slate-200 bg-white p-7 dark:border-red-950/25 dark:bg-black/30 dark:backdrop-blur-sm transition hover:border-cyan-300/20 dark:hover:border-amber-300/20"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-amber-300">
                    {item.period}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">{item.role}</h3>
                  <p className="mt-1 text-slate-600 dark:text-stone-400">{item.company}</p>
                </div>
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/5 px-3 py-1 text-xs font-medium text-cyan-700 dark:border-amber-400/20 dark:bg-amber-500/5 dark:text-amber-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-slate-600 dark:text-stone-400">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-2 inline-block h-2 w-2 rounded-full bg-cyan-500 dark:bg-red-500" />
                    <span className="leading-7">{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="stack" className="relative z-10 mx-auto max-w-6xl px-4 pb-20 sm:px-8 xl:px-0">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Core Stack
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Tailwind",
            "REST APIs",
            "Auth",
            "Database Design",
            "UI Systems",
            "Cloud Deployment",
            "QA / Application Testing",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-700 transition hover:border-violet-300/60 hover:bg-violet-500/20 dark:text-violet-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="relative z-10 mx-auto max-w-5xl px-4 pb-24 sm:px-8 xl:px-0">
        <div className="rounded-[2rem] border border-cyan-500/20 bg-gradient-to-br from-white via-slate-50 to-violet-50 p-8 text-center shadow-2xl shadow-slate-200/60 dark:border-red-500/25 dark:from-black dark:via-red-950/40 dark:to-violet-950 dark:shadow-red-950/40 md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-amber-300">
            Available for roles
          </p>
          <h3 className="mb-4 text-3xl font-bold text-slate-900 dark:text-white md:text-5xl">
            Let’s build the next great product experience.
          </h3>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-stone-400">
            I’m open to software engineering roles where strong product thinking,
            quality execution, and modern web development matter.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <ContactCTA />
            <a
              href="/resume"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-6 py-3 font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-500/10 dark:border-red-900/25 dark:bg-black/30 dark:text-white dark:hover:border-amber-400/40 dark:hover:bg-amber-500/10"
            >
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-5 text-sm text-slate-500 dark:text-stone-500">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="transition hover:text-slate-900 dark:hover:text-white">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-slate-900 dark:hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
