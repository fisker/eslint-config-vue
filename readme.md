# @xwtec/eslint-config-vue

[![devDependencies](https://img.shields.io/david/dev/xwtec/eslint-config-vue.svg?style=flat-square)](https://david-dm.org/xwtec/eslint-config-vue)
[![Issues](http://img.shields.io/github/issues/xwtec/eslint-config-vue.svg?style=flat-square)](https://github.com/xwtec/eslint-config-vue/issues)
[![Issues](https://img.shields.io/github/issues-pr/xwtec/eslint-config-vue.svg?style=flat-square)](https://github.com/xwtec/eslint-config-vue/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/xwtec/eslint-config-vue.svg?style=flat-square)](https://github.com/xwtec/eslint-config-vue/commits)
[![GitHub Release Date](https://img.shields.io/github/release-date/xwtec/eslint-config-vue.svg?style=flat-square)](https://github.com/xwtec/eslint-config-vue/releases)

[![npm](https://img.shields.io/npm/v/@xwtec/eslint-config-vue.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config-vue)
[![npm](https://img.shields.io/npm/dt/@xwtec/eslint-config-vue.svg?style=flat-square)](https://www.npmjs.com/package/@xwtec/eslint-config-vue)
[![Snyk Vulnerabilities for npm package version](https://img.shields.io/snyk/vulnerabilities/npm/@xwtec/eslint-config-vue.svg?style=flat-square)](https://snyk.io/vuln/npm:@xwtec%2Feslint-config-vue)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT license](https://img.shields.io/github/license/xwtec/eslint-config-vue.svg?style=flat-square)](http://opensource.org/licenses/MIT)

> ESLint Configuration for xwtec vue projects

## Install

```sh
# with yarn
yarn add --dev eslint prettier @xwtec/eslint-config-vue

# with npm
npm install --save-dev eslint prettier @xwtec/eslint-config-vue
```

## Configuration

`.eslintrc.js` formart is recommanded

```js
module.exports = {
  extends: ['@xwtec/vue'],
};
```

## Rules

<!-- rules start -->

<!-- AUTO GENERATED CONTENT, DON'T EDIT -->

### Error

|  #  | Type  | Rule                                                                                                                     | Description                                                             |
| :-: | :---: | :----------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
|  1  | error | [vue/comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)                                           | support comment-directives in `<template>`                              |
|  2  | error | [vue/custom-event-name-casing](https://eslint.vuejs.org/rules/custom-event-name-casing.html)                             | enforce custom event names always use "kebab-case"                      |
|  3  | error | [vue/experimental-script-setup-vars](https://eslint.vuejs.org/rules/experimental-script-setup-vars.html)                 | prevent variables defined in `<script setup>` to be marked as undefined |
|  4  | error | [vue/jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)                                                   | prevent variables used in JSX to be marked as unused                    |
|  5  | error | [vue/no-arrow-functions-in-watch](https://eslint.vuejs.org/rules/no-arrow-functions-in-watch.html)                       | disallow using arrow functions to define watcher                        |
|  6  | error | [vue/no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)               | disallow asynchronous actions in computed properties                    |
|  7  | error | [vue/no-custom-modifiers-on-v-model](https://eslint.vuejs.org/rules/no-custom-modifiers-on-v-model.html)                 | disallow custom modifiers on v-model used on the component              |
|  8  | error | [vue/no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)                                                     | disallow duplication of field names                                     |
|  9  | error | [vue/no-dupe-v-else-if](https://eslint.vuejs.org/rules/no-dupe-v-else-if.html)                                           | disallow duplicate conditions in `v-if` / `v-else-if` chains            |
| 10  | error | [vue/no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)                               | disallow duplication of attributes                                      |
| 11  | error | [vue/no-multiple-template-root](https://eslint.vuejs.org/rules/no-multiple-template-root.html)                           | disallow adding multiple root nodes to the template                     |
| 12  | error | [vue/no-mutating-props](https://eslint.vuejs.org/rules/no-mutating-props.html)                                           | disallow mutation of component props                                    |
| 13  | error | [vue/no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)                                             | disallow parsing errors in `<template>`                                 |
| 14  | error | [vue/no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)                                             | disallow overwriting reserved keys                                      |
| 15  | error | [vue/no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html) | disallow side effects in computed properties                            |
| 16  | error | [vue/no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)                                               | disallow `key` attribute on `<template>`                                |
| 17  | error | [vue/no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)                                     | disallow mustaches in `<textarea>`                                      |
| 18  | error | [vue/no-v-for-template-key](https://eslint.vuejs.org/rules/no-v-for-template-key.html)                                   | disallow `key` attribute on `<template v-for>`                          |
| 19  | error | [vue/no-v-model-argument](https://eslint.vuejs.org/rules/no-v-model-argument.html)                                       | disallow adding an argument to `v-model` used in custom component       |
| 20  | error | [vue/this-in-template](https://eslint.vuejs.org/rules/this-in-template.html)                                             | disallow usage of `this` in template                                    |
| 21  | error | [vue/valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)                                                     | enforce valid `v-bind` directives                                       |
| 22  | error | [vue/valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)                                                   | enforce valid `v-cloak` directives                                      |
| 23  | error | [vue/valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)                                                     | enforce valid `v-else` directives                                       |
| 24  | error | [vue/valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)                                               | enforce valid `v-else-if` directives                                    |
| 25  | error | [vue/valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)                                                       | enforce valid `v-for` directives                                        |
| 26  | error | [vue/valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)                                                     | enforce valid `v-html` directives                                       |
| 27  | error | [vue/valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)                                                         | enforce valid `v-if` directives                                         |
| 28  | error | [vue/valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)                                                   | enforce valid `v-model` directives                                      |
| 29  | error | [vue/valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)                                                         | enforce valid `v-on` directives                                         |
| 30  | error | [vue/valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)                                                     | enforce valid `v-once` directives                                       |
| 31  | error | [vue/valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)                                                       | enforce valid `v-pre` directives                                        |
| 32  | error | [vue/valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)                                                     | enforce valid `v-show` directives                                       |
| 33  | error | [vue/valid-v-slot](https://eslint.vuejs.org/rules/valid-v-slot.html)                                                     | enforce valid `v-slot` directives                                       |
| 34  | error | [vue/valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)                                                     | enforce valid `v-text` directives                                       |

### Warn

|  #  | Type | Rule                                                                                               | Description                                                                  |
| :-: | :--: | :------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- |
|  1  | warn | [vue/no-reserved-component-names](https://eslint.vuejs.org/rules/no-reserved-component-names.html) | disallow the use of reserved names in component definitions                  |
|  2  | warn | [vue/no-unused-vars](https://eslint.vuejs.org/rules/no-unused-vars.html)                           | disallow unused variable definitions of v-for directives or scope attributes |
|  3  | warn | [vue/require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)             | enforce render function to always return value                               |
|  4  | warn | [vue/require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)   | enforce props default values to be valid                                     |
|  5  | warn | [vue/return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html) | enforce that a return statement is present in computed property              |
|  6  | warn | [vue/valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)                 | enforce valid template root                                                  |
|  7  | warn | [vue/valid-v-bind-sync](https://eslint.vuejs.org/rules/valid-v-bind-sync.html)                     | enforce valid `.sync` modifier on `v-bind` directives                        |

### Fixable

|  #  | Type | Rule                                                                                                                   | Description                                                                             |
| :-: | :--: | :--------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------- |
|  1  | warn | [vue/attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)                                 | enforce attribute naming style on custom components in template                         |
|  2  | warn | [vue/attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)                                           | enforce order of attributes                                                             |
|  3  | warn | [vue/comma-spacing](https://eslint.vuejs.org/rules/comma-spacing.html)                                                 | enforce consistent spacing before and after commas                                      |
|  4  | warn | [vue/comma-style](https://eslint.vuejs.org/rules/comma-style.html)                                                     | enforce consistent comma style                                                          |
|  5  | warn | [vue/component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html)         | enforce specific casing for the component naming style in template                      |
|  6  | warn | [vue/dot-notation](https://eslint.vuejs.org/rules/dot-notation.html)                                                   | enforce dot notation whenever possible                                                  |
|  7  | warn | [vue/eqeqeq](https://eslint.vuejs.org/rules/eqeqeq.html)                                                               | require the use of `===` and `!==`                                                      |
|  8  | warn | [vue/func-call-spacing](https://eslint.vuejs.org/rules/func-call-spacing.html)                                         | require or disallow spacing between function identifiers and their invocations          |
|  9  | warn | [vue/html-comment-content-newline](https://eslint.vuejs.org/rules/html-comment-content-newline.html)                   | enforce unified line brake in HTML comments                                             |
| 10  | warn | [vue/html-comment-content-spacing](https://eslint.vuejs.org/rules/html-comment-content-spacing.html)                   | enforce unified spacing in HTML comments                                                |
| 11  | warn | [vue/html-comment-indent](https://eslint.vuejs.org/rules/html-comment-indent.html)                                     | enforce consistent indentation in HTML comments                                         |
| 12  | warn | [vue/name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)                                   | enforce specific casing for the name property in Vue components                         |
| 13  | warn | [vue/no-boolean-default](https://eslint.vuejs.org/rules/no-boolean-default.html)                                       | disallow boolean defaults                                                               |
| 14  | warn | [vue/no-deprecated-data-object-declaration](https://eslint.vuejs.org/rules/no-deprecated-data-object-declaration.html) | disallow using deprecated object declaration on data (in Vue.js 3.0.0+)                 |
| 15  | warn | [vue/no-deprecated-dollar-scopedslots-api](https://eslint.vuejs.org/rules/no-deprecated-dollar-scopedslots-api.html)   | disallow using deprecated `$scopedSlots` (in Vue.js 3.0.0+)                             |
| 16  | warn | [vue/no-deprecated-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-scope-attribute.html)                 | disallow deprecated `scope` attribute (in Vue.js 2.5.0+)                                |
| 17  | warn | [vue/no-deprecated-slot-scope-attribute](https://eslint.vuejs.org/rules/no-deprecated-slot-scope-attribute.html)       | disallow deprecated `slot-scope` attribute (in Vue.js 2.6.0+)                           |
| 18  | warn | [vue/no-deprecated-v-bind-sync](https://eslint.vuejs.org/rules/no-deprecated-v-bind-sync.html)                         | disallow use of deprecated `.sync` modifier on `v-bind` directive (in Vue.js 3.0.0+)    |
| 19  | warn | [vue/no-deprecated-v-on-number-modifiers](https://eslint.vuejs.org/rules/no-deprecated-v-on-number-modifiers.html)     | disallow using deprecated number (keycode) modifiers (in Vue.js 3.0.0+)                 |
| 20  | warn | [vue/no-extra-parens](https://eslint.vuejs.org/rules/no-extra-parens.html)                                             | disallow unnecessary parentheses                                                        |
| 21  | warn | [vue/no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)                           | enforce component's data property to be a function                                      |
| 22  | warn | [vue/no-unsupported-features](https://eslint.vuejs.org/rules/no-unsupported-features.html)                             | disallow unsupported Vue.js syntax on the specified version                             |
| 23  | warn | [vue/no-useless-mustaches](https://eslint.vuejs.org/rules/no-useless-mustaches.html)                                   | disallow unnecessary mustache interpolations                                            |
| 24  | warn | [vue/no-useless-v-bind](https://eslint.vuejs.org/rules/no-useless-v-bind.html)                                         | disallow unnecessary `v-bind` directives                                                |
| 25  | warn | [vue/object-curly-newline](https://eslint.vuejs.org/rules/object-curly-newline.html)                                   | enforce consistent line breaks inside braces                                            |
| 26  | warn | [vue/object-property-newline](https://eslint.vuejs.org/rules/object-property-newline.html)                             | enforce placing object properties on separate lines                                     |
| 27  | warn | [vue/operator-linebreak](https://eslint.vuejs.org/rules/operator-linebreak.html)                                       | enforce consistent linebreak style for operators                                        |
| 28  | warn | [vue/order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)                                     | enforce order of properties in components                                               |
| 29  | warn | [vue/padding-line-between-blocks](https://eslint.vuejs.org/rules/padding-line-between-blocks.html)                     | require or disallow padding lines between blocks                                        |
| 30  | warn | [vue/prefer-template](https://eslint.vuejs.org/rules/prefer-template.html)                                             | require template literals instead of string concatenation                               |
| 31  | warn | [vue/require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)                 | require prop type to be a constructor                                                   |
| 32  | warn | [vue/space-in-parens](https://eslint.vuejs.org/rules/space-in-parens.html)                                             | enforce consistent spacing inside parentheses                                           |
| 33  | warn | [vue/template-curly-spacing](https://eslint.vuejs.org/rules/template-curly-spacing.html)                               | require or disallow spacing around embedded expressions of template strings             |
| 34  | warn | [vue/v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)                                                   | enforce `v-bind` directive style                                                        |
| 35  | warn | [vue/v-for-delimiter-style](https://eslint.vuejs.org/rules/v-for-delimiter-style.html)                                 | enforce `v-for` directive's delimiter style                                             |
| 36  | warn | [vue/v-on-function-call](https://eslint.vuejs.org/rules/v-on-function-call.html)                                       | enforce or forbid parentheses after method calls without arguments in `v-on` directives |
| 37  | warn | [vue/v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)                                                       | enforce `v-on` directive style                                                          |
| 38  | warn | [vue/v-slot-style](https://eslint.vuejs.org/rules/v-slot-style.html)                                                   | enforce `v-slot` directive style                                                        |

<!-- rules end -->

## Relative

- [@xwtec/eslint-config](https://github.com/xwtec/eslint-config)
- [@xwtec/eslint-config-legacy](https://github.com/xwtec/eslint-config-legacy)

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## License

MIT © [xwtec](https://github.com/xwtec)
