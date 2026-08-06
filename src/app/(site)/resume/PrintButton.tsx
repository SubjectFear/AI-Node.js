"use client";

const RESUME_PDF_PATH = "/Adam%20Walker%20Resume.pdf";

const PrintButton = () => {
  const handlePrint = () => {
    const pdfWindow = window.open(RESUME_PDF_PATH, "_blank");
    if (!pdfWindow) return;
    // Trigger the browser's native PDF viewer print dialog once it finishes loading.
    pdfWindow.addEventListener("load", () => pdfWindow.print());
  };

  return (
    <button
      type="button"
      onClick={handlePrint}
      className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-500/10 dark:border-red-900/25 dark:bg-black/30 dark:text-white dark:hover:border-amber-400/40 dark:hover:bg-amber-500/10"
    >
      Print / Save as PDF
    </button>
  );
};

export default PrintButton;
