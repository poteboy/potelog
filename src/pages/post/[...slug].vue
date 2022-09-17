<template>
  <div>
    <Header />
    <Spacer :size="50" />
    <VStack v-if="post">
      <Heading>
        {{ post.title }}
      </Heading>
      <Spacer :size="20" />
      <ContentDoc />
    </VStack>
  </div>
</template>

<script lang="ts" setup>
import {ref, Ref, onMounted, watchEffect, onBeforeMount } from 'vue'
import {useRoute, useRouter } from 'vue-router'
import { definePageMeta, queryContent, useMeta} from '#imports'
import { VStack, Spacer, Heading } from '@core'
import { Header } from '@src/components'
import { Post } from '@src/composable'
import { meta } from '@src/constants'


const route = useRoute()
const router = useRouter()

const post: Ref<Post> = ref()

// 存在しないページの際はリダイレクト
onBeforeMount(async () => {
  post.value = await queryContent<Post>(route.fullPath).findOne()
  if (!post.value) {
    router.push('/')
  } else {
    useMeta({
      meta: [
        {
          property: 'og:title',
          content: post.value.title
        }
      ]
    })
  }
})



</script>