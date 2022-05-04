const { Avatar } = require('../db');

let avatares = [
  {
    "image": "https://imageup.me/8h",
  },
  {
    "image": "https://imageup.me/8i",
  },
  {
    "image": "https://imageup.me/8j",
  },
  {
    "image": "https://imageup.me/8k"
  }
];

const initializeAvatar = async () => {
  try {
    avatares = avatares.forEach(async (r) => {
      const avat = {
        image: r.image,
      };
      const createAvatar = await Avatar.create(avat);
      await createAvatar;
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = initializeAvatar;
