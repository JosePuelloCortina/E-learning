const { Router } = require("express");
const UserGet = require('./User/User')
const UserPost = require('./User/UserPost')
const UserId = require('./User/UserId')
const Role = require('./Role')
const CousesAll = require('./Courses/CourseAll');
const CousesPost = require('./Courses/CoursePost');


const router = Router();
//probando ok

router.use('/user', UserGet);
router.use('/user', UserPost);
router.use('/user', UserId);
router.use('/role', Role);
router.use('/courses', CousesAll);
router.use('/courses', CousesPost);


module.exports = router;  