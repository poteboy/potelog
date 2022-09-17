import {ref} from 'vue'
import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface Post extends ParsedContent {
    description: string
    emoji: string
    date: string
}
  

export const usePost = () => {

}