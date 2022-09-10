<template>
  <header>
    <HStack>
      <RouterLink :to="'/'" class="title">
        <Heading>poteboy.dev</Heading>
      </RouterLink>
    </HStack>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HStack, Text, Heading } from '@core';
import { colors } from '@src/style';

const titleColor = ref(colors.Gray[800]);
</script>

<style scoped>
header {
  width: 100%;
  height: 48px;
}

.title {
  cursor: pointer;
  text-decoration: none;
  color: v-bind(titleColor);
}
</style>
