/*
 * @lc app=leetcode.cn id=44 lang=javascript
 *
 * [44] 通配符匹配
 *
 * https://leetcode-cn.com/problems/wildcard-matching/description/
 *
 * algorithms
 * Hard (24.55%)
 * Likes:    205
 * Dislikes: 0
 * Total Accepted:    11.9K
 * Total Submissions: 47.5K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
 * 
 * '?' 可以匹配任何单个字符。
 * '*' 可以匹配任意字符串（包括空字符串）。
 * 
 * 
 * 两个字符串完全匹配才算匹配成功。
 * 
 * 说明:
 * 
 * 
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 ? 和 *。
 * 
 * 
 * 示例 1:
 * 
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 * 
 * 示例 2:
 * 
 * 输入:
 * s = "aa"
 * p = "*"
 * 输出: true
 * 解释: '*' 可以匹配任意字符串。
 * 
 * 
 * 示例 3:
 * 
 * 输入:
 * s = "cb"
 * p = "?a"
 * 输出: false
 * 解释: '?' 可以匹配 'c', 但第二个 'a' 无法匹配 'b'。
 * 
 * 
 * 示例 4:
 * 
 * 输入:
 * s = "adceb"
 * p = "*a*b"
 * 输出: true
 * 解释: 第一个 '*' 可以匹配空字符串, 第二个 '*' 可以匹配字符串 "dce".
 * 
 * 
 * 示例 5:
 * 
 * 输入:
 * s = "acdcb"
 * p = "a*c?b"
 * 输入: false
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // matric[p][s]
  // const matrix = '0'.repeat(p.length + 1).split('')
  //   .map(() => '0'.repeat(s.length + 1).split('').map(() => false));
  let prev = '0'.repeat(s.length + 1).split('').map(() => false);
  let curr = '0'.repeat(s.length + 1).split('').map(() => false);
  
  curr[0] = true;
  for (let i = 1; i <= s.length; i += 1) {
    // 0 word from p to match [i] word from s, always false
    curr[i] = false;
  }
  for (let i = 1; i <= p.length; i += 1) {
    // [i] word from p to match [j] word from s
    [prev, curr] = [curr, prev];
    if (p[i-1] === '*') {
      curr[0] = prev[0];
      for (let j = 1; j <= s.length; j += 1) {
        curr[j] = prev[j] || curr[j-1];
      }
    } else if (p[i-1] === '?') {
      curr[0] = false;
      for (let j = 1; j <= s.length; j += 1) {
        curr[j] = prev[j-1];
      }
    } else {
      curr[0] = false;
      for (let j = 1; j <= s.length; j += 1) {
        curr[j] = prev[j-1] && p[i-1] === s[j-1];
      }
    }
  }
  return curr[s.length];
};
// @lc code=end
