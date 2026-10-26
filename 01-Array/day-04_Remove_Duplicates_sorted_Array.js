function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let write = 0;

    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[write]) {
            write++;
            nums[write] = nums[read];
        }
    }

    return write + 1;
}

let arr = [1, 1, 2, 2, 3, 4, 4];

let count = removeDuplicates(arr);

console.log(count); // 4
console.log(arr);   // [1, 2, 3, 4, 3, 4, 4]