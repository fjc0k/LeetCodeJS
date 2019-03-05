/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (31.71%)
 * Total Accepted:    86.6K
 * Total Submissions: 273.2K
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const MIN_NUMBER = Math.pow(-2, 31)
  const MAX_NUMBER = Math.pow(2, 31) - 1
  let rev = 0
  while (x !== 0) {
    // 弹出末位
    const pop = x % 10
    x = parseInt(x / 10)
    if (
      rev > MAX_NUMBER / 10
        || (
          rev === MAX_NUMBER / 10
            && pop > MAX_NUMBER % 10
        )
    ) return 0
    if (
      rev < MIN_NUMBER / 10
        || (
          rev === MIN_NUMBER / 10
            && pop < MIN_NUMBER % 10
        )
    ) return 0
    // 推入首位
    rev = rev * 10 + pop
  }
  return rev
}
