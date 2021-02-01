// Localstorage Syntax
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear(); // clears local data

// example
localStorage.setItem('name', 'Luke');
localStorage.getItem('name');
localStorage.removeItem('name');

// Local storage only stores string data. 
// Numbers will become strings

// We have to use JSON to get more complex data like objects
// JSON = JavaScript Object Notation


// stringify() takes a regular javascript object and give the string
// representation
JSON.stringify()
// take the string representation and return a javascript
JSON.parse()

// examples
JSON.stringify({ age: 26 }); // returns "{"age":26}"

const json = JSON.stringify({ age: 26 });
JSON.parse(json); // create object
JSON.parse(json).age; // access properties


const num = '12';
// We need to convert to a number
// Were going to be working in the base 10
parseInt(num, 10); // return int 12
parseInt(num, 10) + 1; // will return int 13

// What happens if there are alphanumberic charactors
parseInt('abc', 10); // returns NaN which is an error telling us that 
                     // it was not a number

// Check if it was Not a number
isNaN('abc' + 33); // returns true as it's not a number
isNaN(2 + 33); // return false as it's a number