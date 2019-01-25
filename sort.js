// The sort() method sorts an array alphabetically
const data = [3, 4, 2, 5, 1];

data.sort();// (5) [1, 2, 3, 4, 5]

// If we want to sort and array of objects.
const data = [
  {
    name: "cristina",
    age: 30
  },
  {
    name: "carlos",
    age: 31
  },
  {
    name: "kike",
    age: 7
  }
];

data.sort((a, b) => {
  if (a.age > b.age) {
    return 1
  } else {
    return -1
  }
}); // [{name: "kike", age: 7}, {name: "cristina", age: 30}, {name: "carlos", age: 31}]

// Also we can do short way
data.sort((a,b) => (a.age > b.age ? 1 : -1); // [{name: "kike", age: 7}, {name: "cristina", age: 30}, {name: "carlos", age: 31}]
