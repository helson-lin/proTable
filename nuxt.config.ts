import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/style/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    data: '@import "@/style/var/index.scss"',
                },
            },
        },
    }
});
