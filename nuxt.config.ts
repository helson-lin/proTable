import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    alias: {
        "~": "/<rootDir>",
        $json: "/static/json",
    },
    css: ["@/style/main.scss"],
    app: {
        head: {
            link: [{ src: "/static/favicon.ico", rel: "shortcut icon" }],
            meta: [
                {
                    name: "description",
                    content: "ProTable A Personal Project Display Platform",
                },
            ],
            title: "ProTable",
            script: [{ src: "//at.alicdn.com/t/font_2913738_vovj4fbnhvi.js" }],
        },
    },
    dir: {
        public: "static",
    },
});
