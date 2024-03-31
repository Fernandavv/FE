const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server used to send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "*******@gmail.com", // Insira seu e-mail do Gmail
        pass: "" // Insira sua senha do Gmail aqui
    },
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to Send");
    }
});

router.post("/contact",(req, res) => {
    const name = req.body.firstName + req.body.lastName;
    const email = req.body.email;
    const message = req.body.message;
    const phone = req.body.phone;
    const mail ={
      from:name,
      to:"********@gmail.com",
      subject:"Contact Form Submission - Portfolio",
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <p>Message: ${message}</p>
  `,
    };

    contactEmail.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            res.status(500).json({ message: 'Erro ao enviar e-mail' });
        } else {
            console.log('E-mail enviado:', info.response);
            res.status(200).json({ message: 'E-mail enviado com sucesso' });
        }
    });
});

app.listen(5000, () => console.log("Server Running"));
