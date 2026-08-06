import type { Metadata } from "next";
import PrintButton from "./PrintButton";

export const metadata: Metadata = {
  title: "Resume | Adam Walker",
  description: "Resume for Adam Walker, software engineer focused on full-stack product engineering.",
};

const experience = [
  {
    role: "Software Engineer",
    company: "Product-focused engineering work",
    period: "Recent",
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
    bullets: [
      "Tested web and desktop applications for functionality, usability, and regressions before release.",
      "Wrote and executed test cases, logged and tracked bugs, and verified fixes across release cycles.",
      "Collaborated with developers to reproduce issues and confirm quality before shipping features.",
    ],
  },
];

const projects = [
  {
    name: "TaskFlow",
    description: "Collaborative task and sprint planning app with real-time boards, comments, and role-based permissions.",
    tags: ["Next.js", "PostgreSQL", "WebSockets"],
  },
  {
    name: "MarketPulse",
    description: "Dashboard for tracking product pricing and inventory trends across multiple e-commerce marketplaces.",
    tags: ["React", "Node.js", "Chart.js"],
  },
  {
    name: "Recipely",
    description: "Recipe discovery and meal-planning app with saved collections, grocery lists, and nutrition breakdowns.",
    tags: ["React Native", "Firebase", "GraphQL"],
  },
];

const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "REST APIs",
  "Auth & Security",
  "Database Design",
  "UI Systems",
  "Cloud Deployment",
  "Git / CI/CD",
  "QA / Application Testing",
];

const ResumePage = () => {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-10 sm:px-8 xl:px-0 print:pt-0">
      <div className="mb-6 flex justify-end print:hidden">
        <PrintButton />
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-slate-200/60 dark:border-red-950/30 dark:bg-black/40 dark:shadow-black/50 dark:backdrop-blur-sm print:rounded-none print:border-0 print:bg-white print:p-0 print:shadow-none md:p-12">
        <header className="border-b border-slate-200 pb-6 dark:border-red-950/25 print:border-slate-300">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white md:text-4xl print:text-black">
            Adam Walker
          </h1>
          <p className="mt-2 text-lg font-medium text-cyan-600 dark:text-amber-300 print:text-slate-700">
            Software Engineer
          </p>
        </header>

        <div className="mt-6">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300 print:text-slate-500">
            Summary
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-stone-400 print:text-slate-700">
            Software engineer focused on shipping reliable, product-minded web
            experiences across the full stack — from architecture and API design to
            polished, trustworthy interfaces. Comfortable owning features end to end
            and collaborating closely with product and design.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300 print:text-slate-500">
            Experience
          </h2>
          <div className="mt-3 space-y-6">
            {experience.map((item) => (
              <div key={item.role}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white print:text-black">
                    {item.role}
                  </h3>
                  <span className="text-sm font-medium text-slate-500 dark:text-stone-500 print:text-slate-500">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-slate-600 dark:text-stone-400 print:text-slate-600">{item.company}</p>
                <ul className="mt-2 space-y-1.5">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-2 text-sm leading-6 text-slate-600 dark:text-stone-400 print:text-slate-700"
                    >
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500 dark:bg-red-500 print:bg-slate-500" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300 print:text-slate-500">
            Projects
          </h2>
          <div className="mt-3 space-y-4">
            {projects.map((project) => (
              <div key={project.name}>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white print:text-black">
                  {project.name}
                </h3>
                <p className="text-sm leading-6 text-slate-600 dark:text-stone-400 print:text-slate-700">
                  {project.description}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-stone-500 print:text-slate-500">
                  {project.tags.join(" · ")}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300 print:text-slate-500">
            Skills
          </h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-100 print:border-slate-300 print:bg-transparent print:text-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
