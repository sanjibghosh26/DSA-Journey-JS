function findMaxConsecutiveOnes(nums){
    let maxCount = 0;
    let currentCount = 0;
    for(let i=0; i<nums.length; i++){
        if (nums[i]===1){
            currentCount++
            if(currentCount>maxCount){
                maxCount=currentCount
            }

        }else currentCount=0;
    }
    return maxCount
}
console.log(findMaxConsecutiveOnes([1,1,1,0,2,2,1,1,1,1,1,0]));