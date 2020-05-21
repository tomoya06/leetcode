#
# @lc app=leetcode.cn id=54 lang=python3
#
# [54] 螺旋矩阵
#
# https://leetcode-cn.com/problems/spiral-matrix/description/
#
# algorithms
# Medium (36.89%)
# Likes:    209
# Dislikes: 0
# Total Accepted:    24.4K
# Total Submissions: 65.7K
# Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
#
# 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
#
# 示例 1:
#
# 输入:
# [
# ⁠[ 1, 2, 3 ],
# ⁠[ 4, 5, 6 ],
# ⁠[ 7, 8, 9 ]
# ]
# 输出: [1,2,3,6,9,8,7,4,5]
#
#
# 示例 2:
#
# 输入:
# [
# ⁠ [1, 2, 3, 4],
# ⁠ [5, 6, 7, 8],
# ⁠ [9,10,11,12]
# ]
# 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
#
#
#

# @lc code=start


class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if len(matrix) == 0:
            return []

        dirs = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        dir_idx = 0
        curx, cury = 0, 0
        ll, tt, rr, bb  = 0, 1, len(matrix[0]) - 1, len(matrix) - 1

        ans = []

        total_length = len(matrix) * len(matrix[0])

        while len(ans) < total_length:
            ans.append(matrix[cury][curx])

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
        
        return ans




# @lc code=end
