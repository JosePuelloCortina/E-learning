const { response } = require('express');
const { User, Op } = require('../db');

const getAllUser = async (req, res = response) => {
    try {
        const users = await User.findAll({
            include: {
                // model: relacion 
            }
        });
        res.json({ success: true, data: users });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: 'error'
        });
    }
};