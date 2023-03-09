// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

var plusOne = function(digits) {
  const fromArray = digits.join(''); // get Digits out of Array
  const toInt = BigInt(fromArray) ; //Dont use parseInt, use BigInt instead
  const addOne = toInt + 1n; // add one!
  const result =  Array.from(String(addOne), Number); // return digits to array
  return result
};

// Beats 82.3% runtime
// Beats 76.5% memory
