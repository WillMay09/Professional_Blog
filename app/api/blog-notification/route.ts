import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hasSubscribers } from "diagnostics_channel";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY!);

const FROM_EMAIL = process.env.FROM_EMAIL!;

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const { slug, title, excerpt } = await request.json();

    if (!slug || !title || !excerpt) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 },
      );
    }

    //find the active subscribers in the db, array of objects with email field

    const activeSubscribers = await prisma.newsletterSubscriber.findMany({
      where: { isActive: true },
      select: { email: true },
    });

    if (activeSubscribers.length === 0) {
      return NextResponse.json(
        { message: "No active subscribers" },
        { status: 200 },
      );
    }

    //send notification email to each subscriber

    const sendEmailPromises = activeSubscribers.map(async (subscriber) => {
      resend.emails.send({
        from: FROM_EMAIL,
        to: subscriber.email,
        subject: `New Blog Post: ${title}`,
        html: `
                <h1>${title}</h1>
                <p>${excerpt}</p>
                  <a href="${BASE_URL}/blog/${slug}" 
               style="background: #0070f3; color: white; padding: 12px 24px; 
                      text-decoration: none; border-radius: 6px; display: inline-block;">
              Read Full Article
            </a>
          </p>
          <hr style="margin: 40px 0; border: none; border-top: 1px solid #eee;" />
          <p style="color: #666; font-size: 12px;">
            You're receiving this because you subscribed to my newsletter.
            <a href="${BASE_URL}/unsubscribe?email=${subscriber.email}">Unsubscribe</a>
          </p>
        `,
      });
    });

    await Promise.all(sendEmailPromises);

    //mark a blog post as sent

    await prisma.blogPost.upsert({
      where: { slug: slug },
      update: { emailSent: true, emailSentAt: new Date() },
      create: {
        slug,
        title,
        excerpt: excerpt || "",
        emailSent: true,
        emailSentAt: new Date(),
      },
    });

    return NextResponse.json(
      { message: "Notifications sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending notifications:", error);
    return NextResponse.json(
      { message: "Error sending notifications" },
      { status: 500 },
    );
  }
  
}
