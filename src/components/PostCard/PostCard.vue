<template>
  <RouterLink :to="''">
    <VStack :space="3" as="article" ref="hoverRef">
      <Heading size="1.75rem" :color="titleColor" class="title"
        >これはテスト投稿です</Heading
      >
      <Text :size="14">{{ day }}</Text>
      <Text>this is just a test post do not take this seriously</Text>
    </VStack>
  </RouterLink>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import { VStack, Heading, Text, Spacer } from '@core';
import * as dayjs from 'dayjs';
import { semanticColors, colors } from '@src/style';
import { useHover } from '@src/composable';

const day = dayjs().format('MMM D, YYYY');

const hoverdColor = ref(colors.Pink[800]);

const { hoverRef, isHoverd } = useHover();

const titleColor = computed(() => {
  // const { isHoverd } = useHoverd(cardRef);
  // const darkness = isHoverd.value ? 800 : 700;
  // return colors.Pink[darkness];

  return colors.Pink[700];
});
</script>

<style scoped>
.title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.title:hover {
  color: v-bind(hoverdColor);
}
</style>
