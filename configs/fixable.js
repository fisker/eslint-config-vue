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
  'no-multi-spaces',
  'no-spaces-around-equal-signs-in-attribute',
  'prop-name-casing',
  'singleline-html-element-content-newline',
  'v-bind-style',
  'v-on-style',
  'attributes-order',
  'order-in-components',
  'component-name-in-template-casing',
  'script-indent',
];

const rules = Object.fromEntries
  ? Object.fromEntries(ruleIDs.map(rule => [rule, 'warn']))
  : ruleIDs.reduce((rules, id) => {
      rules[`vue/${id}`] = 'warn';
      return rules;
    }, {});

module.exports = {
  rules,
};
