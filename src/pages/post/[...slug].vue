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
import { useContentHead, useContent, useMeta, queryContent } from '#imports'
import { VStack, Spacer } from '@core'
import { Header } from '@src/components'
import { Post } from '@src/composable'
import { meta } from '@src/constants'


const route = useRoute()
const router = useRouter()

const post: Ref<Post> = useContent().page

// useMeta({
//   title: `${post.value?.title} | ${meta.title}`
// })

const q =  queryContent(route.fullPath).findOne()


// 存在しないページの際はリダイレクト
onBeforeMount(() => {
  if (!post.value) {
    router.push('/')
  }
})


</script>