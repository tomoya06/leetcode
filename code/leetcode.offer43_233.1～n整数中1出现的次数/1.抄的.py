# ##剑指offer#数学问题##levelh
# 太妙了
# https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/1n-zheng-shu-zhong-1-chu-xian-de-ci-shu-umaj8/
class Solution:
    def countDigitOne(self, n: int) -> int:
        dight, res = 1, 0
        high, cur, low = n // 10, n % 10, 0

        while high != 0 or cur != 0:
            if cur == 0:
                res += high * dight
            elif cur == 1:
                res += high * dight + low + 1
            else:
                res += (high + 1) * dight
            
            low += cur*dight
            cur = high % 10
            high = high // 10
            dight *= 10
        
        return res
