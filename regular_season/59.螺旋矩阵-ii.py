#
# @lc app=leetcode.cn id=59 lang=python3
#
# [59] 螺旋矩阵 II
#
# https://leetcode-cn.com/problems/spiral-matrix-ii/description/
#
# algorithms
# Medium (74.27%)
# Likes:    120
# Dislikes: 0
# Total Accepted:    16.1K
# Total Submissions: 21.5K
# Testcase Example:  '3'
#
# 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
#
# 示例:
#
# 输入: 3
# 输出:
# [
# ⁠[ 1, 2, 3 ],
# ⁠[ 8, 9, 4 ],
# ⁠[ 7, 6, 5 ]
# ]
#
#

# @lc code=start


class Solution:
    def generateMatrix(self, n: int) -> List[List[int]]:
        if n == 0:
            return []

        matrix = [[0 for _ in range(n)] for _ in range(n)]

        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        dir_idx = 0
        curx, cury = 0, 0
        ll, tt, rr, bb = 0, 1, len(matrix[0]) - 1, len(matrix) - 1

        total_length = n ** 2
        cur_idx = 1

        while cur_idx <= total_length:
            matrix[cury][curx] = cur_idx

            if curx == rr and dir_idx == 0:
                dir_idx = 1
                rr -= 1
            elif cury == bb and dir_idx == 1:
                dir_idx = 2
                bb -= 1
            elif curx == ll and dir_idx == 2:
                dir_idx = 3
                ll += 1
            elif cury == tt and dir_idx == 3:
                dir_idx = 0
                tt += 1

            curx, cury = curx + dirs[dir_idx][0], cury + dirs[dir_idx][1]
            cur_idx += 1

        return matrix

# @lc code=end
