import { NextResponse } from "next/server";
import { Resend } from "resend";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY!);
const FROM_EMAIL = process.env.FROM_EMAIL!;
const NOTIFICATION_EMAIL = process.env.NOTIFICATION_EMAIL!;

export async function POST(request: Request) {
  try {
    if (!FROM_EMAIL || !NOTIFICATION_EMAIL) {
      return NextResponse.json(
        { message: "Email service not configured" },
        { status: 500 },
      );
    }

    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { message: "Invalid email address" },
        { status: 400 },
      );
    }

    //check if email already exists in database/update subscriber status
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email: email },
    });
    if (existingSubscriber) {
      if (existingSubscriber.isActive) {
        
        console.log(`Subscriber already active: ${existingSubscriber.email}`);
        return NextResponse.json(
          { message: "You have already subscribed to the newsletter" },
          { status: 200 },
        );
      } else {
        //Reactivate if previously unsubscribed
        const reactivatedSubscriber = await prisma.newsletterSubscriber.update({
          where: { email: email },
          data: { isActive: true, subscribedAt: new Date() },
        });
      }
    }else{

        //Add new subscriber to database
        const newSubscriber = await prisma.newsletterSubscriber.create({
            data: { email: email, isActive: true, subscribedAt: new Date() },
        });
        console.log(`New subscriber added: ${newSubscriber.email}`);
    }

    //Send email on joining newsletter
    const userEmailResponse = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Welcome to the Newsletter",
      html: `<p>Thank you for subscribing to our newsletter!</p>`,
    });
    console.log(`User email results: ${userEmailResponse}`);

    //notification email to my inbox
    const notificationEmailResponse = await resend.emails.send({
      from: NOTIFICATION_EMAIL,
      to: NOTIFICATION_EMAIL,
      subject: "New Newsletter Subscriber",
      html: `<p>New subscriber: ${email}</p>`,
    });
    console.log(`Notification email results: ${notificationEmailResponse}`);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 },
    );
  }
}
