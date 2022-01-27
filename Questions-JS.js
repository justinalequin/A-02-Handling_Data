const userData = [
  {
    id: "111",
    name: "Peter",
    favorites: {
      food: ["burgers", "pizza"],
      activites: ["basketball", "baseball"],
    },
  },
  {
    id: "222",
    name: "John",
    favorites: {
      food: ["burgers", "tacos"],
      activites: ["football", "golf"],
    },
  },
  {
    id: "333",
    name: "Mary",
    favorites: {
      food: ["pizza", "tacos", "fried chicken"],
      activites: ["volleyball", "softball"],
    },
  },
];

// 5. Given the data above, use ".map" to make an array of objects.
// Each object should have the id of the user and the amount of favorite foods they have.
// example: [{id: '111', favoriteFoods: 2}]

const mappedUsers = userData.map((user) => {
  return {
    id: user.id,
    favoriteFoods: user.favorites.food,
  };
});

// 6. Given the data above, use ".reduce" to make an array of all the names
// of the people who have pizza as one of their favorite foods.
// example: ['Peter', 'Mary']

const pizzaLovers = userData.reduce((accumulator, user) => {
  const favFood = user.favorites.food;

  if (favFood.includes("pizza")) {
    return [...accumulator, user.name];
  }

  return accumulator;
}, []);

// 7. Show us an example of a switch statement being used

const dog = "labrador";

switch (dog) {
  case "labrador":
    console.log("Large Dog");
    break;

  case "Pomeranian":
    console.log("Small dog");
    break;

  default:
    console.log("Is that a dog?");
}
