'''
还是最长上升子序列
二分查找+动态规划
用一个列表存当前最长子序列，但只用来指示子序列长度，并非实际最长子序列
一个一个找，若当前值大于当前子序列尾，就加进去；
否则，使用二分查找找到当前序列中小于该值的最大值，替换
'''
class Solution:
    def binSearch(self, nums: List[int], n: int) -> int:
        l: int = 0
        r: int = len(nums) - 1
        while (l < r):
            mid = (l + r) // 2
            if n > nums[mid]:
                l = mid + 1
            else:
                r = mid
        return l

    def lengthOfLIS(self, nums: List[int]) -> int:
        if len(nums) == 0: 
            return 0
        lis: List[int] = []
        lis.append(nums[0])
        for i in range(1, len(nums)):
            n = nums[i]
            if n > lis[-1]:
                lis.append(n)
            else:
                pos: int = self.binSearch(lis, n)
                lis[pos] = n
        return len(lis)