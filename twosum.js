// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Create a table, for each number find the difference between it and the target. If the difference is a property then return current index and property value. Otherwise add num as property to table with its index as its value.
var twoSum = function(nums, target) {
  let table = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (table.hasOwnProperty(diff)) return [i, table[diff]];

    table[nums[i]] = i;
  }
}
