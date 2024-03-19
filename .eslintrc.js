module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
    ecmaVersion: 'latest',
  },
  plugins: [
    '@typescript-eslint',
    'node',
    'security',
    '@getify/proper-ternary',
  ],
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:security/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@getify/proper-ternary/getify-says',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    'shared-node-browser': true,
    es6: true,
  },
  rules: {
    'arrow-parens': [
      'error',
      'as-needed',
      {
        requireForBlockBody: true,
      },
    ],
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'no-console': 'off',
    'no-shadow': [
      'error',
      {
        hoist: 'never',
      },
    ],
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'no-new': 'off',
    'newline-per-chained-call': 'off',
    'no-lonely-if': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'object-curly-newline': [
      'error',
      {
        multiline: true,
        consistent: true,
      },
    ],
    'no-underscore-dangle': 'off',
    'object-curly-spacing': [
      'error',
      'never',
    ],
    'object-shorthand': [
      'error',
      'consistent',
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
  },
};
