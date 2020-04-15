/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (40.05%)
 * Likes:    204
 * Dislikes: 0
 * Total Accepted:    27.4K
 * Total Submissions: 67.5K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 *
 * 示例 1:
 *
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 *
 * 示例 2:
 *
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 *
 * 说明：
 *
 *
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 *
 *
 */
// @lc code=start

// let num1 = "123", num2 = "234";
// multiply(num1, num2);

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  let totalResult = "0";
  for (let i = num2.length - 1; i >= 0; i -= 1) {
    let curResult = _multiplyByOneDigit(num1, num2[i]);
    let prefix = "0".repeat(num2.length - 1 - i);
    curResult = curResult + prefix;
    totalResult = add(totalResult, curResult);
  }
  return _removeZeros(totalResult);
};

/**
 * @param {string} num1
 * @param {string} num2 only one digit
 * @return {string}
 */
function _multiplyByOneDigit(num1, num2) {
  let resultNum = "";
  let advanced = 0;
  let num2Int = parseInt(num2);
  for (let i = num1.length - 1; i >= 0; i -= 1) {
    let curCalc = parseInt(num1[i]) * num2Int + advanced;
    let curResult = curCalc % 10;
    advanced = Math.floor(curCalc / 10);
    resultNum = curResult + resultNum;
  }
  if (advanced > 0) {
    resultNum = advanced + resultNum;
  }
  return resultNum;
}

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function add(num1, num2) {
  if (num1.length < num2.length) {
    [num1, num2] = [num2, num1];
  }
  num2 ="0".repeat(num1.length - num2.length) + num2;
  let advanced = 0;
  let resultNum = "";
  for (let i = num1.length - 1; i >= 0; i -= 1) {
    let curCalc = parseInt(num1[i]) + parseInt(num2[i]) + advanced;
    let curResult = curCalc % 10;
    advanced = Math.floor(curCalc / 10);
    resultNum = curResult + resultNum;
  }
  if (advanced > 0) {
    resultNum  = advanced + resultNum;
  }
  return resultNum;
}

/**
 * @param {string} num1
 * @return {string}
 */
function _removeZeros(num1) {
  num1 = num1.replace(/^0+/, '');
  if (num1 === '') {
    num1 = '0';
  }
  return num1;
}
// @lc code=end
