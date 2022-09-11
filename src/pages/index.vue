<template>
  <Header />
  <Spacer :size="'2rem'" />
  <ProfileBar />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Spacer } from '@core';
import { Header, ProfileBar } from '@src/components';
// import hello from './hello.md';
</script>
