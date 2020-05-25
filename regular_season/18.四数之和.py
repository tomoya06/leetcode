#
# @lc app=leetcode.cn id=18 lang=python3
#
# [18] 四数之和
#
# https://leetcode-cn.com/problems/4sum/description/
#
# algorithms
# Medium (36.05%)
# Likes:    274
# Dislikes: 0
# Total Accepted:    30.9K
# Total Submissions: 85.9K
# Testcase Example:  '[1,0,-1,0,-2,2]\n0'
#
# 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
# + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
#
# 注意：
#
# 答案中不可以包含重复的四元组。
#
# 示例：
#
# 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
#
# 满足要求的四元组集合为：
# [
# ⁠ [-1,  0, 0, 1],
# ⁠ [-2, -1, 1, 2],
# ⁠ [-2,  0, 0, 2]
# ]
#
#
#

# @lc code=start


class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        if not nums or len(nums) < 4:
            return []
        nums.sort()

        ans = list()

        for ii in range(0, len(nums)-3):
            if ii > 0 and nums[ii] == nums[ii-1]:
                continue
            for jj in range(ii+1, len(nums)-2):
                if jj > ii+1 and nums[jj] == nums[jj-1]:
                    continue
                remain = target - nums[ii] - nums[jj]
                kk, ll = jj+1, len(nums) - 1
                while kk < ll:
                    curSum = nums[kk] + nums[ll]
                    if curSum == remain:
                        ans.append([nums[ii], nums[jj], nums[kk], nums[ll]])
                        while kk < ll and nums[kk + 1] == nums[kk]: kk += 1
                        while kk < ll and nums[ll - 1] == nums[ll]: ll -= 1
                        kk, ll = kk + 1, ll - 1
                    elif curSum > remain:
                        while kk < ll and nums[ll - 1] == nums[ll]: ll -= 1
                        ll = ll - 1
                    else:
                        while kk < ll and nums[kk + 1] == nums[kk]: kk += 1
                        kk = kk + 1

        return ans


# @lc code=end
