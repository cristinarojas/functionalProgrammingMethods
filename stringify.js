// Convert object, array to string.
const myObj = {
  name: 'Skip',
  age: 2,
  favoriteFood: 'Steak'
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Skip","age":2,"favoriteFood":"Steak"}"

// With arrays.
//"["bacon","letuce","tomatoes"]"
