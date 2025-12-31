import { NextResponse } from 'next/server';
import { Resend } from 'resend';



// Simple email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
    try {
        const { fullName, email, message } = await request.json();

        const resend = new Resend(process.env.RESEND_API_KEY);

        // Input validation
        if (!fullName || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        if (typeof fullName !== 'string' || fullName.length > 100) {
            return NextResponse.json(
                { error: 'Invalid name' },
                { status: 400 }
            );
        }

        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        if (typeof message !== 'string' || message.length > 5000) {
            return NextResponse.json(
                { error: 'Message too long (max 5000 characters)' },
                { status: 400 }
            );
        }

        const data = await resend.emails.send({
            from: 'Portfolio Contact Form <onboarding@resend.dev>',
            to: ['marchelk372@gmail.com'],
            subject: `New Message from ${fullName}`,
            replyTo: email,
            text: `
        Name: ${fullName}
        Email: ${email}
        Message: ${message}
      `,
        });

        return NextResponse.json(data);
    } catch (error) {
        console.error('Contact API Error:', error);
        return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
    }
}
