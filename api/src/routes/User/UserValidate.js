const router = require("express").Router();
const { User } = require("../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  const user = await User.findOne({
    where: { email: req.body.email },
  });

  if (!user) {
    return { status: "error", error: "Invalid login" };
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (isPasswordValid) {
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
