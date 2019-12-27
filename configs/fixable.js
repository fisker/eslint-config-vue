// fixable
// https://vuejs.github.io/eslint-plugin-vue/rules/
// [...$$('td')].filter(({textContent}) => textContent.includes('🔧')).map(el => el.parentNode.firstChild.textContent.trim().replace(/^vue\//, ''))

const ruleIDs = [
  'no-shared-component-data',
  'require-prop-type-constructor',
  'attribute-hyphenation',
  'html-closing-bracket-newline',
  'html-closing-bracket-spacing',
  'html-end-tags',
  'html-indent',
  'html-quotes',
  'html-self-closing',
  'max-attributes-per-line',
  'multiline-html-element-content-newline',
  'mustache-interpolation-spacing',
  'name-property-casing',
  'no-deprecated-slot-attribute',
  'no-deprecated-slot-scope-attribute',
  'no-multi-spaces',
  'no-spaces-around-equal-signs-in-attribute',
  'prop-name-casing',
  'singleline-html-element-content-newline',
  'static-class-names-order',
  'v-bind-style',
  'v-on-style',
  'attributes-order',
  'order-in-components',
  'component-name-in-template-casing',
  'component-definition-name-casing',
  'script-indent',
];

const rules = Object.fromEntries
  ? Object.fromEntries(ruleIDs.map(ruleId => [`vue/${ruleId}`, 'warn']))
  : ruleIDs.reduce((rules, ruleId) => {
      rules[`vue/${ruleId}`] = 'warn';
      return rules;
    }, {});

module.exports = {
  rules: {
    ...rules,

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
