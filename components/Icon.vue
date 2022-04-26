<template>
    <svg class="icon" aria-hidden="true" v-html="useIcon"></svg>
</template>
<script setup>
const props = defineProps({
    type: { type: String, require: true },
});
const useIcon = computed(() => {
    return `<use xlink:href="#${props.type}"></use>`;
});
</script>
<style lang="scss" scoped>
.icon {
    width: 20px;
    height: 20px;
    fill: currentColor;
    overflow: hidden;
}
</style>
