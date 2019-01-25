/*The forEach() method calls a provided function once for each element in an array, in order.

Note: forEach() does not execute the function for array elements without values.*/
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

// forEach do not return nothing, just passes over each item.
// we can do operations but we need to create an array to save this.
const ages = [];

heroes.forEach((heroe) => {
	ages.push(heroe.age * 2);
});

console.log(ages);

// If we can have a new array with new data
// we need to declare an empty array and save the items in that array.
function printAges(heroes) {
	const ages =  [];

	heroes.forEach((heroe) => {
		ages.push(heroe.age);
	});

	return ages;
}
printAges(heroes);
