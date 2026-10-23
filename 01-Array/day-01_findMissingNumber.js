function findMissingNumber(arr) {
    let n = arr.length+1 ;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}
// function FindMissingNumber(arr) {
//     let num = arr.length;
//     let ExpectedSum = (n * (n + 1)) / 2;
//     let ActualSum = 0;
//     for (let i = 0; i < n; i++) {
//         ActualSum += arr[i];
//     }
//     return ExpectedSum - ActualSum;
// }
console.log(findMissingNumber([1, 2, 3, 4, 6])); // Output: 5
console.log(findMissingNumber([1, 2, 3, 5]));    // Output: 4
// console.log(FindMissingNumber([3,0,1]));       // Output: 2 --> arr.length hobe arr.length+1 hobe na karon akhane 0 theke suru means 0 achei. 1 diye start hole hoto arr.length+1. this is the reason why we are using arr.length+1 in the first line of the function for starting from 1. and this is also the reason why we are using arr.length in the second Function of the function for starting from 0.