'''
罗马数字转整数
'''
class Solution:
    def romanToInt(self, s: str) -> int:
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        sub = {
            'I': ['V', 'X'],
            'X': ['L', 'C'],
            'C': ['D', 'M']
        }
        subkeys = list(sub.keys())
        
        pre = ''
        cur = 0
        for c in s:
            if pre in subkeys and c in sub[pre]:
                cur = cur + roman[c] - 2 * roman[pre]
            else:
                cur += roman[c]
            pre = c
        
        return cur