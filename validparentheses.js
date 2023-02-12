// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

const brackets = {
  '(': ')',
  '[': ']',
  '{': '}'
}

var isValid = function(s) {
  if (s.length % 2) return false;

  let first = s[0];

  if (first === ')' || first === ']' || first === '}') return false;

  let last = s[s.length - 1];

  if (last === '(' || last === '[' || last === '{') return false;

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (brackets[s[i]]) {
      stack.push(s[i]);
    } else {
      if (brackets[stack.pop()] != s[i]) return false;
    }
  }

  if (stack.length) return false;
  return true;
};
