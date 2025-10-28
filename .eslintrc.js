module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  extends: ['eslint:recommended'],
  ignorePatterns: [
    "app/assets/javascript/*.min.js",
    "node_modules/",
    "dist/",
    "build/"
  ],
  rules: {
    'no-unused-vars': 'warn',
    'no-console': 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single']
  },
  overrides: [
    {
      files: ["tests/**/*.test.js", "tests/**/*.spec.js"],
      env: {
        jest: true,
        node: true
      },
      rules: {
        'no-unused-vars': 'warn',
      }
    }
  ]
};
