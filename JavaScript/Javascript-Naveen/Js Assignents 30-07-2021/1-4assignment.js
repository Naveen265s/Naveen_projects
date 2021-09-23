const coders = [
  { name: "John", age: 23, gender: "m", admin: false },
  { name: "Jane", age: 20, gender: "f", admin: true },
  { name: "James", age: 60, gender: "m", admin: true },
  { name: "Jack", age: 35, gender: "m", admin: true },
  { name: "Jini", age: 30, gender: "f", admin: false },
];

//Find all coders older than 24
const result = coders.filter((itemAge) => {
  if (itemAge.age <= 24) {
    return itemAge;
  }
});
console.log(result);

//Find the total age of all coders
const total = coders.reduce((init, totalAge) => {
  return init + totalAge.age;
}, 0);
console.log(total);

//   List all female coders
const female = coders.filter((femaleMem) => {
  if (femaleMem.gender == "f") {
    return femaleMem.gender;
  }
});
console.log(female);

// List all admin coders in ascending order
const sorted = coders.sort((a, b) => {
  return a.age - b.age;
});
console.log(sorted);

// Find the total age of male coders under 25
const resultFilter = coders.filter((itemAge) => {
  if (itemAge.age < 25) {
    return itemAge;
  }
});
const totalFilter = resultFilter.reduce((init, totalAge) => {
  return init + totalAge.age;
}, 0);
console.log(totalFilter);
