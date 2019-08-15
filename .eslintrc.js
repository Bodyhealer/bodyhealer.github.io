module.exports = {
  env: {
    browser: true,
    es6: true,
    "mocha": true,
  },
  plugins: ["mocha"],
  extends: [
    'airbnb-base',
    "plugin:mocha/recommended",
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    radix: ["error", "as-needed"],
    "import/extensions": ["error", "ignorePackages" , { "js": "always"}],
    strict: ["error", "global"],
  },
};
