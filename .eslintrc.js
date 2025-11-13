module.exports = {
  env: {
    browser: true,  // for front-end JS
    node: true,     // for Node.js scripts
    es2021: true    // modern JavaScript features
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  extends: ['eslint:recommended'],
  ignorePatterns: [
    'app/assets/javascript/*.min.js', // ignore minified libraries
    'node_modules/',
    'dist/',
    'build/'
  ],
  rules: {
    'no-unused-vars': 'warn',     // warn on unused variables
    'no-console': 'off',          // allow console.log
    'semi': ['error', 'always'],  // enforce semicolons
    'quotes': ['error', 'single'] // enforce single quotes
  },
  overrides: [
    {
      files: ['tests/**/*.test.js', 'tests/**/*.spec.js'],
      env: {
        jest: true,  // allow Jest globals like test() and expect()
        node: true
      },
      rules: {
        'no-unused-vars': 'warn' // allow unused vars in tests
      }
    }
  ]
};
