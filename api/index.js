//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const initializeRole = require('./src/initializer/Role');
const initializeUser = require('./src/initializer/User');
const initializeCategory = require('./src/initializer/Category')
const initializeCourses = require('./src/initializer/Courses')
const initializeClases = require('./src/initializer/Classes')


// Syncing all the models at once.

conn.sync({ force: true }).then(async() => {
  try {   
    await initializeRole(); 
    await initializeUser();
    await initializeCategory();
    await initializeCourses();
    await initializeClases();

    console.log("Tablas cargadas!!")
    server.listen(3001, () => {
      console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
  } catch (error) {
    
  }
});