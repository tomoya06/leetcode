'''
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
'''
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        revNums = nums[::-1]
        for n in nums:
            if target - n in nums and nums.index(n) != len(nums) - revNums.index(target - n) - 1:
                return [nums.index(n), len(nums) - revNums.index(target - n) - 1]
            