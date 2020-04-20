/*
 * @lc app=leetcode.cn id=67 lang=java
 *
 * [67] 二进制求和
 */
class Solution {
    public String addBinary(String a, String b) {
        int lena = a.length();
        int lenb = b.length();
        int lenr = Math.max(lena, lenb);
        StringBuffer sb = new StringBuffer();
        int digita = 0, digitb = 0, digitr = 0;
        int pos = 0;
        char zero = '0';

        while (pos < lenr) {
            digita = pos < lena ? (int) a.charAt(lena - pos - 1) - (int) zero : 0;
            digitb = pos < lenb ? (int) b.charAt(lenb - pos - 1) - (int) zero : 0;
            int posans = digita + digitb + digitr;
            if (posans > 1) {
                digitr = posans / 2;
                posans = posans % 2;
            } else {
                digitr = 0;
            }
            sb.append("" + posans);
            pos += 1;
        }
        if (digitr == 1) {
            sb.append("" + digitr);
        }
        sb.reverse();
        return sb.toString();
    }
}
