"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import axios from "axios";
import toast from "react-hot-toast";

const ContactModal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [minDate, setMinDate] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMinDate(new Date().toISOString().split("T")[0]);
    setMounted(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      await axios.post("/api/contact", { name, email, date, time, message });
      toast.success("Thanks! Your message has been sent.");
      onClose();
    } catch (error: any) {
      toast.error(
        error?.response?.data?.error ?? "Something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-999 flex items-center justify-center px-4">
      <button
        type="button"
        aria-label="Close contact form"
        className="fixed inset-0 -z-1 bg-slate-950/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl dark:border-red-950/30 dark:bg-black sm:p-8">
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full border border-slate-200 p-2 text-slate-500 transition hover:text-slate-900 dark:border-red-900/25 dark:text-stone-400 dark:hover:text-white"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        <h3 className="pr-8 text-2xl font-bold text-slate-900 dark:text-white">Let&apos;s talk</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-stone-400">
          Share a few details and a good time to connect, and I&apos;ll follow up by email.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="text"
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400 dark:border-red-900/25 dark:bg-black/40 dark:text-white dark:focus:border-amber-400"
            />
            <input
              type="email"
              required
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400 dark:border-red-900/25 dark:bg-black/40 dark:text-white dark:focus:border-amber-400"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-500 dark:text-stone-500">
              Preferred date
              <input
                type="date"
                required
                min={minDate}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400 dark:border-red-900/25 dark:bg-black/40 dark:text-white dark:focus:border-amber-400 dark:[color-scheme:dark]"
              />
            </label>
            <label className="flex flex-col gap-1 text-xs font-medium text-slate-500 dark:text-stone-500">
              Preferred time
              <input
                type="time"
                required
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400 dark:border-red-900/25 dark:bg-black/40 dark:text-white dark:focus:border-amber-400 dark:[color-scheme:dark]"
              />
            </label>
          </div>

          <textarea
            required
            rows={4}
            placeholder="What would you like to discuss?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-cyan-400 dark:border-red-900/25 dark:bg-black/40 dark:text-white dark:focus:border-amber-400"
          />

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-red-600 dark:text-white dark:hover:bg-red-500"
          >
            {submitting ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
};

export default ContactModal;
