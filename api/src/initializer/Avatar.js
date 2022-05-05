const { Avatar } = require('../db');

let avatares = [
  {
    image: "https://imageup.me/images/20a59ba7-b710-41e4-832f-0923ecaae9ef.jpg",
  },
  {
    image: "https://imageup.me/images/3e4fdfdc-eb6c-4f4c-947e-d5d012d04e85.jpg",
  },
  {
    image: "https://imageup.me/images/621a7231-d5a1-4b23-8478-af660d0ee19c.jpg",
  },
  {
    image: "https://imageup.me/images/6fda7baf-0962-4414-b5cd-a981e7aaead0.jpg",
  },
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
