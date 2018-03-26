module.exports = {
  env: {
    es6: true,
    mocha: true,
    'jest/globals': true,
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['jest', 'flowtype'],
  globals: {
    localStorage: true,
  },
}
