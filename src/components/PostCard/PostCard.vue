<template>
  <VStack :space="3" as="article" ref="cardRef">
    <RouterLink :to="''">
      <Heading size="1.75rem" :color="semanticColors.title" class="title">{{
        title
      }}</Heading>
    </RouterLink>
    <HStack :align="'center'" :space="15">
      <Text :size="32">{{ emoji }}</Text>
      <VStack>
        <Text :size="14">{{ date }}</Text>
        <Text>{{ desc }}</Text>
      </VStack>
    </HStack>
  </VStack>
</template>

<script lang="ts" setup>
import { ref, watch, computed, withDefaults } from 'vue';
import { VStack, Heading, Text, Spacer, HStack } from '@core';
import * as dayjs from 'dayjs';
import { semanticColors, colors } from '@src/style';
import { useHover } from '@src/composable';

const props = withDefaults(
  defineProps<{
    title?: string;
    emoji?: string;
    date?: Date | string;
    desc: string;
  }>(),
  {
    title: 'これはテスト投稿です',
    emoji: '🪐',
    date: dayjs().format('MMM D, YYYY'),
    desc: 'this is just a test post do not take this seriously',
  }
);

const title = ref(props.title);
const emoji = ref(props.emoji);
const date = ref(props.date);
const desc = ref(props.desc);

const hoverdColor = ref(colors.Pink[800]);
const cardRef = ref();
</script>

<style scoped>
.title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.title:hover {
  color: v-bind(hoverdColor);
}
</style>
