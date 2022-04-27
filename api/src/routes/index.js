const { Router } = require("express");
const UserGet = require('./User/User');
const UserPost = require('./User/UserPost');
const UserId = require('./User/UserId');
const UserPut = require('./User/UserPut');
const Role = require('./Role');
const CousesAll = require('./Courses/CourseAll');
const CousesPost = require('./Courses/CoursePost');
const CoursesDelete = require('./Courses/CourseDelete');
const CoursesPut = require('./Courses/CoursePut');
const UserDelete = require('./User/UserDelete');


const router = Router();
//probando ok

router.use('/user', UserGet);
router.use('/user', UserPost);
router.use('/user', UserId);
router.use('/user', UserPut)
router.use('/role', Role);
router.use('/courses', CousesAll);
router.use('/courses', CousesPost);
router.use('/courses', CoursesDelete);
router.use('/courses', CoursesPut);
router.use('/user', UserDelete);


module.exports = router;  