// // import { square, add } from "./utils.js";
// // reference a default before the curly braces
// import subtract, { square, add } from "./utils.js";
// // So just referencing the default would look like this
// // import subtract from "./utils.js";

// console.log("app.js is running!!!");
// console.log(square(5));
// console.log(add(100, 5));
// console.log(subtract(100, 19));


import amISenior, { isAdult, canDrink } from "./person.js";
console.log("app.js is running!!!");
console.log("Am I of age?", isAdult(18), "Can I drink?", canDrink(18));
console.log("Am I senior?", amISenior(32));


// You can call the default imports anything you want
// import randomName from "./utils.js";

// console.log(randomName(10,9));

