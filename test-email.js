const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "hirushind7@gmail.com",   // your Gmail
    pass: "btuurqubcayhzwrx"        // App Password (no spaces)
  }
});

transporter.sendMail({
  from: "samithafss@gmail.com",     // sender
  to: "hirushind7@gmail.com",       // recipient (fixed typo)
  subject: "Test Email",
  text: "Hello Hirushi, this is a test!"
}, (err, info) => {
  if (err) {
    console.error("Error:", err);
  } else {
    console.log("Email sent:", info.response);
  }
});
