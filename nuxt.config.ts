import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    alias: {
        "~": "/<rootDir>",
        $json: "/static/json",
    },
    css: [
        "@/style/main.scss",
    ],
    app: {
        head: {
            script: [
                { src: "//at.alicdn.com/t/font_2913738_ldt6x3k3y.js" },
            ],
        },
    },
});
