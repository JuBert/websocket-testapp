import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@vueuse/nuxt'],
    ssr: true,
    nitro: {
        preset: 'node-server',
        experimental: {
            websocket: true,
        },
    },
})
