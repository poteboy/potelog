<template>
  <div>{{ route.params.slug }}</div>
  <ContentDoc />
</template>

<script lang="ts" setup>
import {ref } from 'vue'
import {useRoute} from 'vue-router'
import { useSlug } from './useSlug'

const route = useRoute()



</script>