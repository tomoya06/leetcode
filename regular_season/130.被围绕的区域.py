#
# @lc app=leetcode.cn id=130 lang=python3
#
# [130] 被围绕的区域
#

# @lc code=start
class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """

        if len(board) == 0 or len(board[0]) == 0:
            return
        
        W, H = len(board[0]), len(board)

        def dfs(x, y):
            if y < 0 or x < 0 or y >= H or x >= W:
                return
            if board[y][x] != 'O':
                return
            board[y][x] = 'T'
            dfs(x+1, y)
            dfs(x-1, y)
            dfs(x, y+1)
            dfs(x, y-1)
        
        for y in range(H):
            for x in range(W):
                if board[y][x] == 'O':
                    if x == 0 or y == 0 or x == W - 1 or y == H - 1:
                        dfs(x, y)

        for y in range(H):
            for x in range(W):
                if board[y][x] == 'O':
                    board[y][x] = 'X'
                elif board[y][x] == 'T':
                    board[y][x] = 'O'

# @lc code=end

