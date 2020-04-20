class Solution:
    def findRepeatNumber(self, nums: List[int]) -> int:
        the_set = set()
        for num in nums:
            old_size = len(the_set)
            the_set.add(num)
            if len(the_set) == old_size:
                return num
