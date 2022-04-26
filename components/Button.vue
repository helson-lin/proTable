<template>
    <button class="lin-btn">
        <slot></slot>
    </button>
</template>
<style lang="scss">
@import "@/style/var/index.scss";
.lin-btn {
    height: 35px;
    outline: none;
    padding: 0 $paddingSize-btn;
    border: none;
    background: $primary-color;
    color: #fff;
    cursor: pointer;
    &.round {
        border-radius: 20px;
    }
    &.circle {
        display: inline-block;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        padding: 0;
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    &.white {
        color: $primary-color;
        background: #fafafa;
    }
    &.black {
        color: $color-black;
        background: #fff
    }
}
</style>
