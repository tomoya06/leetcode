/**
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。

当 needle 是空字符串时我们应当返回 0 。

Solution1 就是暴力解法
Solution  Sunday算法，参考https://blog.csdn.net/q547550831/article/details/51860017
 */
class Solution1 {
    private int hlen;
    private int nlen;
    
    public int strStr(String haystack, String needle) {
        hlen = haystack.length(); 
        nlen = needle.length();
        if (nlen == 0) return 0;
        if (nlen > hlen) return -1;
        
        for (int i = 0; i <= hlen - nlen; i++) {
            String subhay = haystack.substring(i, i+nlen);
            if (subhay.equals(needle)) return i;
        }
        
        return -1;
    }
}

class Solution {
    private int hlen;
    private int nlen;
    
    public int strStr(String haystack, String needle) {
        hlen = haystack.length(); 
        nlen = needle.length();
        if (nlen == 0) return 0;
        if (nlen > hlen) return -1;
        
        int heyIdx = 0;
        boolean flag;
        while (heyIdx <= hlen - nlen) {
            if (haystack.substring(heyIdx, heyIdx+nlen).equals(needle)) return heyIdx;
            else heyIdx = next(haystack, needle, heyIdx);
            // flag = false;
            // for (int i = 0; i < nlen; i++) {
            //     if (haystack.charAt(heyIdx+i) != needle.charAt(i)) {
            //         heyIdx = next(haystack, needle, heyIdx);
            //         flag = true;
            //         break;
            //     }
            // }
            // if (!flag) return heyIdx;
        }
        
        return -1;
    }
    
    private int next(String haystack, String needle, int hpos) {
        int hayEndIdx = hpos + nlen;
        if (hayEndIdx >= hlen) return hayEndIdx;
        
        for (int i = nlen - 1; i >= 0; i--) {
            if (haystack.charAt(hayEndIdx) == needle.charAt(i)) {
                return hpos + nlen - i;
            }
        }
        return hpos + nlen + 1;
    }
}