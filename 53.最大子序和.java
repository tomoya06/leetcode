/*
 * @lc app=leetcode.cn id=53 lang=java
 *
 * [53] 最大子序和
 */
class Solution {
    public int maxSubArray(int[] nums) {
        if (nums.length == 0) return 0;
        if (nums.length == 1) return nums[0];
        int curMaxSolution = nums[0];
        int maxSolution = curMaxSolution;
        for (int i = 1; i < nums.length; i++) {
            curMaxSolution = curMaxSolution <= 0 ? nums[i] : curMaxSolution + nums[i];
            maxSolution = Math.max(curMaxSolution, maxSolution);
        }
        return maxSolution;
    }
}

