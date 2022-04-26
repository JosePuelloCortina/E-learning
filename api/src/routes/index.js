const { Router } = require("express");
const User = require('./User')
const Role = require('./Role')


const router = Router();
//probando ok

router.use('/user', User);
router.use('/role', Role);

module.exports = router;  