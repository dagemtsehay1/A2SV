/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    var sorted_num = nums.sort(function(a, b) {return a - b;});
    var ans = [];
    
    for(i =0; i < nums.length; i++){
        if(sorted_num[i] == target){
            ans.push(i);
        }
    }
    
    return ans;
};
