'''
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
'''

import math

class Solution:
    def longestPalindrome(self, s: str) -> str:     
        lgStr = ""
        for i in range(2 * len(s)):
            curStr = self.findLongestWithCenter(s, i / 2)
            lgStr = curStr if len(curStr) > len(lgStr) else lgStr
            
        return lgStr
        
    def findLongestWithCenter(self, s: str, idx) -> int:
        l, r = math.floor(idx), math.ceil(idx)
        while l >= 0 and r < len(s) and s[l] == s[r]:
            l -= 1
            r += 1
        return s[l+1:r]