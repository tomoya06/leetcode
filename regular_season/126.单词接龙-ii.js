/*
 * @lc app=leetcode.cn id=126 lang=javascript
 *
 * [126] 单词接龙 II
 *
 * https://leetcode-cn.com/problems/word-ladder-ii/description/
 *
 * algorithms
 * Hard (27.23%)
 * Likes:    72
 * Dislikes: 0
 * Total Accepted:    3.1K
 * Total Submissions: 11K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典 wordList，找出所有从 beginWord 到 endWord
 * 的最短转换序列。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回一个空列表。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出:
 * [
 * ⁠ ["hit","hot","dot","dog","cog"],
 * ["hit","hot","lot","log","cog"]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: []
 * 
 * 解释: endWord "cog" 不在字典中，所以不存在符合要求的转换序列。
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  let result = [];
  let minlength = -1;

  findSubLadder(beginWord, [beginWord]);

  return result;

  /**
   * @param {string} beginWord 
   * @param {string} targetWord 
   * @return {char[]}
   */
  function diff(beginWord, targetWord) {
    const list = [];
    for (let i = 0; i < beginWord.length; i += 1) {
      if (beginWord[i] !== targetWord[i]) list.push(targetWord[i]);
    }
    return list.length;
  }

  /**
   * @param {string} curBeginWord 
   * @param {string[]} curLadder
   */
  function findSubLadder(curBeginWord, curLadder) {
    if (curBeginWord === endWord) {
      if (minlength === -1) {
        result.push(curLadder);
        minlength = curLadder.length;
      } else if (curLadder.length <  minlength) {
        result = [];
        result.push(curLadder);
        minlength = curLadder.length;
      } else if (curLadder.length === minlength) {
        result.push(curLadder);
      }
      return;
    }
    for (let li = 0; li < wordList.length; li += 1) {
      const curdiff = diff(curBeginWord, wordList[li]);
      if (curdiff === 1 && !curLadder.includes(wordList[li])) {
        findSubLadder(wordList[li], [...curLadder, wordList[li]]);
      }
    }
    return;
  }
};
// @lc code=end

