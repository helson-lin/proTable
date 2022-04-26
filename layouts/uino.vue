<script setup>
import CONFIG from "$json/config.json";
import DropList from "@/components/DropList.vue";
const borWdRef = ref("");
const menuList = ref([]);
const projectList = ref([]);
const logoName = ref("");
menuList.value = CONFIG.menu;
logoName.value = CONFIG.logo;
projectList.value = CONFIG.projectList;

const randomScale = () => {
    const num = Math.random() * 10;
    if (num < 5) return randomScale();
    return num;
};
const setAnimate = () => {
    borWdRef.value = randomScale();
    setInterval(() => {
        borWdRef.value = randomScale();
    }, 10000);
};
onMounted(() => {
    setAnimate();
});
</script>
<template>
    <div
        class="lin-tb"
        :style="{
            '--lin-scale': `${borWdRef}`,
            '--lin-scale-d': `${1 - borWdRef}`,
        }"
    >
        <header>
            <div class="logo">
                <NuxtLink to="/">{{ logoName }}</NuxtLink>
            </div>
            <div class="menu">
                <div
                    class="menu-item"
                    :id="menu.name"
                    v-for="menu in menuList"
                    :key="menu.name"
                >
                    <DropList :value="menu" />
                </div>
            </div>
        </header>
        <div class="lin-content">
            <slot></slot>
        </div>
        <footer>FOOTER</footer>
    </div>
</template>
<style lang="scss">
@import "@/style/var/index.scss";
.lin-tb {
    position: relative;
    width: 100%;
    height: 100%;
    &::after {
        position: absolute;
        left: 2%;
        bottom: 20%;
        content: " ";
        display: block;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        z-index: 1;
        background-image: linear-gradient(135deg, #abdcff, #0396ff);
        opacity: 0.3;
        transform: scale(var(--lin-scale));
        transform-origin: 50% 50%;
        transition: transform 6s ease;
        box-shadow: 0 2px 12px 2px rgba(171, 220, 255, 0.2);
    }
    &::before {
        position: absolute;
        left: 8%;
        bottom: 10%;
        content: " ";
        display: block;
        width: 250px;
        height: 250px;
        border-radius: 50%;
        z-index: 1;
        background-image: linear-gradient(135deg, #17ead9, #6078ea);
        opacity: 0.3;
        transform: scale(var(--lin-scale-d));
        transition: transform 6s ease;
        transform-origin: 0 0;
        box-shadow: 0 2px 12px 2px rgba(96, 120, 234, 0.1);
    }
    header {
        width: 100%;
        height: 60px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 $paddingSize;
        box-sizing: border-box;
        .logo {
            font-family: Furore, sans-serif;
            font-weight: 600;
            font-size: 22px;
        }
        .menu {
            display: flex;
            align-items: center;
            &-item {
                margin-right: 20px;
                font-family: Furore, HarmonyOS Sans, sans-serif;
                cursor: pointer;
            }
        }
    }
    footer {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 60px;
        text-align: center;
        line-height: 60px;
        background: rgba($color: #fff, $alpha: 0.2);
        backdrop-filter: blur(20px);
        box-shadow: 0 2px 2px 2px rgba(96, 120, 234, 0.1);
    }
    .lin-content {
        width: 100%;
        height: calc(100% - 60px);
        overflow-y: auto;
        margin: 0 auto;
        padding: 0 $paddingSize;
        padding-bottom: 60px;
        box-sizing: border-box;
    }
}
</style>
