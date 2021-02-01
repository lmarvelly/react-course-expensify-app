// Normal function
const square1 = function(x)
{
    return x * x;
}

// You dont need the variable declareation at the begining of a
// normal function
function square2(x) 
{
    return x * x;
}

console.log(square2(8));

// Arrow function
const squareArrow1 = (x) =>
{
    return x * x;
}

// Alternate/shorthand syntax
const squareArrow2 = (x) => x * x;

console.log(squareArrow2(4));


// CHALLENGE - Use Arrow Functions
const fullName = "Luke Marvelly";

const getFirstName1 = (name) =>
{
    return name.split(' ')[0];
}

const getFirstName2 = (name) => name.split(' ')[0];

console.log(getFirstName1(fullName));
console.log(getFirstName2(fullName));