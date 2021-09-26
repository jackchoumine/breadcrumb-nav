/*
 * @Des         : 常用工具函数
 * @Date        : 2021-08-26 18:27:46 +0800
 * @Author      : JackChou
 * @LastEditors : JackChou
 * @LastEditTime: 2021-09-03 03:45:44 +0800
 */
/**
 * 生成随机随机字符串
 * @param length - 默认12
 * @return 字符串
 * @Author: JackChou
 */
export function generateRandomStr(length: number = 12) {
  let str = ''
  // eslint-disable-next-line no-constant-condition
  while (true) {
    if (str.length >= length) return str.substr(0, length)
    str += (+new Date()).toString(36).substr(2)
  }
}
// https://blog.csdn.net/u014357799/article/details/95872274
/**
 * 生成随机字符串
 * @param length 默认12
 * @return 字符串
 * @Author: JackChou
 */
export function randomStr(length: number = 12) {
  // Declare all characters
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  // Pick characters randomly
  let str = ''
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < length; i++) {
    str += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return str
}
