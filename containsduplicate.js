// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Input: nums = [1,2,3,4]
// Output: false

var containsDuplicate = function(nums) {
  let unique = [...new Set(nums)];
  return !(unique.length === nums.length);
};

// Runtime beats 83.8%
// Memory beats 13.1%
