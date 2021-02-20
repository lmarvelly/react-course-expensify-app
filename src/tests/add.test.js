/**
 * Important to have the .test in the file extension. Jest will not 
 * recognise it as a test file otherwise
 */

const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('Should add two numbers', () => 
{
	const result = add(3, 4);
	expect(result).toBe(7);
});

test('Should insert name into string', () => 
{
	const result = generateGreeting('Luke');
	expect(result).toBe('Hello Luke!');
});

test('should generate greeting for no name', () =>
{
	const result = generateGreeting();
	expect(result).toBe('Hello Anonymous!');
});