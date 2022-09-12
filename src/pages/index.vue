<template>
  <div>
    <Header />
    <Spacer :size="'2rem'" />
    <ProfileBar />
    <Spacer :size="50" />
    <VStack space="3rem">
      <PostCard v-for="card of [1, 2, 3]" />
    </VStack>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Spacer, VStack } from '@core';
import { Header, ProfileBar, PostCard } from '@src/components';
</script>
