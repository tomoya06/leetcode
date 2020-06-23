#
# @lc app=leetcode.cn id=90 lang=python3
#
# [90] 子集 II
#

# @lc code=start
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res = [[]]
        nums.sort()
        
        i = 0
        while i < len(nums):
            curNum = nums[i]
            count = 0
            while i < len(nums) and nums[i] == curNum:
                count += 1
                i += 1
            curResLength = len(res)
            for t in range(1, count + 1):
                for oldRes in res[:curResLength]:
                    res.append(oldRes + [curNum] * t)
            
        return res


# @lc code=end

