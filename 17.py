'''
给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
'''
class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        maps = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
        tmp = []
        res = []
        if len(digits) == 0:
            return res
        res = [x for x in maps[int(digits[0])-2]]
        if len(digits) == 1:
            return res
        
        for digit in digits[1:]:
            curmaps = maps[int(digit)-2]
            tmp = res[:]
            res = []
            for char in curmaps:
                for ans in tmp:
                    res.append(ans+char)
                    
        return res