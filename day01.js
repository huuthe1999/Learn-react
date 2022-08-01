// Exercise: Level 1
const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya',
];

const webTechs = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Redux',
	'Node',
	'MongoDB',
];

// 1. Declare an empty array;

const a = [];

// 2. Declare an array with more than 5 number of elements

const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 3. Find the length of your array

console.log(b.length);

// 4. Get the first item, the middle item and the last item of the array

console.log(b[0], b[Math.floor(b.length / 2)], b[b.length - 1]);

// 5.

const mixedDataTypes = [
	1,
	'string',
	true,
	null,
	undefined,
	Symbol('foo'),
	{},
	[],
	() => {},
	new Date(),
];

console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
