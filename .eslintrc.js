module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'linebreak-style': 0,
     // enforce semi-colons
     'semi': [2, 'always'],
     // 4-space indention
     'indent': ['error', 4]
  },
};
