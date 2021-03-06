module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  ignorePatterns: ['**/*.d.ts', 'mock/**/*', '**/*.spec.*'],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': 'webpack',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jsx-a11y', 'prettier'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'react/no-array-index-key': 'warn',
    'implicit-arrow-linebreak': 'off',
    'import/extensions': [
      1,
      {
        css: 'always',
        scss: 'always',
        jsx: 'never',
        js: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'prettier/prettier': ['error'],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-explicit-any': 'off', // Re-enable once we have data types figured out
  },
};
