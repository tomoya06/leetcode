/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 *
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/description/
 *
 * algorithms
 * Medium (45.41%)
 * Likes:    67
 * Dislikes: 0
 * Total Accepted:    15.6K
 * Total Submissions: 33.6K
 * Testcase Example:  '["2","1","+","3","*"]'
 *
 * 根据逆波兰表示法，求表达式的值。
 * 
 * 有效的运算符包括 +, -, *, / 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。
 * 
 * 说明：
 * 
 * 
 * 整数除法只保留整数部分。
 * 给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。
 * 
 * 
 * 示例 1：
 * 
 * 输入: ["2", "1", "+", "3", "*"]
 * 输出: 9
 * 解释: ((2 + 1) * 3) = 9
 * 
 * 
 * 示例 2：
 * 
 * 输入: ["4", "13", "5", "/", "+"]
 * 输出: 6
 * 解释: (4 + (13 / 5)) = 6
 * 
 * 
 * 示例 3：
 * 
 * 输入: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
 * 输出: 22
 * 解释: 
 * ⁠ ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
 * = ((10 * (6 / (12 * -11))) + 17) + 5
 * = ((10 * (6 / -132)) + 17) + 5
 * = ((10 * 0) + 17) + 5
 * = (0 + 17) + 5
 * = 17 + 5
 * = 22
 * 
 */
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = [];

  for (let i = 0; i < tokens.length; i += 1) {
    const curToken = tokens[i];
    if (/^[+\-\*\/]$/.test(curToken)) {
      const b = stack.pop();
      const a = stack.pop();
      switch (curToken) {
        case '+': stack.push(a + b); break;
        case '-': stack.push(a - b); break;
        case '*': stack.push(a * b); break;
        case '/': stack.push(a / b | 0); break;
        default: break;
      }
    } else {
      stack.push(parseInt(curToken, 10));
    }
  }
  
  return stack.pop();
};

const evalRPN1 = function ( tokens ) {
  const stack = [];
  
  // If the token is an operator, the operands will be
  // the last two items on the stack.
  // Evaluate the expression then add the value back on to the stack,
  // as it will be the operand for the next expression.
  // Otherwise, its an operand (digit). Cast to number and add to stack.
  tokens.forEach(( token ) => {
    if ( /^[+\-*/]$/.test( token ) ) {
      const [y, x] = [stack.pop(), stack.pop()];
      stack.push( evaluate( x, y, token ) );
    } else {
      stack.push( +token );  // Number(token)
    }
  });
 
  // The last evaluated expression is the answer
  return stack.pop();
};

const evaluate = ( x, y, op ) => {
  switch ( op ) {
    case '+': return x + y;
    case '-': return x - y;
    case '*': return x * y;
    case '/': return x / y | 0;  // Math.floor()
  }
};