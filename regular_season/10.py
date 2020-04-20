'''
给定一个字符串 (s) 和一个字符模式 (p)。实现支持 '.' 和 '*' 的正则表达式匹配。
'''
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        dp = [[False for _ in range(len(s)+1)] for _ in range(len(p)+1)]
        dp[0][0] = True
        
        for i in range(1, len(s)+1):
            dp[0][i] = False
        for j in range(1, len(p)+1):
            dp[j][0] = True if p[j-1] == '*' and j >= 2 and dp[j-2][0] else False
        
        for i in range(1, len(s)+1):
            for j in range(1, len(p)+1):
                if p[j-1] == '*':
                    dp[j][i] = dp[j-2][i] or (p[j-2] == s[i-1] or p[j-2] == '.') and dp[j][i-1]
                else:
                    dp[j][i] = dp[j-1][i-1] and (p[j-1] == s[i-1] or p[j-1] == '.')
        
        return dp[len(p)][len(s)]