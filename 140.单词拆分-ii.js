/*
 * @lc app=leetcode.cn id=140 lang=javascript
 *
 * [140] 单词拆分 II
 *
 * https://leetcode-cn.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (37.68%)
 * Likes:    74
 * Dislikes: 0
 * Total Accepted:    7.2K
 * Total Submissions: 19.3K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典
 * wordDict，在字符串中增加空格来构建一个句子，使得句子中所有的单词都在词典中。返回所有这些可能的句子。
 * 
 * 说明：
 * 
 * 
 * 分隔时可以重复使用字典中的单词。
 * 你可以假设字典中没有重复的单词。
 * 
 * 
 * 示例 1：
 * 
 * 输入:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * 输出:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * 示例 2：
 * 
 * 输入:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * 输出:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * 解释: 注意你可以重复使用字典中的单词。
 * 
 * 
 * 示例 3：
 * 
 * 输入:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * 输出:
 * []
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak_overflow_too = function(s, wordDict) {
  const results = [];
  const breakMap = [];
  const wordDictLengths = [...new Set(wordDict.map((word) => word.length))];
  for (let i = 0; i < s.length; i += 1) {
    breakMap[i] = [];
    wordDictLengths.forEach((len) => {
      if (wordDict.includes(s.slice(i, i + len))) {
        breakMap[i].push(i + len);
      }
    })
  }
  findRoutes();
  return results;

  function findRoutes(start = 0, suffix = '') {
    if (start === s.length) {
      results.push(suffix.slice(1));
    }
    if (start > s.length) return;
    breakMap[start] && breakMap[start].forEach((end) => findRoutes(end, suffix + ' ' + s.slice(start, end)));
    return;
  }
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak_stackoverflow = function (s, wordDict) {
  let results = wordBreakToArray(s);
  return results
    .filter((result) => !result.includes(null))
    .map((result) => result.map((idx) => wordDict[idx]).join(' '));

  /**
   * 
   * @param {string} s 
   * @returns {string[][]} 
   */
  function wordBreakToArray(s) {
    const result = [];
    if (s.length === 0) {
      return [result];
    }
    let flag = false;
    for (let i = 0; i < wordDict.length; i += 1) {
      if (isStartWith(s, wordDict[i])) {
        flag = true;
        const subResult = wordBreakToArray(s.slice(wordDict[i].length));
        result.push(...subResult.map((result) => [i, ...result]));
      }
    }
    if (!flag) {
      return [[null]];
    }
    return result;
  }

  /**
   * @param {string} str
   * @param {string} word 
   */
  function isStartWith(str, word) {
    return str.slice(0, word.length) === word;
  }
};

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
  var res = [];
  var from = [];
  from[0] = [0];
  for (var i = 1; i <= s.length; i++) {
    from[i] = [];
    for (var j = 0; j < i; j++) {
      if (from[j].length && wordDict.includes(s.substring(j, i))) {
        from[i].push(j);
      }
    }
  }
  build(s.length, '');
  return res;

  function build(idx, suffix) {
    if (!idx) return res.push(suffix);
    from[idx].forEach(function(from) {
      build(from, suffix === '' ? s.substring(from, idx) : s.substring(from, idx) + ' ' + suffix);
    })
  }
};

// @lc code=end

