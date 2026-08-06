"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const pathUrl = usePathname();

  return (
    <header className="relative z-50 w-full rounded-b-3xl border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-red-950/25 dark:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-8 xl:px-0">
        <Link href="/" className="text-xl font-black tracking-tight text-slate-900 dark:text-white">
          AW<span className="text-cyan-600 dark:text-amber-400">.</span>
        </Link>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setNavigationOpen(!navigationOpen)}
            className="block rounded-full border border-slate-300 bg-slate-100 p-2 text-slate-900 dark:border-red-900/25 dark:bg-red-950/20 dark:text-white"
            aria-label="Toggle navigation"
          >
            <span className="block h-0.5 w-5 bg-slate-900 dark:bg-white" />
            <span className="mt-1.5 block h-0.5 w-5 bg-slate-900 dark:bg-white" />
            <span className="mt-1.5 block h-0.5 w-5 bg-slate-900 dark:bg-white" />
          </button>
        </div>

        <div
          className={`${navigationOpen ? "visible flex" : "hidden"} absolute left-4 right-4 top-full mt-3 flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-4 dark:border-red-900/25 dark:bg-black/90 lg:visible lg:static lg:mt-0 lg:flex lg:flex-row lg:items-center lg:rounded-none lg:border-0 lg:bg-transparent lg:p-0`}
        >
          <nav>
            <ul className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-7">
              {menuData.map((menuItem) => {
                const href = menuItem.path ?? "/";
                const isActive = pathUrl === href || pathUrl === href.replace("/#", "");

                return (
                  <li key={menuItem.id}>
                    <Link
                      href={href}
                      className={`text-sm font-medium transition ${
                        isActive
                          ? "text-slate-900 dark:text-white"
                          : "text-slate-600 hover:text-slate-900 dark:text-stone-400 dark:hover:text-white"
                      }`}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href="/resume"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-violet-400/40 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-500/20 dark:text-violet-100"
          >
            Resume
          </a>

          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
