const destructureItems = (input) => {
  // destructure the name and parents of the character and format the output as shown
  const {
    first,
    last,
    allegiance: {
      parents: { mother, father },
    },
  } = input; //grab/destructure the parts of the input that we need
  return `${first} ${last}\n  daughter of\n  ${mother} and ${father}`; //structure the string
};

const sansa = {
  first: "Sansa",
  last: "Stark",
  allegiance: {
    house: "Winterfell",
    parents: {
      mother: "Catelyn Tully",
      father: "Eddard Stark",
    },
    animals: {
      direwolf: "Lady",
    },
  },
};

const daenerys = {
  first: "Daenerys",
  last: "Targaryen",
  allegiance: {
    house: "Targaryen",
    parents: {
      mother: "Queen Rhaella",
      father: "King Aerys II Targaryen",
    },
    animals: {
      dragons: "Drogon",
    },
  },
};

console.log(destructureItems(sansa));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
console.log(destructureItems(daenerys));
// Daenerys Targaryen
//   daughter of
//   Queen Rhaella and King Aerys II Targaryen
