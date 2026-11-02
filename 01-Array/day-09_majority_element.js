function majorityElement(nums) {
    for (let i = 0; i < nums.length; i++) {
        let count = 0;

        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                count++;
            }
        }

        if (count > nums.length / 2) {
            return nums[i];
        }
    }
}
console.log(majorityElement([3, 2, 3])); // Output: 3