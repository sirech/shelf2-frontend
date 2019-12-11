module.exports = {
  env: {
    es6: true,
    mocha: true,
    'jest/globals': true,
  },
  extends: [
    'standard',
    'standard-react',
    'plugin:css-modules/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
  ],
  plugins: ['css-modules', 'jest', 'flowtype'],
  globals: {
    localStorage: true,
  },
}
