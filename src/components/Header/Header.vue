<template>
  <header>
    <HStack
      justify="between"
      :align="'center'"
    >
      <RouterLink
        :to="'/'"
        class="title"
      >
        <Heading>potelog</Heading>
      </RouterLink>

      <Text
        as="button"
        :size="30"
      >
        👋
      </Text>
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
  margin-top: 20px;
}

.title {
  cursor: pointer;
  text-decoration: none;
  color: v-bind(titleColor);
}
</style>
