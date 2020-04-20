/*
 * @lc app=leetcode.cn id=35 lang=java
 *
 * [35] 搜索插入位置
 */
class Solution {
    int[] nums;
    int target;

    public int biSearch() {
        int left = 0, right = this.nums.length, mid;
        while (left < right) {
            mid = (left + right) >> 1;
            if (this.nums[mid] == this.target) {
                return mid;
            }
            if (this.nums[mid] < this.target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }

    public int searchInsert(int[] nums, int target) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return (nums[0] >= target) ? 0 : 1;
        this.nums = nums;
        this.target = target;
        int found = this.biSearch();
        return found;
    }
}

