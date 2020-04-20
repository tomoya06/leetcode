'''
动态规划
最长公共子序列
可以比作一个len(A) * len(B)的宫格，初始化为0
'''
class Solution:
    def findLength(self, A: List[int], B: List[int]) -> int:
        memo = [[0] * (len(A)+1) for _ in range(len(B)+1)]
        for i in range(len(A)-1, -1, -1):
            for j in range(len(B)-1, -1, -1):
                if A[i] == B[j]:
                    memo[j][i] = memo[j+1][i+1] + 1
        return max(max(x) for x in memo)