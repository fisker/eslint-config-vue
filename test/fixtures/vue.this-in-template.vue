<!-- https://eslint.vuejs.org/rules/this-in-template.html -->

<template>
  <a :href="this.url">
    {{ this.text }}
  </a>
</template>
