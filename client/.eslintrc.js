module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js'],
      },
    ],
    'import/prefer-default-export': 0,
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-case-declarations': 0,
    'react/jsx-props-no-spreading': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
  },
};
