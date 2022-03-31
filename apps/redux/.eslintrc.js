module.exports = {
  ...require('eslint-config'),
  rules: {
    ...require('eslint-config').rules,
    'no-param-reassign': ['error', { props: false }],
  },
};
