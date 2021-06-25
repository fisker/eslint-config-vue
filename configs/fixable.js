// Fixable rules

'use strict';

const {rules: allRules} = require('eslint-plugin-vue');

const disabledRules = new Set([
  // This is annoying, and useless
  'static-class-names-order',

  // Disable for now, not fixable
  'no-deprecated-slot-attribute',

  // Useless
  'component-definition-name-casing',

  // Useless
  'no-boolean-default',

  // It's not safe for case bellow:
  // ```vue
  // <template>
  //   <div @click="methodRequiresNoArgumentsOrOneArgument()" @event2="methodRequiresNoArgumentsOrOneArgument(1)"></div>
  // </template>
  // <script>
  // export default {
  //   methods: {
  //     methodRequiresNoArgumentsOrOneArgument(paramter) {
  //       if (paramter) {
  //         foo()
  //       } else {
  //         bar()
  //       }
  //     }
  //   }
  // }
  // </script>
  // ```
  'v-on-function-call',

  // Auto-fixed code is invalid in `vue@2`
  // `<el-dialog :visible.sync="foo"></el-dialog>` -> `<el-dialog v-model:visible="foo"></el-dialog>`
  'no-deprecated-v-bind-sync',

  // HTML inside comment is not correctly indented
  'html-comment-content-newline',
  'html-comment-indent',

  // This is annoying
  'new-line-between-multi-line-property',

  'no-deprecated-destroyed-lifecycle',
]);

const rules = {};
for (const [
  ruleId,
  {
    meta: {fixable},
  },
] of Object.entries(allRules)) {
  if (fixable) {
    rules[`vue/${ruleId}`] = disabledRules.has(ruleId) ? 'off' : 'warn';
  }
}

// https://eslint.vuejs.org/rules/component-name-in-template-casing.html
rules['vue/component-name-in-template-casing'] = ['warn', 'kebab-case'];

// Prefer `v-for="… of …"`
rules['vue/v-for-delimiter-style'] = ['warn', 'of'];

module.exports = {rules};
