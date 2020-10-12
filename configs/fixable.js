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

// https://eslint.vuejs.org/rules/component-name-in-template-casing.html
fixableRules['vue/component-name-in-template-casing'] = ['warn', 'kebab-case'];

// This is annoying, and useless
delete fixableRules['vue/static-class-names-order'];

// disable for now, not fixable
delete fixableRules['vue/no-deprecated-slot-attribute'];

// useless
delete fixableRules['vue/component-definition-name-casing'];

module.exports = {
  rules: fixableRules,
};
