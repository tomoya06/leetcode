# ##剑指offer#分治法##levelh

class Solution:
    def minArray(self, numbers: List[int]) -> int:
        left, right = 0, len(numbers)-1
        while left <= right:
            mid = (left+right)//2
            if numbers[mid] < numbers[right]:
                right = mid
            elif numbers[mid] > numbers[right]:
                left = mid+1
            else:
                right -= 1
        return numbers[left]
