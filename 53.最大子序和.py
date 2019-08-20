#
# @lc app=leetcode.cn id=53 lang=python3
#
# [53] 最大子序和
#
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        if len(nums) == 0: 
            return 0
        if len(nums) == 1: 
            return nums[0]
        
        maxSolution: int = nums[0]
        curMaxSolution: int = nums[0]
        
        for idx in range(1, len(nums)):
            curMaxSolution = max(curMaxSolution + nums[idx], nums[idx])
            maxSolution = max(curMaxSolution, maxSolution)
        
        return maxSolution

