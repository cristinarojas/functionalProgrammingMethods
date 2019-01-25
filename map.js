// To apply a function on every element in an array. A new array is then returned.
// Use the map to affect the data - like operations, formats, etc.
var heroes = [
	{
    name: "Batman 1",
    franchise: "DC",
    age: 23,
    info: [
      {
        family: "rojas",
        brothers: 5
      }
    ]
  },
  {
    name: "Batman 2",
    franchise: "DC",
    age: 10,
    info: [
      {
        family: "santana",
        brothers: 2
      }
    ]
  },
  {
    name: "Batman 3",
    franchise: "DC",
    age: 12,
    info: [
      {
        family: "zamora",
        brothers: 15
      }
    ]
  },
  {
    name: "Batman 4",
    franchise: "DC",
    age: 20,
    info: [
      {
        family: "villa",
        brothers: 6
      },
      {
        family: "villa 2",
        brothers: 13
      }
    ]
  }
];

// we can return the data in a new array
heroes.map((family, index) => {
  return `${family.name} - ${family.age}`; // (4) ["Batman 1 - 23", "Batman 2 - 10", "Batman 3 - 12", "Batman 4 - 20"]
});

// We can do operations
heroes.map((family, index) => {
  return family.age * 2; // [46, 20, 24, 40]
});

// Simple way - only one line no { } no ( ) 
heroes.map(family => family.age * 20);

// If we want to apply one condition like filter inside
// we cannot because will return true, false.
heroes.map((family, indes) => {
  return family.age > 20; // [true, false, true]
});
