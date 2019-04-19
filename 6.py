'''
将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
（其实就是左右镜像的N）
'''
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s
        
        gap = numRows * 2 - 2
        res = ''
        for row in range(numRows):
            gapR = row * 2
            gapL = gap - gapR
            idx = row
            flag = False
            if idx < len(s):
                res += s[idx]
            while idx < len(s):
                flag = not flag
                if flag:
                    if gapL == 0:
                        continue
                    idx += gapL
                else:
                    if gapR == 0:
                        continue
                    idx += gapR
                if idx < len(s):
                    res += s[idx]
        return res
                    
                    