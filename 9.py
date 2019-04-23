'''
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
'''
class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0:
            return False
        
        tmp, revs = x, 0
        while tmp > 0:
            revs = revs * 10 + tmp % 10
            tmp = tmp // 10
        return revs == x
        