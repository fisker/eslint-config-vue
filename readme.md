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

|  #  | Type  | Rule                                                                                                                     | Description                                          |
| :-: | :---: | :----------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------- |
|  1  | error | [vue/comment-directive](https://eslint.vuejs.org/rules/comment-directive.html)                                           | support comment-directives in `<template>`           |
|  2  | error | [vue/jsx-uses-vars](https://eslint.vuejs.org/rules/jsx-uses-vars.html)                                                   | prevent variables used in JSX to be marked as unused |
|  3  | error | [vue/no-async-in-computed-properties](https://eslint.vuejs.org/rules/no-async-in-computed-properties.html)               | disallow asynchronous actions in computed properties |
|  4  | error | [vue/no-dupe-keys](https://eslint.vuejs.org/rules/no-dupe-keys.html)                                                     | disallow duplication of field names                  |
|  5  | error | [vue/no-duplicate-attributes](https://eslint.vuejs.org/rules/no-duplicate-attributes.html)                               | disallow duplication of attributes                   |
|  6  | error | [vue/no-parsing-error](https://eslint.vuejs.org/rules/no-parsing-error.html)                                             | disallow parsing errors in `<template>`              |
|  7  | error | [vue/no-reserved-keys](https://eslint.vuejs.org/rules/no-reserved-keys.html)                                             | disallow overwriting reserved keys                   |
|  8  | error | [vue/no-side-effects-in-computed-properties](https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html) | disallow side effects in computed properties         |
|  9  | error | [vue/no-template-key](https://eslint.vuejs.org/rules/no-template-key.html)                                               | disallow `key` attribute on `<template>`             |
| 10  | error | [vue/no-textarea-mustache](https://eslint.vuejs.org/rules/no-textarea-mustache.html)                                     | disallow mustaches in `<textarea>`                   |
| 11  | error | [vue/valid-v-bind](https://eslint.vuejs.org/rules/valid-v-bind.html)                                                     | enforce valid `v-bind` directives                    |
| 12  | error | [vue/valid-v-cloak](https://eslint.vuejs.org/rules/valid-v-cloak.html)                                                   | enforce valid `v-cloak` directives                   |
| 13  | error | [vue/valid-v-else](https://eslint.vuejs.org/rules/valid-v-else.html)                                                     | enforce valid `v-else` directives                    |
| 14  | error | [vue/valid-v-else-if](https://eslint.vuejs.org/rules/valid-v-else-if.html)                                               | enforce valid `v-else-if` directives                 |
| 15  | error | [vue/valid-v-for](https://eslint.vuejs.org/rules/valid-v-for.html)                                                       | enforce valid `v-for` directives                     |
| 16  | error | [vue/valid-v-html](https://eslint.vuejs.org/rules/valid-v-html.html)                                                     | enforce valid `v-html` directives                    |
| 17  | error | [vue/valid-v-if](https://eslint.vuejs.org/rules/valid-v-if.html)                                                         | enforce valid `v-if` directives                      |
| 18  | error | [vue/valid-v-model](https://eslint.vuejs.org/rules/valid-v-model.html)                                                   | enforce valid `v-model` directives                   |
| 19  | error | [vue/valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)                                                         | enforce valid `v-on` directives                      |
| 20  | error | [vue/valid-v-once](https://eslint.vuejs.org/rules/valid-v-once.html)                                                     | enforce valid `v-once` directives                    |
| 21  | error | [vue/valid-v-pre](https://eslint.vuejs.org/rules/valid-v-pre.html)                                                       | enforce valid `v-pre` directives                     |
| 22  | error | [vue/valid-v-show](https://eslint.vuejs.org/rules/valid-v-show.html)                                                     | enforce valid `v-show` directives                    |
| 23  | error | [vue/valid-v-text](https://eslint.vuejs.org/rules/valid-v-text.html)                                                     | enforce valid `v-text` directives                    |

### Warn

|  #  | Type | Rule                                                                                               | Description                                                     |
| :-: | :--: | :------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------- |
|  1  | warn | [vue/require-component-is](https://eslint.vuejs.org/rules/require-component-is.html)               | require `v-bind:is` of `<component>` elements                   |
|  2  | warn | [vue/require-render-return](https://eslint.vuejs.org/rules/require-render-return.html)             | enforce render function to always return value                  |
|  3  | warn | [vue/require-valid-default-prop](https://eslint.vuejs.org/rules/require-valid-default-prop.html)   | enforce props default values to be valid                        |
|  4  | warn | [vue/return-in-computed-property](https://eslint.vuejs.org/rules/return-in-computed-property.html) | enforce that a return statement is present in computed property |
|  5  | warn | [vue/valid-template-root](https://eslint.vuejs.org/rules/valid-template-root.html)                 | enforce valid template root                                     |

### Fixable

|  #  | Type  | Rule                                                                                                           | Description                                                        |
| :-: | :---: | :------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------- |
|  1  | warn  | [vue/attribute-hyphenation](https://eslint.vuejs.org/rules/attribute-hyphenation.html)                         | enforce attribute naming style on custom components in template    |
|  2  | warn  | [vue/attributes-order](https://eslint.vuejs.org/rules/attributes-order.html)                                   | enforce order of attributes                                        |
|  3  | warn  | [vue/component-name-in-template-casing](https://eslint.vuejs.org/rules/component-name-in-template-casing.html) | enforce specific casing for the component naming style in template |
|  4  | warn  | [vue/name-property-casing](https://eslint.vuejs.org/rules/name-property-casing.html)                           | enforce specific casing for the name property in Vue components    |
|  5  | error | [vue/no-shared-component-data](https://eslint.vuejs.org/rules/no-shared-component-data.html)                   | enforce component's data property to be a function                 |
|  6  | warn  | [vue/order-in-components](https://eslint.vuejs.org/rules/order-in-components.html)                             | enforce order of properties in components                          |
|  7  | warn  | [vue/prop-name-casing](https://eslint.vuejs.org/rules/prop-name-casing.html)                                   | enforce specific casing for the Prop name in Vue components        |
|  8  | error | [vue/require-prop-type-constructor](https://eslint.vuejs.org/rules/require-prop-type-constructor.html)         | require prop type to be a constructor                              |
|  9  | warn  | [vue/v-bind-style](https://eslint.vuejs.org/rules/v-bind-style.html)                                           | enforce `v-bind` directive style                                   |
| 10  | warn  | [vue/v-on-style](https://eslint.vuejs.org/rules/v-on-style.html)                                               | enforce `v-on` directive style                                     |

<!-- rules end -->

## Relative

- [@xwtec/eslint-config](https://github.com/xwtec/eslint-config)
- [@xwtec/eslint-config-legacy](https://github.com/xwtec/eslint-config-legacy)

## Links

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## License

MIT © [xwtec](https://github.com/xwtec)
