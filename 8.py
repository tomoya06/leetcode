'''
实现一个 atoi 函数，使其能将字符串转换成整数。
'''
class Solution:
    def myAtoi(self, str: str) -> int:
        MAXINT = 2 ** 31 - 1
        MININT = -2**31
        idx = 0
        isPosi = ''
        nums = '0'
        while idx < len(str) and str[idx] == ' ':
            idx += 1
        if idx >= len(str) or str[idx] != '+' and str[idx] != '-' and not self.isDigit(str[idx]):
            return 0
        if str[idx] == '+':
            idx += 1
        elif str[idx] == '-':
            isPosi = '-'
            idx += 1
        while idx < len(str) and self.isDigit(str[idx]):
            nums = nums + str[idx]
            idx += 1
        ans = int(isPosi + nums)
        if ans > MAXINT:
            return MAXINT
        elif ans < MININT:
            return MININT
        else:
            return ans
    
    def isDigit(self, str: str) -> int:
        for i in range(len(str)):
            if str[i] > '9' or str[i] < '0':
                return False
        return True