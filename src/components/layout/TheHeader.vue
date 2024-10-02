<script setup>
defineProps({
  title: {
    type: String,
    default: 'Default Header Text'
  }
})
</script>

<template>
  <header>
    <h2 class="header">
      {{ title }}
    </h2>
  </header>
</template>

<style lang="scss" scoped>
.header {
  margin: 0;
  font-size: 1.75rem;
}
</style>
