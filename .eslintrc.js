module.exports = {
  root: true,
  extends: ['airbnb', 'prettier', 'prettier/react'],
  parser: 'babel-eslint',
  rules: {
    'import/prefer-default-export': 0,
    'class-methods-use-this': 0,
    'no-console': 0,
    'no-plusplus': 'off',
    'no-param-reassign': 0,
    'global-require': 0,
    'react/prop-types': 0,
    'react/jsx-props-no-spreading': 0,
    'no-unused-expressions': 0,
    'import/extensions': 0,
    'no-use-before-define': ['error', { variables: false }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-cycle': [0, { maxDepth: 1 }],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        jsxBracketSameLine: true,
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
      },
    ],
  },
  env: {
    jest: true,
  },
  plugins: ['prettier'],
};
