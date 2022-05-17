const router = require("express").Router();
const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { DB_HOST } = process.env;

const getUsersDb = async () => {
  const info = User.findAll({
    raw: true,
  });
  return info;
};

const getTokenData = (token) => {
  console.log(token);
  let data = null;
  jwt.verify(token, "secret123", (err, decoded) => {
    if (err) {
      console.log("Error al obtener data del token");
    } else {
      data = decoded;
    }
  });

  return data;
};

router.get("/validated/:tokenRegister", async (req, res) => {
  const { tokenRegister } = req.params;

  const data = await getTokenData(tokenRegister);

  if (data === null) {
    return res.json({
      success: false,
      msg: "Error al obtener data",
    });
  }

  console.log(data);

  const { email, code } = data.data;

  const user = await User.findOne({
    where: { email: email },
  });

  if (user === null) {
    return res.json({
      success: false,
      msg: "Usuario no existe",
    });
  }

  const BASE_URL =
    DB_HOST === "localhost"
      ? "http://localhost:3000"
      : "https://akademit.vercel.app";

  if (code !== user.code) {
    return res.redirect(`${BASE_URL}/error`);
  }

  user.validated = "true";
  await user.save();

  return res.redirect(`${BASE_URL}/user/verification`);
});

router.post("/login", async (req, res) => {
  const users = await getUsersDb();

  const user = await users.find((e) => e.email === req.body.email);

  console.log(user);

  if (user === undefined) {
    return res.json({ status: "error", error: "Invalid login" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid && user.validated === "true") {
    const token = jwt.sign(
      {
        name: user.name,
        email: user.email,
      },
      "secret123"
    );
    return res.json({ status: "ok", user: token });
  } else if (req.body.password === user.password) {
    const newPassword = await bcrypt.hash(req.body.password, 10);
    return res.json({ status: "ok", user: newPassword });
  } else {
    return res.json({ status: "error", user: false });
  }
});

module.exports = router;
