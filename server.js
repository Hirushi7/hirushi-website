const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Contact form route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // configure transporter (use Gmail + App Password)
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "hirushind7@gmail.com",   // your Gmail
        pass: "btuurqubcayhzwrx"        // your 16-char App Password (no spaces)
      }
    });

    // send mail
    await transporter.sendMail({
      from: "hirushind7@gmail.com",     // always your Gmail
      to: "hirushind7@gmail.com",       // your inbox
      subject: "New Contact Form Message",
      text: `You received a new message from your website contact form:\n
Name: ${name}
Email: ${email}
Message:\n${message}`
    });

    res.json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Error sending message." });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));

