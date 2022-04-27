<template>
    <div class="lin-drop-list" @mouseenter="hover" @mouseleave="hover">
        <nuxtLink class="drop" :to="value.path">
            {{ value.name }} | {{ value.enName }}
        </nuxtLink>
        <div
            class="drop-list"
            v-show="value.children && showList"
        >
            <nuxtLink
                class="drop link"
                v-for="item in value.children"
                :key="item.name"
                :to="item.path"
            >
                {{ item.name }}
            </nuxtLink>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    value: { type: Object, require: true },
});
const showList = ref(true);
const hover = ($event) => {
    if ($event.target.classList.value.indexOf("link") !== -1) return;
    // showList.value = !showList.value;
};
</script>
<style lang="scss" scoped>
@import "@/style/var/index.scss";
.lin-drop-list {
    position: relative;
    margin-right: 20px;
    display: flex;
    flex-direction: column;
    text-align: left;
    z-index: 2;
    .drop-list {
        position: absolute;
        top: 100%;
        right: 0;
        display: flex;
        flex-direction: column;
    }
    .drop,
    .item {
        color: $color-black;
        font-size: 16px;
        line-height: 22px;
        font-family: Furore, HarmonyOS Sans, sans-serif;
        cursor: pointer;
    }
}
</style>
