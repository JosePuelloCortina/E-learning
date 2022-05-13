const { User } = require("../db");

let users = [
  {
    id: "b65232b0-c6a0-11ec-b926-ff69e9773726",
    name: "valentina",
    password: "vale123",
    email: "vale@vale.com",
    image: "",
    role: "alumno",
    category: ["Front-End", "React", "Full-Stack", "Mobile", "Redux"],
    validated: "true",
    banned: "false",
  },
  {
    id: "b65232b0-c6a0-11ec-b926-ff69e9773727",
    name: "albano",
    password: "albano123",
    email: "albano@albano.com",
    image: "",
    role: "instructor",
    category: ["Front-End", "React", "Redux", "Git", "Bootstrap"],
    validated: "true",
    banned: "false",
  },
  {
    id: "b65232b0-c6a0-11ec-b926-ff69e9773728",
    name: "andrea",
    password: "an123",
    email: "andrea@andrea.com",
    image: "",
    role: "instructor",
    category: ["Front-End", "JavaScript", "CSS", "HTML", "SASS"],
    validated: "true",
    banned: "false",
  },
  {
    id: "b65232b0-c6a0-11ec-b926-ff69e9773729",
    name: "gustavo",
    password: "g123",
    email: "gustavo@gustavo.com",
    image: "",
    role: "instructor",
    category: ["Front-End", "JavaScript", "Bootstrap", "Vue", "Angular"],
    validated: "true",
    banned: "false",
  },
  {
    id: "b65232b0-c6a0-11ec-b926-ff69e9773720",
    name: "tomas",
    password: "t123",
    email: "tomas@tomas.com",
    image: "",
    role: "admin",
    category: ["Back-End", "Python", "Java", "Ruby", "Kotlin"],
    validated: "true",
    banned: "false",
  },
  {
    id: "b65232b0-c6a0-11ec-b926-ff69e9773723",
    name: "agustin",
    password: "agus123",
    email: "agus@agus.com",
    image: "",
    role: "alumno",
    category: [],
    validated: "true",
    banned: "false",
  },
];

const initializeUser = async () => {
  try {
    users = users.forEach(async (u) => {
      const user = {
        id: u.id,
        name: u.name,
        password: u.password,
        image: u.image,
        email: u.email,
        validated: u.validated,
        banned: u.banned,
      };
      const createUser = await User.create(user);
      await createUser.addRoles(u.role);
      await createUser.addCategory(u.category);
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = initializeUser;
