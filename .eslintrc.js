module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  rules: {
    'max-len': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-param-reassign': 0,
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'global-require': 0,
    camelcase: 'off',
    'vuejs-accessibility/label-has-for': 'off',
    'no-control-regex': 'off',
  },
};
