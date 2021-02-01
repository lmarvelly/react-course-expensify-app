////// ARGIMENTS OBJECT /////
// arguments object - is no longer bound with arrow functions
const add = function(a, b)
{
    // additional arguments that were not declared can be accessed
    // with the local variable 'arguments'
    console.log(arguments);
    console.log(arguments[2]);
    return a + b;
}

const add2 = (a, b) =>
{
    // local variable 'arguments' cannot be access with arrow functions
    // console.log(arguments);
    return a + b;
}

console.log(add(10, 10));
// If an additional argument is given it does not come up with an
// error
console.log(add(10, 10, 1000));


////// THIS KEYWORD //////
// this keyword - is no longer bound
const user = 
{
    name: 'Luke',
    cities: ['Aberystwyth', 'Swansea', 'Cardiff'],

// ORIGINAL FUNCTIONS
    // printPlacesLived1()
    // {
    //     this.cities.forEach((city) =>
    //     {
    //         console.log(this.name + " has lived in " + city);
    //     });
    // }

    // This function wont work because an arrow function does bind
    // it own value. So it comes up with an error
    // printPlacesLived2:() =>
    // {
    //     this.cities.forEach((city) =>
    //     {
    //         console.log(this.name + " has lived in " + city);
    //     });
    // }


    printPlacesLived()
    {
        // MAP FUNCTION
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
}

// user.printPlacesLived();
console.log(user.printPlacesLived());


// CHALLENGE AREA

const multiplier = 
{
    numbers: [10, 20, 30],
    multiplyBy: 2,

    multiply()
    {
        // return this.numbers.map((number) => number + " times by " + this.multiplyBy + " is " + (number * this.  multiplyBy));
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}

console.log(multiplier.multiply(2));