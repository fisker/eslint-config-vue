/**
 * dev notice:
 * don't use @vue/eslint-config-prettier
 * eslint:recommended extend in this config breaks airbnb
 * check this https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/eslint-config-prettier/index.js
 */

module.exports = {
  root: true,
  plugins: ['vue'],
  extends: [
    require.resolve('./configs/fixable.js'),
    require.resolve('@xwtec/eslint-config'),
    require.resolve('eslint-config-prettier/vue'),
    'plugin:vue/essential',
  ],
  rules: {
    // allow unused vars
    'vue/no-unused-vars': 'off',

    // allow unused components
    'vue/no-unused-components': 'off',

    'vue/no-use-v-if-with-v-for': 'off',

    'vue/require-component-is': 'warn',

    'vue/require-render-return': 'warn',

    'vue/require-v-for-key': 'off',

    'vue/require-valid-default-prop': 'warn',

    'vue/return-in-computed-property': 'warn',

    'vue/use-v-on-exact': 'off',

    'vue/valid-template-root': 'warn',
  },
};
