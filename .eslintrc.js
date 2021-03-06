module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
    'cypress/globals': true,
    'jest/globals': true,
  },
  plugins: ['svelte3', 'cypress', 'jest'],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': 'off',
        'import/no-duplicates': 'off',
        'import/no-mutable-exports': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/prefer-default-export': 'off',
        'no-multiple-empty-lines': 'off',
        'no-console': 'error',
      },
    },
  ],
  rules: {
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/no-unresolved': [2, { ignore: ['^@sapper/*'] }],
  },
};
