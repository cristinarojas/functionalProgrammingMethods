/*
  The filter() method creates an array filled with all array elements that pass a test (provided as a function).

  Note: filter() does not execute the function for array elements without values.

  Note: filter() does not change the original array.

  array.filter(function(currentValue, index, arr), thisValue)
*/

var myData = [1, 20, 30, 40, 2, 5, 18, 5, 22, 24];

myData.filter((item, index) => {
    return item > 20 // [30, 40, 22, 24]
});

// -----------------------

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

// General filter
heroes.filter((heroe, index) => {
  return heroe.age > 10;
});

// Specific filter
heroes.filter((heroe, index) => {
  return heroe.info.filter((family, index) => {
    return family.brothers > 10
  }); // [{name: "Batman 1", franchise: "DC", age: 23]
});
