/**
  给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

  不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

  只需要返回长度，所以只要用不重复的数据往前覆盖重复数据即可

  一开始是每找到一排重复数据就把后面的序列都往前覆盖，效率很低

  标准答案是用双指针，j快i慢，当j i两个数不相等时把i+1，j的数覆盖到i的数，j从左往右扫描
 */
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) { return 0; }
        int i = 0;
        for (int j = 1; j<nums.length; j++) {
            if (nums[j] != nums[i]) {
                nums[++i] = nums[j];
            }
        }
        return ++i;
    }
}