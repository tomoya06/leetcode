#
# @lc app=leetcode.cn id=131 lang=python3
#
# [131] 分割回文串
#

# @lc code=start
class Solution:
    def partition(self, s: str) -> List[List[str]]:
        if not s:
            return [[]]
        if len(s) == 1:
            return[[s]]
        ret = []
        for ll in range(1, len(s) + 1):
            if s[:ll][::-1] == s[:ll]:
                ret += [[s[:ll]] + j for j in self.partition(s[ll:])]
        return ret
            
        
# @lc code=end

