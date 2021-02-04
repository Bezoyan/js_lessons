// for of  and for in loop
const array = [4, 5, 9, 8, 5];

// Returs values
for (let i of array) {
  console.log(i);
}

// Returs keys
for (let i in array) {
  console.log(i);
}

const obj2 = {
  name: "Max",
  age: "32",
};

for (let i in obj2) {
  console.log(i);
}
