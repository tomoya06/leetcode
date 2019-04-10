'''
N皇后问题
在NxN的棋盘上，任意两个棋子都要满足不在同一行/同一列/同一45度斜线
回溯法，多用循环+递归解决
实际上是穷举法，在每个循环里都要做条件判断，当前整个循环都不满足的时候，外层循环就切到下一步了
'''
class Solution:   
    def isLegit(self, k: int) -> int:
        a = self.pos
        if k == 1:
            return True
        for i in range(k-1):
            for j in range(i+1, k):
                if abs(i-j) == abs(a[i]-a[j]) or a[i] == a[j]:
                    return False
        return True
        
    def solveNQueens(self, n: int) -> List[List[str]]:
        self.nnn = n
        self.pos = [-1] * n
        self.solutions = []
        self.queens(0)
        return self.solutions
    
    def addSolution(self):
        cur = []
        for i in range(self.nnn):
            line = '.' * self.pos[i] + 'Q' + '.' * (self.nnn-1-self.pos[i])
            cur.append(line)
        self.solutions.append(cur)
        
    def queens(self, k: int):
        if k >= self.nnn:
            self.addSolution()
        else:
            for i in range(self.nnn):
                self.pos[k] = i
                if self.isLegit(k+1):
                    self.queens(k+1)