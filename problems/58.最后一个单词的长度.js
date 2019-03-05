/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (28.79%)
 * Total Accepted:    18.1K
 * Total Submissions: 63K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 *
 * 如果不存在最后一个单词，请返回 0 。
 *
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 *
 * 示例:
 *
 * 输入: "Hello World"
 * 输出: 5
 *
 *
 */
/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let lastCharIndex = s.length - 1
  // 跳过末尾空格
  while (s.charAt(lastCharIndex) === ' ') {
    lastCharIndex--
  }
  let lastWord = ''
  for (let i = lastCharIndex; i >= 0; i--) {
    const char = s.charAt(i)
    if (char === ' ') break
    lastWord = char + lastWord
  }
  return lastWord.length
}
