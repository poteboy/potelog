<template>
  <header>
    <HStack justify="between" :align="'center'">
      <RouterLink :to="'/'" class="title">
        <Heading>potelog</Heading>
      </RouterLink>
      <RouterLink :to="'/about'">
        <Text :size="30"> 👋 </Text>
      </RouterLink>
    </HStack>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HStack, Text, Heading, VStack } from '@core';
import { colors } from '@src/style';

const titleColor = ref(colors.Gray[800]);
</script>

<style scoped>
header {
  margin-top: 1.875rem;
}

.title {
  cursor: pointer;
  text-decoration: none;
  color: v-bind(titleColor);
}
</style>
