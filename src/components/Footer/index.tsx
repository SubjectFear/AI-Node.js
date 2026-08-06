import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-white/70 dark:border-red-950/30 dark:bg-black/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-8 md:grid-cols-[1.3fr_0.8fr_0.8fr] xl:px-0">
        <div>
          <Link href="/" className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
            AW<span className="text-cyan-600 dark:text-amber-400">.</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-stone-400">
            Software engineer focused on modern web products, polished user experiences,
            and reliable execution from product concept through deployment.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Navigate
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-stone-400">
            <li><Link href="/" className="hover:text-slate-900 dark:hover:text-white">Home</Link></li>
            <li><Link href="/about" className="hover:text-slate-900 dark:hover:text-white">About</Link></li>
            <li><Link href="/#experience" className="hover:text-slate-900 dark:hover:text-white">Experience</Link></li>
            <li><Link href="/#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">
            Connect
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600 dark:text-stone-400">
            <li><a href="mailto:Reklawmada67@yahoo.com" className="hover:text-slate-900 dark:hover:text-white">Email</a></li>
            <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">GitHub</a></li>
            <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-red-950/30">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-sm text-slate-500 dark:text-stone-500 sm:px-8 xl:px-0">
          <span>© 2026 Adam Walker</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
