/*
 * @lc app=leetcode.cn id=127 lang=javascript
 *
 * [127] 单词接龙
 *
 * https://leetcode-cn.com/problems/word-ladder/description/
 *
 * algorithms
 * Medium (36.49%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    15.3K
 * Total Submissions: 40.2K
 * Testcase Example:  '"hit"\n"cog"\n["hot","dot","dog","lot","log","cog"]'
 *
 * 给定两个单词（beginWord 和 endWord）和一个字典，找到从 beginWord 到 endWord
 * 的最短转换序列的长度。转换需遵循如下规则：
 * 
 * 
 * 每次转换只能改变一个字母。
 * 转换过程中的中间单词必须是字典中的单词。
 * 
 * 
 * 说明:
 * 
 * 
 * 如果不存在这样的转换序列，返回 0。
 * 所有单词具有相同的长度。
 * 所有单词只由小写字母组成。
 * 字典中不存在重复的单词。
 * 你可以假设 beginWord 和 endWord 是非空的，且二者不相同。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * beginWord = "hit",
 * endWord = "cog",
 * wordList = ["hot","dot","dog","lot","log","cog"]
 * 
 * 输出: 5
 * 
 * 解释: 一个最短转换序列是 "hit" -> "hot" -> "dot" -> "dog" -> "cog",
 * ⁠    返回它的长度 5。
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * beginWord = "hit"
 * endWord = "cog"
 * wordList = ["hot","dot","dog","lot","log"]
 * 
 * 输出: 0
 * 
 * 解释: endWord "cog" 不在字典中，所以无法进行转换。
 * 
 */

// @lc code=start
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const N = beginWord.length;

  if (!wordList.includes(endWord)) return 0;

  const graph = buildgraph();
  const result = bfs(graph);
  return result;

  /**
   * 
   * @param {string} word1 
   * @param {string} word2 
   * @return {number}
   */
  function calcDelta(word1, word2) {
    let delta = 0;
    for (let i = 0; i < N; i += 1) {
      delta += word1[i] !== word2[i];
    }
    return delta;
  }

  /**
   * @return {Map<string, string[]>}
   */
  function buildgraph() {
    const graph = new Map();
    wordList.forEach(word => {
      const leaves = wordList.filter(anoWord => calcDelta(word, anoWord) === 1);
      graph.set(word, leaves);
    })
    graph.set(beginWord, wordList.filter(anoWord => calcDelta(beginWord, anoWord) === 1));
    return graph;
  }

  /**
   * 
   * @param {Map<string, string[]>} graph 
   * @return {number}
   */
  function bfs(graph) {
    const unvisitedWord = new Set(wordList.slice(0));
    let queue = [beginWord];
    let minLength = 1;

    while (true) {
      if (queue.includes(endWord)) {
        break;
      }
      if (unvisitedWord.size === 0 || queue.length === 0) {
        minLength = 0;
        break;
      }
      const newQueue = [];
      queue.forEach(node => unvisitedWord.delete(node));
      queue.forEach(lastNodeInRoute => {
        const nextNodes = graph.get(lastNodeInRoute);
        nextNodes.forEach(node => {
          if (unvisitedWord.has(node)) {
            newQueue.push(node);
          }
        })
      });
      queue = newQueue;
      minLength += 1;
    }

    return minLength;
  }
};
// @lc code=end

