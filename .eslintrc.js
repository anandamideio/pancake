module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
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
    'class-methods-use-this': 'off',
    'one-var-declaration-per-line': 'off',
    'consistent-return': 'off',
    'func-names': 'off',
    'max-len': 'off',
    'no-unused-expressions': 'off',
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
    'prefer-destructuring': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'prefer-rest-params': 'off',
    'no-undef': 'off',
    'lines-between-class-members': 'off',
    camelcase: 'off',
    'import/no-named-as-default': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'security/detect-object-injection': 'off'
  },
};
