/**
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。

如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。

必须原地修改，只允许使用额外常数空间。

参考维基百科的算法：

https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order

这里有个反转序列的最简单的实现
 */
class Solution {
  public void nextPermutation(int[] nums) {
      int len = nums.length;
      boolean flag = false;
      int k = 0, j = 0;
      for (int i = len - 2; i >= 0; i--) {
          if (nums[i] < nums[i+1]) {
              flag = true;
              k = i;
              break;
          }
      }
      if (!flag) {
          Arrays.sort(nums);
          return ;
      }
      for (int i = len - 1; i > k; i--) {
          if (nums[i] > nums[k]) {
              j = i;
              break;
          }
      }
      
      swap(nums, k, j);
      reverseArray(nums, k+1, len-1);
      return ;
  }
  
  private void reverseArray(int[] nums, int start, int end) {
      while (start < end) {
          swap(nums, start++, end--);
      }
  }
  
  private void swap(int[] nums, int k, int j) {
      int tmp = nums[k];
      nums[k] = nums[j];
      nums[j] = tmp;
  }
  
}