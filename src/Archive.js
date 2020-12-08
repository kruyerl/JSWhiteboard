// Template:
/** ===============================
 * Date: 12/07/2020
 * Problem Statement: Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

Code:
	function Divisors(integer) {
	const divisors = []
	// validate larger than 1
	if (divisors.length === 1) return 'Integer smaller than 1'
	// loop up to integer
	for (let i = 2; i < integer; i++) {
		// calc if divisor
		// if divisor push to start of arr
		if (Number.isInteger(integer / i)) {
		divisors.push(i)
		}
	}
	// return ifPrime
	if (divisors.length === 0) return `${integer} is prime`
	return divisors
	}

	Divisors(0)

	console.log(Divisors(12))
	console.log(Divisors(25))
	console.log(Divisors(13))

 * AfterActionReview: {
 *      Effective:      'commented process before execution'
 *      Ineffective:    'uncomfortable, need more practise with fundamentals'
 *      Improvements:   'simplify where possible'
 * }
 =============================== */

/** ===============================
 * Date:                28/04/19
 * Problem Statement:   'We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.'
 * Time:                00:00
 * Code:
 *      <
 *
 *      />
 * AfterActionReview: {
 *      Effective:      ''
 *      Ineffective:    ''
 *      Improvements:   ''
 * }
 =============================== */
