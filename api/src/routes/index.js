const { Router } = require("express");
const UserGet = require('./User/User');
const UserGetValidate = require('./User/UserValidate');
const UserPost = require('./User/UserPost');
const UserId = require('./User/UserId');
const UserPut = require('./User/UserPut');
const Role = require('./Role/Role');
const CoursesAll = require('./Courses/CourseAll');
const CoursesPost = require('./Courses/CoursePost');
const CoursesDelete = require('./Courses/CourseDelete');
const CoursesGet = require('./Courses/CourseGet')
const CoursesPut = require('./Courses/CoursePut');
const CourseId = require('./Courses/CourseId');
const UserDelete = require('./User/UserDelete');
const CategoryPost = require('./Category/CategoryPost');
const CategoryAll = require('./Category/CategoryAll');
const CategoryDelete = require('./Category/CategoryDelete');
const CategoryId = require('./Category/CategoryId');
const ClassesPost = require('./Classes/ClassesPost');
const ClassesGet = require('./Classes/ClassesAll');
const ClassesDelete = require('./Classes/ClassesDelete');
const ClassesPut = require('./Classes/ClassesPut');
const ClassesId = require("./Classes/ClassesId");
const BuyPost = require('./Buy/BuyPost');
const BuyGet = require('./Buy/BuyGet');
const BuyId = require('./Buy/BuyId');



const router = Router();
//probando ok


router.use('/user', UserGet);
router.use('/user', UserGetValidate);
router.use('/user', UserPost);
router.use('/user', UserId);
router.use('/user', UserPut)
router.use('/role', Role);
router.use('/courses', CoursesAll);
router.use('/courses', CoursesPost);
router.use('/courses', CoursesDelete);
router.use('/courses', CoursesGet)
router.use('/courses', CoursesPut);
router.use('/courses', CourseId);
router.use('/user', UserDelete);
router.use('/category', CategoryPost);
router.use('/category', CategoryAll);
router.use('/category', CategoryDelete);
router.use('/category', CategoryId);
router.use('/classes', ClassesPost);
router.use("/classes", ClassesGet);
router.use("/classes", ClassesDelete);
router.use("/classes", ClassesPut);
router.use("/classes", ClassesId);
router.use('/buy', BuyPost);
router.use('/buy', BuyGet);
router.use('/buy', BuyId);




module.exports = router;  