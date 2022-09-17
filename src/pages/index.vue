<template>
  <div>
    <Header :has-color="false" />
    <Spacer :size="'2rem'" />
    <ProfileBar />
    <Spacer :size="50" />
    <VStack
      space="3rem"
      as="main"
    >
      <PostCard
        v-for="post of posts"
        :key="post.title"
        :title="post.title"
        :desc="post.description"
        :emoji="post.emoji"
        :date="new Date(post.date)"
        :path="post._path"
      />
    </VStack>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { Spacer, VStack } from '@core';
import { Header, ProfileBar, PostCard } from '@src/components';
import { queryContent, useAsyncData } from '#imports'
import { Post } from '@src/composable'

const posts = ref<Post[]>([])

onBeforeMount(async () => {
  posts.value = await queryContent<Post>('post').sort({date: 1}).find()
    console.log(posts.value)
})



</script>
