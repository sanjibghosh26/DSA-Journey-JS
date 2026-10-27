function rotateArray(arr, k) {
    let n = arr.length;
    if (n === 0) return;
    k = k % n; // Handle cases where k is greater than n. (e.g., 10 % 7 = 3 - rotate 3 times instead of 10 times)
    if (k === 0) return;
    reverse(arr, 0, n - 1); // Reverse the entire array (0 to n-1)
    reverse(arr, 0, k - 1); // Reverse the first k elements (0 to k-1)
    reverse(arr, k, n - 1); // Reverse the remaining elements (k to n-1)

}
function reverse(arr, start, end) { // do not inistialize start and end in the function, pass them as parameters because we initialize them in the rotateArray function
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Before rotation:", arr);
const k = 3;
rotateArray(arr, k);
console.log("After rotation:", arr);
    