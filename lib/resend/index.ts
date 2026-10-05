// lib/resend.ts
import * as React from "react";
import { Resend } from "resend";

interface SendEmailProps {
  to: string;
  subject: string;
  template: React.ReactNode;
}

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM =
  process.env.RESEND_FROM_EMAIL ?? "Perfect Joint Drywall <info@updates.perfectjointdrywall.com>";

export const EMAIL_TO =
  process.env.QUOTE_TO_EMAIL ?? "info@perfectjointdrywall.com";



export async function sendEmail({ to, subject, template,  }: SendEmailProps) {
  try {
    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      replyTo: "perfectjointdrywall@gmail.com",
      to: [to],
      subject: subject,
      react: template,
    });

    if (error) {
      console.error("❌ Resend API Error:", error);
      return { success: false, error };
    }

    console.log(`✅ Email sent to ${to}. ID: ${data?.id}`);
    return { success: true, data };
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    return { success: false, error };
  }
}