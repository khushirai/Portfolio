const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "dev.khushirai@gmail",
        subject: "Thank you for your message",
        text: `Thank you, ${name}.
              Will get back to you as soon as possible`,
    });
};

module.exports = {
    sendWelcomeEmail
};
