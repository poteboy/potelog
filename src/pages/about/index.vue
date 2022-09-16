<template>
  <div>
    <Header />
    <Spacer :size="50" />
    <VStack
      as="main"
      class="about"
      space="1.5rem"
    >
      <Heading
        as="h1"
        size="1.75rem"
      >
        自己紹介
      </Heading>
      <Text font="verdana">
        こんにちわ、poteboyと申します
      </Text>
      <Text>
        つい先日、自己紹介の場で自身の価値観に影響を与えた出来事トップ３を聞かれました。
        確かにこれは自分がどういった思想の持ち主かを表明するのにとても良い題材だなと思ったので、こちらでも踏襲させて頂くことにしました。
      </Text>
      <Heading
        as="h2"
        size="1.5rem"
      >
        1位 高校アメリカ留学
      </Heading>  
      <Image
        :src="Atkins"
        alt="atkins"
        :width="250"
        :height="250"
        border-radius="50%"
        class="img"
      />
      <Text>
        高校生の頃にアメリカのアーカンソーという南部にある州で一年間現地高校に通う機会がありました。
      </Text>
      <Text />
    </VStack>
  </div>
</template>

<script setup lang="ts">
import { Header } from '@src/components';
import { VStack, Spacer, Text, Heading, Image } from '@core';
import Atkins from './atkins.jpg'


</script>

<style scoped>
.about {
  white-space: pre-line;
  line-height: 2;
  font-size: 1rem;
}

.img {
  margin: 0 auto
}
</style>
