/**
 * leetcode 4 给定两个大小为 m 和 n 的有序数组 nums1 和 nums2。
 * 请你找出这两个有序数组的中位数，并且要求算法的时间复杂度为O(log(m + n))。 你可以假设 nums1 和 nums2 不会同时为空。
 */
class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int len1 = nums1.length, len2 = nums2.length;
        if (len1 > len2) return findMedianSortedArrays(nums2, nums1);

        int lo = 0, hi = len1 * 2;
        int c1, c2, l1 = 0, l2 = 0, r1 = 0, r2 = 0;
        while (lo <= hi) {
            c1 = (lo + hi) / 2;
            c2 = len1 + len2 - c1;
            l1 = (c1 == 0) ? Integer.MIN_VALUE: nums1[(c1 - 1) / 2];
            r1 = (c1 == 2 * len1) ? Integer.MAX_VALUE: nums1[c1 / 2];
            l2 = (c2 == 0) ? Integer.MIN_VALUE: nums2[(c2 - 1) / 2];
            r2 = (c2 == 2 * len2) ? Integer.MAX_VALUE: nums2[c2 / 2];

            if (l1 > r2) {
                hi = c1 - 1;
            } else if (l2 > r1) {
                lo = c1 + 1;
            } else {
                break;
            }
        }
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
    }
}
