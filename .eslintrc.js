module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    "react",
  ],
  rules: {
    'no-console': 0,
    "no-unused-vars": 0,
    "react/no-array-index-key": 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
    'react/no-access-state-in-setstate': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
  },
};
