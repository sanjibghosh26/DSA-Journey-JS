// Don't use .sort().
// Aim for O(n) time complexity.
// Aim for O(1) auxiliary space.
function isSortedArray(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1]){
            return false
        }
    }
    return true
}
console.log(isSortedArray([1,2,3,4,5]))
console.log(isSortedArray([7,8,9,1,2,3]))