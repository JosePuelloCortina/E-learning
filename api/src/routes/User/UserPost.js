const server = require("express").Router();
const { User } = require("../../db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { uuid } = require("uuidv4");
const { PASS_EMAIL, DB_HOST } = process.env;

const mail = {
  user: "akademit.adm@gmail.com",
  pass: PASS_EMAIL,
};

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  tls: {
    rejectUnauthorized: false,
  },
  secure: true, // true for 465, false for other ports
  auth: {
    user: mail.user,
    pass: mail.pass,
  },
});

const BASE_URL3 =
  DB_HOST === "localhost"
    ? "http://localhost:3001"
    : "https://deploy-akademit.herokuapp.com";

const sendEmail = async (email, subject, tokenRegister) => {
  try {
    await transporter.sendMail({
      from: `AkademIT <${mail.user}>`,
      to: email,
      subject,
      text: "Hola amigos",
      html: `<b>Click en el siguiente link para verificar su cuenta</b>
              <a href="${BASE_URL3}/user/validated/${tokenRegister}">Verificar usuario</a>`, // html body
    });
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};

server.post("/create", async function (req, res, next) {
  try {
    const { name, password, email, role, banned } = req.body;
    const code = uuid();
    const newPassword = await bcrypt.hash(password, 10);
    if (!name || !password || !email) {
      return res.status(422).json({ error: "No se enviaron todos los datos" });
    }
    const user = await User.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      User.create({
        name: name,
        password: newPassword,
        email: email,
        code: code,
        banned: banned,
      }).then((user) => {
        user.addRole(role).then(async () => {
          user.role = await user.getRoles();
        });
      });

      const tokenRegister = jwt.sign(
        {
          data: { email, code },
        },
        "secret123"
      );

      await sendEmail(email, "Verificacion de usuario", tokenRegister);

      res.json({ status: "ok create", email: email });
    } else {
      res.status(400).json({ status: "error", error: "Duplicate email" });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: "error" });
  }
});

module.exports = server;
