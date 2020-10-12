// Fixable rules

const {rules} = require('eslint-plugin-vue');

const fixableRules = {};
for (const [
  ruleId,
  {
    meta: {fixable},
  },
] of Object.entries(rules)) {
  if (fixable) {
    fixableRules[`vue/${ruleId}`] = 'warn';
  }
}

module.exports = {
  rules: {
    ...fixableRules,

    // https://eslint.vuejs.org/rules/component-name-in-template-casing.html
    'vue/component-name-in-template-casing': ['warn', 'kebab-case'],

    // This is annoying, and useless
    'vue/static-class-names-order': 'off',

    // disable for now, not fixable
    'vue/no-deprecated-slot-attribute': 'off',

    // useless
    'vue/component-definition-name-casing': 'off',
  },
};
