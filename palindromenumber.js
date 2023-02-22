// Given an integer x, return true if x is a palindrome, and false otherwise.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

var isPalindrome = function(x) {
  if (x < 0) return false;
  if (x < 10) return true;
  let s = x.toString().split('');
  let l = s.length;
  let half = l / 2;
  let start = s.slice(0, Math.floor(half));
  let end = s.slice(Math.ceil(half)).reverse();
  if (start === end) return true;
  return false;
}
