import { ref, Ref, watch, watchEffect } from 'vue'
import { useAsyncData } from '#imports'
import fs from 'fs'

export const useSlug = (slug: Ref<string>) => {

    
   
    const { data, refresh } =  useAsyncData('', async () => {
        let post;
        await fs.readdir('./src/posts', (err, file) => {
            post = {err, file}
        })
        return post
    })
    console.log(data)


}


const fetcher = (slug: string) => () => {
    let post = false
    fs.readdir('./src/posts', (err, file) => {
        const exist =  file.includes(`${slug}.md`)
        console.log(exist)
        post =  exist
    })
    return post
}