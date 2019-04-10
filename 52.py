'''
N皇后
和51差不多，只输出解答数量
奇怪的是只用计数器来存解答数量，耗时反而更长。。。
'''
class Solution:
    def totalNQueens(self, n: int) -> int:
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
        return len(solution)
