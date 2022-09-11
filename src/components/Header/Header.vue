<template>
  <header>
    <VStack :space="6">
      <HStack justify="between" :align="'center'">
        <RouterLink :to="'/'" class="title">
          <Heading>potelog</Heading>
        </RouterLink>

        <Text as="button" :size="30">👋</Text>
      </HStack>
      <HStack :space="10">
        <img :src="poteboy" />
        <VStack :space="6" justify="center">
          <Text>Personal blog by poteboy</Text>
          <Text>お気持ち表明学級会</Text>
        </VStack>
      </HStack>
    </VStack>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HStack, Text, Heading } from '@core';
import { colors } from '@src/style';
import VStack from '../core/VStack/VStack.vue';
import poteboy from '@src/assets/poteboy.jpeg';

const titleColor = ref(colors.Gray[800]);
</script>

<style scoped>
header {
  height: 48px;
  margin-top: 20px;
  padding: 0 1rem;
}

img {
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

.title {
  cursor: pointer;
  text-decoration: none;
  color: v-bind(titleColor);
}
</style>
