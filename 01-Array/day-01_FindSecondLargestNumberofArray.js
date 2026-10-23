// Do not sort the array.
// Do not use Math.max().
// Try to solve it in one traversal.
// Target time complexity: (O(n)).
// Consider what should happen if no second-largest distinct element exists.
function findSecondLargest(arr){
    let Largest= -Infinity;
    let SecondLargest=-Infinity;
    if (arr.length<2){
        return null
    }
    for(let i=0; i<arr.length;i++){
        const current=arr[i];
        if(current>Largest){
            SecondLargest=Largest;
            Largest=current;
        }else if(current<Largest && current>SecondLargest){
            SecondLargest=current
        }
        
        
    }
    return SecondLargest===-Infinity?null:SecondLargest
}
console.log(findSecondLargest([76,2,7,98,65,99,67]))