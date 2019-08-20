'''
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
2^31-1=2147483647,-2^31=-2147483648
假装搞一下捕获异常
'''
class Solution:
    def reverse(self, x: int) -> int:
        flag = '' if x > 0 else '-'
        nstr = str(abs(x))[::-1]
        ans = int(flag+nstr)
        return 0 if ans > 2147483647 or ans < -2147483648 else ans
