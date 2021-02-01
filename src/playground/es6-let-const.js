// Reasons not to use 'var' and use 'const'
var nameVar = "Andrew";
// You can create the same var again
var nameVar = "Mike";
console.log('nameVar', nameVar);

let nameLet = 'Jen';
// You can reassess if but not redefine it
// let nameLet = 'Anne'; // This line makes Babel crash
nameLet = 'Julie';
console.log('nameLet', nameLet);

// Constants are constant
const nameConst = "Luke";
// This next like also makes Babel crash
// const nameConst = "Drew";
// Reassigning also makes it crash
// nameConst = "Drew";
console.log('nameConst', nameConst);

function getPetName()
{
    // This variable can only be used in the functions block scope
    const petName = 'Archie';
    return petName;
}

console.log("Pet name:", getPetName());
// This is invalid because petName isn't a global variable
// console.log(petName);

// Scope is different with 'var'
var fullName = 'Luke Marvelly';

if(fullName)
{
    var firstName = fullName.split(' ')[0];
    const surname = fullName.split(' ')[1];

    // 
    let name = fullName;

    console.log('first name: ', firstName);
    console.log('surname: ', surname);
    console.log('Full name: ', name);
}

// firstName can be accessed outside the scope of the function
console.log('first name: ', firstName);
// But 'const' variable cannot be access outside the scope
// console.log('surname: ', surname);
// Same with 'let' variables
console.log('Full name: ', name);


// You can reassign global variables in functions(except 'const')

let newVar;

function rename()
{
    newVar = "Some value";
    console.log("Value: ", newVar);
}

// Before calling the function it is undefined
console.log("Value: ", newVar);
rename();
console.log("Value: ", newVar);

// In conclusion it's better to use let or const so we don't 
// accidently use var values from inside scopes