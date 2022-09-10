<template>
  <header>
    <HStack as="div">
      <div>hello</div>
      <div>hello</div>
      <div>hello</div>
    </HStack>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HStack } from '@core';
</script>

<style scoped>
header {
  width: 100%;
  height: 48px;
}
</style>
