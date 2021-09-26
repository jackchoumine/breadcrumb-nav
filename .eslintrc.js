/*
 * @Des         :
 * @Date        : 2021-08-26 21:02:33 +0800
 * @Author      : JackChou
 * @LastEditors : JackChou
 * @LastEditTime: 2021-09-10 00:41:52 +0800
 */
module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  plugins: ['promise'],
  rules: {
    'prettier/prettier': 0, // 不按照 prettier 的规则格式化
    'no-console':
      process.env.NODE_ENV === 'production'
        ? 'error'
        : [2, { allow: ['warn', 'error', 'log'] }],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    'comma-dangle': 0, // [2, 'always-multiline'],
    'space-before-function-paren': 0, //[0, 'never'],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'no-void': 0,
    semi: [2, 'never'],
    yoda: [2, 'never', { exceptRange: true }], // 犹大条件 变量在前 color === 'red'
    'no-new': 2, // 禁用 new 创建对象而不赋值给变量
    // 强制在关键字前后使用一致的空格 (前后需要)
    'keyword-spacing': 2,
    // 强制一行的最大长度
    'max-len': [1, 80],
    // 使用 === 替代 == allow-null允许null和undefined==
    eqeqeq: [2, 'allow-null'],
    // 禁止将变量初始化为 undefined
    'no-undef-init': 2,
    // 禁止将 undefined 作为标识符
    // NOTE 使用 void 0 代替 undefined
    'no-undefined': 2,
    // 禁止出现未使用过的变量
    // NOTE 不要全局关闭，在文件内和当前行关闭该规则的检查: cmd + .
    'no-unused-vars': [1, { vars: 'all', args: 'none' }],
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-redeclare': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-expressions': 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    'no-var': 2,
    'prefer-const': 2,
    'spaced-comment': [2, 'always'],
    '@typescript-eslint/no-shadow': 0,
    // react
    'react-hooks/exhaustive-deps': 0,
    // promise
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'warn',
    'promise/no-promise-in-callback': 'warn',
    'promise/no-callback-in-promise': 'warn',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'warn',
    'promise/valid-params': 'warn',
    // react 组件相关
    'react/jsx-pascal-case': 2, // 大驼峰 MyComponent
    'react/self-closing-comp': 2, // 没有子元素，自动闭合标签
    'react/jsx-max-props-per-line': [2, { maximum: 4 }], // NOTE 和 prettier 冲突 解决办法，设置 prettier 的 printWidth 值小一点
    // 默认规则：react 自带属性（key、ref）、属性简写、事件处理器（on+)、【字母顺序排序】
    // https://github.com/vladimir-bezrukov/React-Eslint-Plugin/blob/main/docs/rules/jsx-sort-props.md
    'react/jsx-sort-props': [
      2,
      { reservedFirst: true, shorthandFirst: true, callbacksLast: true },
    ],
  },
}
