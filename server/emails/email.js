const sgMail = require("@sendgrid/mail");
const keys=require("../config/keys")

sgMail.setApiKey(keys.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: "khushirai9596@gmail.com",
        from: "dev.khushirai@gmail",
        subject: "Thank you for your message",
        text: `Thank you, ${name}.
    Will get back to you as soon as possible
    Regards,
    Khushi Rai`,
    });
};

module.exports = {
    sendWelcomeEmail
};
