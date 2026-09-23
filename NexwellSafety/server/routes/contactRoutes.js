import express from "express";
import { Resend } from "resend";
import rateLimit from "express-rate-limit";

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: {
        message: "Too many requests. Please try again later."
    }
});

router.post("/contact", contactLimiter, async (req, res) => {
    try {
        const {
            name,
            surname,
            email,
            message
        } = req.body;

        if (!name || !surname || !email || !message) {
            return res.status(400).json({
                message: "Please complete all fields."
            });
        }

        const { error } = await resend.emails.send({
            from: `Nexwell Website <${process.env.EMAIL_FROM}>`,
            to: [process.env.CONTACT_EMAIL],
            cc: [process.env.CONTACT_EMAIL_CC],
            replyTo: email,

            subject: `New Website Enquiry - ${name} ${surname}`,

            html: `
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">

                    <h2>New Contact Form Submission</h2>

                    <p>
                        Someone has contacted Nexwell Safety Wear
                        through the website.
                    </p>

                    <hr />

                    <p>
                        <strong>Name:</strong> ${name}
                    </p>

                    <p>
                        <strong>Surname:</strong> ${surname}
                    </p>

                    <p>
                        <strong>Email:</strong> ${email}
                    </p>

                    <h3>Message</h3>

                    <p>
                        ${message}
                    </p>

                </div>
            `
        });

        if (error) {
            console.error("Resend error:", error);

            return res.status(500).json({
                message: "Unable to send your message."
            });
        }

        return res.status(200).json({
            message: "Your message has been sent successfully."
        });

    } catch (error) {
        console.error("Contact form error:", error);

        return res.status(500).json({
            message: "Something went wrong. Please try again."
        });
    }
});

export default router;