// 1512. Number of Good Pairs
// Easy

// 507

// 39

// Add to List

// Share
// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Example 1:

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
// Example 2:

// Input: nums = [1,1,1,1]
// Output: 6
// Explanation: Each pair in the array are good.
// Example 3:

// Input: nums = [1,2,3]
// Output: 0

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  const length = nums.length;
  let count = 0;

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      console.log('nums[i]: ', nums[i], ': j: ', nums[j]);
      count += nums[i] == nums[j];
      console.log('count: ', count);
    }
  }
  return count;
};
