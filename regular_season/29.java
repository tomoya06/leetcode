/**
  给定两个整数，被除数 dividend 和除数 divisor。将两数相除，要求不使用乘法、除法和 mod 运算符。

返回被除数 dividend 除以除数 divisor 得到的商。


    被除数和除数均为 32 位有符号整数。
    除数不为 0。
    假设我们的环境只能存储 32 位有符号整数，其数值范围是 [−231,  231 − 1]。本题中，如果除法结果溢出，则返回 231 − 1。

位操作淋漓尽致

1. 负数的二进制表示方式：首位为1
2. 左移/右移 = 乘2/除2

除法基础:)
被除数 ➗ 除数 = 商 。。。 余数
被除数 ➗ 除数 >= 商
 */

class Solution {
    public int divide(int dividend, int divisor) {
        if (divisor == 0) return 0;
        
        if (dividend == Integer.MIN_VALUE && divisor == -1)
            return Integer.MAX_VALUE;
        
        boolean flag = (dividend ^ divisor) < 0;
        
        long t = Math.abs((long)dividend);
        long d = Math.abs((long)divisor);
        
        int divres = 0;
        for (int cnt = 31; cnt >= 0; cnt--) {
            if ((t >> cnt) >= d) {
                divres += 1 << cnt;
                t -= d << cnt;
            }
        }
        return flag ? -divres : divres;
        
        // int res = dividend;
        // int cnt = 0;
        // while (res >= divisor) {
        //     res -= divisor;
        //     cnt += 1;
        // }
        // return flag ? -cnt : cnt;
        
    }
}