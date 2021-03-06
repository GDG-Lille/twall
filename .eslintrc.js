module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-return-assign': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'warn',
    'class-methods-use-this': 'warn',
    'no-underscore-dangle': 'warn',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
