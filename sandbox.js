const str1 = 'abcd';
const str2 = 'abed';

const solutionTwo = (str1, str2) => {
	const result = new Set(str1 + str2);

	return Array.from(result);
};

console.log(solutionTwo(str1, str2));

// Output -> ['a', 'b', 'c', 'd', 'e']

// O(n) -> Time Complexity
