const os = require('os');

module.exports = {
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  ignorePatterns: ['node_modules/', 'build/'],
  parser: '@babel/eslint-parser',
  plugins: ['react'],
  rules: {
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/no-static-element-interactions': 0,
    'linebreak-style': ['error', os.EOL === '\r\n' ? 'windows' : 'unix'],
    'no-underscore-dangle': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/jsx-no-useless-fragment': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': [
      1,
      {
        assignment: true,
        declaration: true,
        return: true,
      },
    ],
  },
};
