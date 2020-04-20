class Solution:
    def findNumberIn2DArray(self, matrix: List[List[int]], target: int) -> bool:
        try:
            i = len(matrix) - 1
            j = 0
            while True:
                if matrix[i][j] == target:
                    return True
                if matrix[i][j] < target:
                    j += 1
                else:
                    i -= 1 
        except Exception as e:
            return False