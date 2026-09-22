const express = require("express");
const { Resend } = require("resend");

const router = express.Router();

const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/contact", async (req, res) => {
    try {
        const {
            name,
            surname,
            email,
            message
        } = req.body;

        // Validate fields
        if (!name || !surname || !email || !message) {
            return res.status(400).json({
                message: "Please complete all fields."
            });
        }

        // Send email
        const { data, error } = await resend.emails.send({
            from: `Nexwell Website <${process.env.EMAIL_FROM}>`,
            to: [process.env.CONTACT_EMAIL],

            // This allows the client to click Reply
            // and reply directly to the customer.
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
                        <strong>Name:</strong>
                        ${name}
                    </p>

                    <p>
                        <strong>Surname:</strong>
                        ${surname}
                    </p>

                    <p>
                        <strong>Email:</strong>
                        ${email}
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

module.exports = router;