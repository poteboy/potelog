<template>
  <VStack>
    <HStack :space="10" as="aside">
      <Image
        :src="poteboy"
        alt="poteboy"
        :width="56"
        :height="56"
        :border-radius="'50%'"
      />
      <VStack :space="6" justify="center">
        <Text>
          Personal blog by
          <Text as="a" class="myname" :href="links.myTwitter"> poteboy </Text>
        </Text>
        <Text>お気持ち表明学級会</Text>
      </VStack>
    </HStack>
    <HStack>
      <!-- <Text>Twitter</Text> -->
    </HStack>
  </VStack>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { HStack, Text, Heading, Image, VStack } from '@core';
import poteboy from '@src/assets/poteboy.jpeg';
import { links } from '@src/constants';
import { semanticColors } from '@src/style';

const myNameColor = ref(semanticColors.link);
</script>

<style scoped>
.myname {
  text-decoration: underline;
  color: v-bind(myNameColor);
}

.myname:hover {
  text-decoration: none;
}
</style>
