'''
N皇后优化版
优化点在于如何判断棋子是不是在同一线上
考虑到y=x+k, y=-x+p => y-x=k, y+x=p
所以另外加两个xy_sum xy_diff的数组，只需判断当前点的x+y y-x是否在这两个数组里即可
'''
class Solution:
    def solveNQueens(self, n: int) -> List[List[str]]:
        solution = []

        def addSolution(rows: List[int]):
            solution.append(['.'*pos +'Q' + '.'*(n-1-pos) for pos in rows])

        def queens(rows: List[int], xy_sum: List[int], xy_diff: List[int]):
            k = len(rows)
            if k >= n:
                addSolution(rows)
            else:
                for p in range(n):
                    if p not in rows and p+k not in xy_sum and k-p not in xy_diff:
                        queens(rows+[p], xy_sum+[p+k], xy_diff+[k-p])

        queens([], [], [])
        return solution
