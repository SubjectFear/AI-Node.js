import { Resend } from "resend";

type EmailPayload = {
  to: string;
  subject: string;
  html: string;
};

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (data: EmailPayload) => {
  const { error } = await resend.emails.send({
    from: process.env.EMAIL_FROM!,
    ...data,
  });

  if (error) {
    throw new Error(error.message);
  }
};
