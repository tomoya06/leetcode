/**
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 
 */
class Dp {
  int[] arr;
  
  public Dp(int len) {
      this.arr = new int[len];
  }
  
  public int get(int i) {
      return (i < 0 || i >= arr.length) ? 0 : arr[i];
  }
  
  public void set(int i, int val) {
      this.arr[i] = val;
  }
  
  public int getMax() {
      int tmp = arr[0];
      for (int i=1; i<arr.length; i++) {
          if (tmp < arr[i]) tmp = arr[i];
      }
      return tmp;
  }
}

class Solution {
  Dp dp;
  
  public int longestValidParentheses(String s) {
      int len = s.length();
      if (len == 0) return 0;
      
      dp = new Dp(len);        
      for (int i=0; i<len; i++) {
          if (s.charAt(i) == '(') {
              dp.set(i, 0);
          } else {
              if (i == 0) {
                  dp.set(i, 0);
              } else if (s.charAt(i-1) == '(') {
                  int cur = dp.get(i-2) + 2;
                  dp.set(i, cur);
              } else {
                  int lastidx = i - 1 - dp.get(i-1);
                  if (lastidx >= 0 && s.charAt(lastidx) == '(') {
                      int cur = dp.get(i-1) + 2 + dp.get(lastidx - 1);
                      dp.set(i, cur);
                  }
              }
          }
      }
      return dp.getMax();
  }
  
  
}