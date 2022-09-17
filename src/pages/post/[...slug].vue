<template>
  <div>
    <Header />
    <Spacer :size="50" />
    <ContentDoc />
  </div>
</template>

<script lang="ts" setup>
import {ref, Ref, onMounted, watchEffect, onBeforeMount } from 'vue'
import {useRoute, useRouter } from 'vue-router'
import { useAsyncData, queryContent, useContentHead, useContent } from '#imports'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'
import { VStack, Spacer } from '@core'
import { Header } from '@src/components'


interface Post extends ParsedContent {
  description: string
}

const route = String(useRoute().params.slug)
const router = useRouter()

const post: Ref<Post> = useContent().page

// 存在しないページの際はリダイレクト
onBeforeMount(() => {
  if (!post.value) {
    router.push('/')
  }
})


</script>