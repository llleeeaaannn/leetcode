// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

var isPalindrome = function(s) {
  let parsed = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  let l = parsed.length / 2;
  if (parsed.length < 2) return true;
  let start = parsed.slice(0, Math.floor(l));
  let end = parsed.slice(Math.ceil(l)).split("").reverse().join("");
  if (start === end) return true;
  return false;
};
