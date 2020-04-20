/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 *
 * https://leetcode-cn.com/problems/sudoku-solver/description/
 *
 * algorithms
 * Hard (55.91%)
 * Likes:    242
 * Dislikes: 0
 * Total Accepted:    11.5K
 * Total Submissions: 20.2K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * 编写一个程序，通过已填充的空格来解决数独问题。
 * 
 * 一个数独的解法需遵循如下规则：
 * 
 * 
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 
 * 空白格用 '.' 表示。
 * 
 * 
 * 
 * 一个数独。
 * 
 * 
 * 
 * 答案被标成红色。
 * 
 * Note:
 * 
 * 
 * 给定的数独序列只包含数字 1-9 和字符 '.' 。
 * 你可以假设给定的数独只有唯一解。
 * 给定数独永远是 9x9 形式的。
 * 
 * 
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  solver();
  
  function solver() {
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 9; j += 1) {
        if (board[i][j] !== '.') continue;
        for (let t = 1; t <= 9; t += 1) {
          if (isBoardValid(i, j, t)) {
            board[i][j] = `${t}`;
            if (solver()) {
              return true;
            } else {
              board[i][j] = '.';
            }
          }
        }
        return false;
      }
    }
    return true;
  }

  /**
   * @param {number} x 
   * @param {number} y 
   * @param {number} prompt
   */
  function isBoardValid(x, y, prompt) {
    for (let i = 0; i < 9; i += 1) {
      if (+board[i][y] === prompt) {
        return false;
      }
      if (+board[x][i] === prompt) {
        return false;
      }
    }
    const row = ~~(x / 3) * 3;
    const col = ~~(y / 3) * 3;
    for (let i = 0; i < 3; i += 1) {
      for (let j = 0; j < 3; j += 1) {
        if (+board[row + i][col + j] === prompt) {
          return false;
        }
      }
    }
    return true;
  }
};
// @lc code=end

