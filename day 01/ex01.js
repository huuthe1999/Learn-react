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

// console.log(b.length);

// 4. Get the first item, the middle item and the last item of the array

// console.log(b[0], b[Math.floor(b.length / 2)], b[b.length - 1]);

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

// console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [
	'Facebook',
	'Google',
	'Microsoft',
	'Apple',
	'IBM',
	'Oracle',
	'Amazon',
];

// 7. Print the array using console.log()

// console.log(itCompanies);

// 11. Change each company name to uppercase one by one and print them out

// const upperCaseName = itCompanies.map(company => company.toUpperCase());

// console.log(upperCaseName);

// console.log(itCompanies.join(', '));

// 13.	Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

// const checkCompany = (companyName, companyList) => {
// 	const company = companyList.find(company => company === companyName);
// 	return company ? `${company} is found` : 'Company is not found';
// };

// console.log(checkCompany(`Google`, itCompanies));
// console.log(checkCompany(`Voyager`, itCompanies));

// 14. Filter out companies which have more than one 'o' without the filter method

// const filterCompanies = [];
// for (const company of itCompanies) {
// 	if (company.match(/o/g)?.length > 1) {
// 		filterCompanies.push(company);
// 	}
// }
// console.log(filterCompanies);

// 15. Sort the array using sort() method
// console.log([...itCompanies].sort());

// 16. Reverse the array using reverse() method
// console.log([...itCompanies].reverse());

// 19. Slice out the middle IT company or companies from the array

// const middleIndex = Math.floor(itCompanies.length / 2);
// console.log(itCompanies.slice(middleIndex, middleIndex + 1));
