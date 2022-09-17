<template>
  <VStack
    ref="cardRef"
    :space="3"
    as="article"
  >
    <RouterLink :to="props.path">
      <Heading
        :size="titleSize"
        :color="semanticColors.title"
        class="title"
      >
        {{ title }}
      </Heading>
    </RouterLink>
    <HStack
      :align="'center'"
      :space="15"
    >
      <Text :size="32">
        {{ emoji }}
      </Text>
      <VStack>
        <Text :size="14">
          {{ date }}
        </Text>
        <Text font="monospace">
          {{ desc }}
        </Text>
      </VStack>
    </HStack>
  </VStack>
</template>

<script lang="ts" setup>
import { ref, watch, computed, withDefaults } from 'vue';
import { VStack, Heading, Text, Spacer, HStack } from '@core';
import dayjs from 'dayjs';
import { semanticColors, colors } from '@src/style';
import { useWindowSize } from '@src/composable';
import { useRouter } from 'vue-router';

const props = withDefaults(
  defineProps<{
    title?: string;
    emoji?: string;
    date?: Date | string;
    desc?: string;
    path?: string
  }>(),
  {
    title: 'これはテスト投稿です',
    emoji: '🪐',
    date: dayjs().format('MMM D, YYYY'),
    desc: 'this is just a test post do not take this seriously',
    path: "/post/test"
  }
);

const title = ref(props.title);
const emoji = ref(props.emoji);
const date = ref(dayjs(props.date).format('MMM D, YYYY'));
const desc = ref(props.desc);

const hoverdColor = ref(colors.Pink[800]);
const cardRef = ref();

const {isMobile} = useWindowSize()
const titleSize = computed(() => {
  return isMobile.value ? '1.5rem' : '1.75rem'
})
const router = useRouter()

</script>

<style scoped>
.title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.title:hover {
  color: v-bind(hoverdColor);
}
</style>
