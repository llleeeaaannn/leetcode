// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

var longestCommonPrefix = function(strs) {
  let match = 0;
  let start = strs[0];
  for (let i = 0; i < start.length; i++) {
    for (let j = 0; j < strs.length; j++) {
      if (start[i] !== strs[j][i]) return start.slice(0, match);
    }
    match++;
  }
  return start.slice(0, match);
};

// Beats 99.55% runtime
// Beats 47.38% memory
