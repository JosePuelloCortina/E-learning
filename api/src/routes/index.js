const { Router } = require("express");
const UserGet = require('./User/User');
const UserPost = require('./User/UserPost');
const UserId = require('./User/UserId');
const UserPut = require('./User/UserPut');
const Role = require('./Role/Role');
const CoursesAll = require('./Courses/CourseAll');
const CoursesPost = require('./Courses/CoursePost');
const CoursesDelete = require('./Courses/CourseDelete');
const UserDelete = require('./User/UserDelete');
const CategoryPost = require('./Category/CategoryPost');


const router = Router();
//probando ok

router.use('/user', UserGet);
router.use('/user', UserPost);
router.use('/user', UserId);
router.use('/user', UserPut)
router.use('/role', Role);
router.use('/courses', CoursesAll);
router.use('/courses', CoursesPost);
router.use('/courses', CoursesDelete);
router.use('/user', UserDelete);
router.use('/category', CategoryPost);


module.exports = router;  