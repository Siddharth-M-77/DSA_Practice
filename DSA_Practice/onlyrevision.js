const twoSum = (nums,target) =>{
 const seen = new Map()
 for(let i = 0;i<nums.length;i++){
    const conplement = target - nums[i]
    if(seen.has(conplement)){
        return [seen.get(conplement),i]
    }
    seen.set(nums[i],i)
 }
}
console.log(twoSum([2,7,11,15],9))