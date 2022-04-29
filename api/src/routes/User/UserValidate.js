const router = require('express').Router();
const { User } = require('../../db');




const getUsersDb = async () => {

    const info = User.findAll({
        raw: true
    })
    return info
}

router.get('/user', async (req, res) => {

    const users = await getUsersDb()

    try {

        const { email, password } = req.query

        const user = await users.find((ele) => ele.email === email)
        console.log(user)
        if (user) {

            console.log(user.password)
            if (user.password === password) {

                return res.json(user)
            }
            else {

                return res.send("password erroneo")
            }
        }
        else {
            return res.send("el usuario nmo existe")
        }
    }
    catch (err) {
        console.log(err)
    }

});



module.exports = router