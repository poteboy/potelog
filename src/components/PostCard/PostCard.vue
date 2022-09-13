<template>
  <VStack :space="3" as="article" ref="cardRef">
    <RouterLink :to="''">
      <Heading size="1.75rem" :color="semanticColors.title" class="title"
        >これはテスト投稿です</Heading
      >
    </RouterLink>
    <HStack :align="'center'" :space="15">
      <Text :size="32">{{ icon }}</Text>
      <VStack>
        <Text :size="14">{{ day }}</Text>
        <Text>this is just a test post do not take this seriously</Text>
      </VStack>
    </HStack>
  </VStack>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import { VStack, Heading, Text, Spacer, HStack } from '@core';
import * as dayjs from 'dayjs';
import { semanticColors, colors } from '@src/style';
import { useHover } from '@src/composable';

const day = dayjs().format('MMM D, YYYY');

const hoverdColor = ref(colors.Pink[800]);
const cardRef = ref();

const icon = Math.random() / 2 === 1 ? '👋' : '🪐';
</script>

<style scoped>
.title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.title:hover {
  color: v-bind(hoverdColor);
}
</style>
