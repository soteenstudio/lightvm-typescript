import js from '@eslint/js';

export default [
  js.configs.recommended,
  {
    files: ['src/**/*.{js,mjs,cjs,ts}'],
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-undef': 'off',
    },
  },
];
