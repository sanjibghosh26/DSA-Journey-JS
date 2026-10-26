function moveZeroes(nums) {
  let insertPos = 0;

  for (let current = 0; current < nums.length; current++) {
    if (nums[current] !== 0) {
      let temp = nums[insertPos];
      nums[insertPos] = nums[current];
      nums[current] = temp;

      insertPos++;
    }
  }
  return nums;
}
console.log(moveZeroes([0, 1, 0, 3, 1])); // Output: [1, 3, 1, 0, 0]
console.log(moveZeroes([15, 0, 12, 14])); // Output: [15, 12, 14, 0]