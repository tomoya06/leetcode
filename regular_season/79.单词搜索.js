/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 *
 * https://leetcode-cn.com/problems/word-search/description/
 *
 * algorithms
 * Medium (38.61%)
 * Likes:    216
 * Dislikes: 0
 * Total Accepted:    20.7K
 * Total Submissions: 53.1K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * 给定一个二维网格和一个单词，找出该单词是否存在于网格中。
 * 
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
 * 
 * 示例:
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * 给定 word = "ABCCED", 返回 true.
 * 给定 word = "SEE", 返回 true.
 * 给定 word = "ABCB", 返回 false.
 * 
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const rowLength = board[0].length;
  const boardInLine = [].concat(...board);
  const usedPositions = {};
  const foundedLocations = {};

  if (boardInLine.length === 0 && word.length !== 0) {
    return false;
  }

  return thisRouteCanWork(0);

  /**
   * @param {number} idx current word pointer position
   * @param {number} lastLocation last highlight position
   */
  function thisRouteCanWork(idx, lastLocation) {
    if (idx === word.length) {
      return true;
    }
    const targetChar = word[idx];
    let allLocations = [];
    if (foundedLocations[`${targetChar}`]) {
      allLocations = foundedLocations[`${targetChar}`];
    } else {
      for (let i = 0; i < boardInLine.length; i += 1) {
        if (boardInLine[i] === targetChar) allLocations.push(i);
      }
      foundedLocations[`${targetChar}`] = allLocations.slice(0);
    }

    // 检查路线
    if (idx === 0) {
      for (let i = 0; i < allLocations.length; i += 1) {
        if (!!usedPositions[`${allLocations[i]}`]) {
          continue;
        }
        usedPositions[`${allLocations[i]}`] = true;
        if (thisRouteCanWork(idx + 1, allLocations[i])) {
          return true;
        }
        usedPositions[`${allLocations[i]}`] = false;
      }
    } else {
      for (let i = 0; i < allLocations.length; i += 1) {
        if (!!usedPositions[`${allLocations[i]}`]) {
          continue;
        }
        if (!isNearMe(allLocations[i], lastLocation)) {
          continue;
        }
        usedPositions[`${allLocations[i]}`] = true;
        if (thisRouteCanWork(idx + 1, allLocations[i])) {
          return true;
        }
        usedPositions[`${allLocations[i]}`] = false;
      }
    }

    return false;
  }

  /**
   * @param {number} idx1 
   * @param {number} idx2 
   */
  function isNearMe(idx1, idx2) {
    const dis = Math.abs(idx1 - idx2);
    return dis === 1 && Math.floor(idx1 / rowLength) === Math.floor(idx2 / rowLength) 
      || dis === rowLength;
  }
};

const dfs = (board, i, j, remain) => {
  if (remain.length === 0) return true;
  if (i<0 || i>=board.length || j<0 || j>=board[0].length) return false;
  if (board[i][j] !== remain[0]) return false;
  
  let char = board[i][j];
  board[i][j] = '-';
  let result = (dfs(board,i+1,j,remain.substring(1))||dfs(board,i-1,j,remain.substring(1))
      || dfs(board,i,j+1,remain.substring(1)) || dfs(board,i,j-1,remain.substring(1)));
  board[i][j]=char;
  return result;
}

var exist2 = function(board, word) {
  if (board.length===0 || word.length===0) return false;
  for (let i=0; i<board.length; i++){
      for (let j=0; j<board[0].length; j++){
          if (dfs(board,i,j,word)) return true;
      }
  }
  return false;
};

