'''
给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
'''
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        maxlen = 0
        i = 0
        while i < len(s):
            j = i + 1
            while j < len(s) and s[j] not in s[i:j]:
                j+=1
            maxlen = max(maxlen, j-i)
            if j < len(s) and s[j] in s[i:j]:
                i = s[i:j].index(s[j]) + i + 1
            else:
                i += 1
                
        return maxlen