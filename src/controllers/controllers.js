import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false,
  auth: {
    user: "furman.marks19@ethereal.email",
    pass: "2ycHgUZFVQWU9B1Qj8",
  },
});
const sendEmail = async (req, res) => {
  const info = await transporter.sendMail({
    from: '"Furman Marks" <	furman.marks19@ethereal.email>', // sender address
    to: "rafayabdul7817@gmail.com", // list of receivers
    subject: "Congratulation! Jeeto Pakistan✔",
    text: "Mubarak ho appka jeeto pakistanki trf se 10 lac cash or 20 tola sona nikla haa. Abhi 2000rs 03303049866 ma bhejain or inaam hasil krain", 
    html: "<b>10 Tola Sona?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.send("email sent");
};
export { sendEmail };
