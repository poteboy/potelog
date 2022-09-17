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
        <Heading
          as="div"
          :color="titleColor"
        >
          potelog
        </Heading>
      </RouterLink>
      <RouterLink :to="'/about'">
        <Text :size="30">
          👋
        </Text>
      </RouterLink>
    </HStack>
  </header>
</template>

<script setup lang="ts">
import { computed, withDefaults} from 'vue';
import { useRoute } from 'vue-router'
import { HStack, Text, Heading, VStack } from '@core';
import { colors, semanticColors } from '@src/style';

const props = withDefaults(
  defineProps<{
    hasColor: boolean
  }>(),
  {
    hasColor: true
  }
)


const route = useRoute()

const titleColor = computed(() => {
  return !props.hasColor ? colors.Gray[800] : 'rgb(255, 167, 196)'
})
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
