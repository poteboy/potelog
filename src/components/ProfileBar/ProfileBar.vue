<template>
  <VStack :space="16">
    <HStack
      :space="10"
      as="aside"
    >
      <Image
        :src="poteboy"
        alt="poteboy"
        :width="56"
        :height="56"
        :border-radius="'50%'"
      />
      <VStack
        :space="6"
        justify="center"
      >
        <Text>
          Personal blog by
          <Text
            as="a"
            class="myname"
            :href="links.myTwitter"
          >
            poteboy
          </Text>
        </Text>
        <Text font="verdana">
          お気持ち表明学級会
        </Text>
      </VStack>
    </HStack>
    <HStack :space="12">
      <Text
        v-for="site of sites"
        :key="site.name"
        as="a"
        size="14px"
        :href="site.link"
        :color="semanticColors.link"
        font="monospace"
      >
        {{ site.name }}
      </Text>
    </HStack>
  </VStack>
</template>

<script setup lang="ts">
import { ref, computed, reactive } from 'vue';
import { HStack, Text, Heading, Image, VStack } from '@core';
import poteboy from '@src/assets/poteboy.jpeg';
import { links } from '@src/constants';
import { semanticColors } from '@src/style';

type Site = { name: string; link: string };
const sites: Site[] = reactive([
  {
    name: 'Twitter',
    link: links.myTwitter,
  },
  {
    name: 'Zenn',
    link: links.myZenn,
  },
  {
    name: 'Portfolio',
    link: links.myPortfolio,
  },
]);

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
