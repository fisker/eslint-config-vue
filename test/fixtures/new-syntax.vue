<template>
  <div>
    <div v-if="a?.b">{{ a.b }}</div>
    <div v-if="a ?? b">{{ a ?? b }}</div>
  </div>
</template>
