console.log("utils.js is running");

// const square = (x) => x * x;
// const add = (a, b) => a + b;

// Exports: Every file can have default exports - These are called
// named exports
// The inside of the curly braces is not an object
// export { square, add };


// You can directly setup names exports like so
// export const square = (x) => x * x;
// export const add = (a, b) => a + b;


// // Setting up default exports
// const square = (x) => x * x;
// const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// // You can only have one default
// export{ square, add, subtract as default };


// Setting up default exports inline
export const square = (x) => x * x;
export const add = (a, b) => a + b;
// const subtract = (a, b) => a - b;
// export default subtract;
// OR
export default (a, b) => a - b;