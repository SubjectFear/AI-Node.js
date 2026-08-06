import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 74,
    question: "What's included in a typical project?",
    answer:
      "Every project includes a discovery call to scope requirements, custom design and development, responsive layouts, and deployment. Larger packages add CMS integration, authentication, and API work as needed.",
  },
  {
    id: 100,
    question: "How long does a project take?",
    answer:
      "A landing page typically takes about 2 weeks, a full business website around 4 weeks, and custom web applications are scoped individually after a discovery call based on complexity.",
  },
  {
    id: 7,
    question: "What technologies do you work with?",
    answer:
      "I build primarily with React, Next.js, TypeScript, and Tailwind CSS on the frontend, and Node.js with SQL/NoSQL databases on the backend, integrating third-party APIs and services as needed.",
  },
  {
    id: 67,
    question: "Do you offer support after launch?",
    answer:
      "Yes, ongoing support and maintenance is available after launch, covering bug fixes, small feature additions, and content updates on a retainer or as-needed basis.",
  },
  {
    id: 9,
    question: "How does pricing and payment work?",
    answer:
      "Packages above are starting prices for typical scopes. After a quick discovery call, I'll send a fixed-price quote based on your specific requirements, with payment split across project milestones.",
  },
];

export default faqData;
