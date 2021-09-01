# ##剑指offer##levele
class Solution:
    def strToInt(self, str: str) -> int:
        idx = 0
        minus = False
        while idx < len(str) and str[idx] == ' ':
            idx += 1
        if idx >= len(str) or (str[idx] != '+' and str[idx] != '-') and (str[idx] < '0' or str[idx] > '9'):
            return 0
        if str[idx] == '-':
            minus = True
            idx += 1
        elif str[idx] == '+':
            idx += 1
        num = 0
        while idx < len(str):
            if str[idx] >= '0' and str[idx] <= '9':
                num = num*10 + ord(str[idx])-ord('0')
            else:
                break
            idx += 1
        return max(pow(-2, 31), -num) if minus else min(pow(2, 31)-1, num)
