const fabric = require('@umijs/fabric')
module.exports = {
  ...fabric.prettier,
  semi: false, // 默认 true
  printWidth: 80, // 行宽 默认 80
  tabWidth: 2, // 缩进字节数
  // useTab: false, // 不使用tab缩进，使用空格 默认 false
  singleQuote: true, // 字符串使用单引号 默认为 false
  arrowParens: 'avoid', // 箭头函数只有一个参数时，是否给括号 js：avoid ts : always
  jsxBracketSameLine: false, // jsx 的 > 标签是否在同一行
  jsxSingleQuote: true, // 在 jsx 中使用单引号
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
