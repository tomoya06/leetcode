/**
 * 动态规划
 * 地下城，一个MxN的宫格，每个宫格有一个数字，代表人物经过该格要消耗的点数(正表示获得，负表示消耗)
 * 人物要从左上角移动到右下角，只能右移或下移，中途点数必须保持大于0
 * 求人物初始点数的最小值
 * 
 * 反过来，从右下角返回左上角，
 * 新建一个等大的宫格，每格代表人物到达该点前能拥有的最小点数
 */
class Solution {
    public int calculateMinimumHP(int[][] dungeon) {
        int m = dungeon.length, n = dungeon[0].length;
        int [][] minHP = new int[m][n];
        minHP[m - 1][n - 1] = Math.max(1, 1 - dungeon[m-1][n-1]);
        for (int i=m-2; i>=0; i--) {
            minHP[i][n-1] = Math.max(1, minHP[i+1][n-1] - dungeon[i][n-1]);
        }
        for (int i=n-2; i>=0; i--) {
            minHP[m-1][i] = Math.max(1, minHP[m-1][i+1] - dungeon[m-1][i]);
        }
        
        for (int i=m-2; i>=0; i--) {
            for (int j=n-2; j>=0; j--) {
                int leftMin = minHP[i][j+1] - dungeon[i][j];
                int upMin = minHP[i+1][j] - dungeon[i][j];
                int curMinHP = Math.min(leftMin, upMin);
                minHP[i][j] = Math.max(1, curMinHP);
            }
        }
        
        return minHP[0][0];
    }
}