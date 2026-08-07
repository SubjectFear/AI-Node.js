import { Resend } from "resend";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

// Instantiated lazily so a missing API key doesn't crash the build's page-data collection step.
let resend: Resend | null = null;

const getResendClient = () => {
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
};

export const sendEmail = async (data: EmailPayload) => {
  const { error } = await getResendClient().emails.send({
    from: process.env.EMAIL_FROM!,
    ...data,
  });

  if (error) {
    throw new Error(error.message);
  }
};
