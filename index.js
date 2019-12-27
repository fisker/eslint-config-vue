/**
 * dev notice:
 * don't use @vue/eslint-config-prettier
 * eslint:recommended extend in this config breaks airbnb
 * check this https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/eslint-config-prettier/index.js
 */

const base = require('@xwtec/eslint-config');

module.exports = {
  root: true,
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: {
    ...base.parserOptions,
    parser: 'babel-eslint',
  },
  plugins: ['vue'],
  extends: [
    require.resolve('@xwtec/eslint-config'),
    'plugin:vue/essential',
    require.resolve('./configs/fixable.js'),
    require.resolve('eslint-config-prettier/vue'),
  ],
  rules: {
    // disallow unused vars
    'vue/no-unused-vars': 'warn',

    // allow unused components
    'vue/no-unused-components': 'off',

    'vue/no-use-v-if-with-v-for': 'off',

    // disable this
    // set to `warn` when re-enable this rule
    // https://github.com/vuejs/eslint-plugin-vue/issues/869
    'vue/require-component-is': 'off',

    'vue/require-render-return': 'warn',

    'vue/require-v-for-key': 'off',

    'vue/require-valid-default-prop': 'warn',

    'vue/return-in-computed-property': 'warn',

    'vue/use-v-on-exact': 'off',

    'vue/valid-template-root': 'warn',

    'vue/this-in-template': ['error', 'never'],

    'vue/no-reserved-component-names': 'warn',

    'vue/valid-v-bind-sync': 'warn',
  },
};
