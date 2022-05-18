require("dotenv").config();
const { Sequelize, Op } = require("sequelize");
const fs = require("fs");
const path = require("path");
// const Review = require("./models/Review");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/elearning`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const {
  User,
  Role,
  Buy,
  Course,
  Clase,
  Category,
  Order,
  Avatar,
  Review,
  BuyClase,
} = sequelize.models;

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

// Relacion de muchos a muchos usuario -> role
// User.hasMany(Role);
// Role.belongsTo(User);

User.belongsToMany(Role, { through: "userRole" });
Role.belongsToMany(User, { through: "userRole" });

// Relacion de muchos a uno usuario -> compra
User.hasMany(Buy);
Buy.belongsTo(User);

// Relacion de muchos a uno Curso -> Compras
Course.hasMany(Buy);
Buy.belongsTo(Course);

// Relacion de compra a clases // Cada clase muchas compras cada compraa muchas clases
Buy.belongsToMany(Clase, { through: BuyClase });
Clase.belongsToMany(Buy, { through: BuyClase });

// Relacion muchos a muchos usuarios -> cursos
User.belongsToMany(Course, { through: "userCourse" });
Course.belongsToMany(User, { through: "userCourse" });

//Relacion muchos a muchos categoria -> cursos
Course.belongsToMany(Category, { through: "categoriaCourse" });
Category.belongsToMany(Course, { through: "categoriaCourse" });

//Relacion muchos a muchos categoria -> User
User.belongsToMany(Category, { through: "categoriaUser" });
Category.belongsToMany(User, { through: "categoriaUser" });

//Relacion de muchos a uno curso -> clase
Course.hasMany(Clase);
Clase.belongsTo(Course);

User.hasMany(Order);
Order.belongsTo(User);

Order.hasMany(Buy);

Avatar.hasMany(User);
User.belongsTo(Avatar);

//Relación de muchos a uno curso -> reviews
Course.hasMany(Review);
Review.belongsTo(Course);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  Op,
};
