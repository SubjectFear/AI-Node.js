"use client";

import { useState } from "react";
import ContactModal from "./ContactModal";

const ContactCTA = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 dark:bg-red-600 dark:text-white dark:hover:bg-red-500"
      >
        Contact Me
      </button>

      {open && <ContactModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default ContactCTA;
