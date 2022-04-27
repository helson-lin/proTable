<template>
    <div class="lin-card">
        <div class="introduce">
            <h1>您好，我是{{ personInfo.name }}</h1>
            <p id="introduce-txt"></p>
        </div>
        <Button class="round">
            个人简历
            <Icon type="icon-xiazai" @click="openResume"></Icon>
        </Button>
        <div class="contact-way">
            <Button class="circle white" v-for="way in contactList" :key="way">
                <Icon :type="`icon-${way.name}`" @click="jump(way)" />
            </Button>
        </div>
        <!-- <iframe id="pro" src="http://182.61.138.196:8088/" frameborder="0"></iframe> -->
    </div>
</template>
<script setup>
import Button from "./Button.vue";
import Icon from "./Icon.vue";
import TyperText from "@/utils/typer";
import CONFIG from "$json/config.json";
const personInfo = ref({});
const contact = ref({});
personInfo.value = CONFIG.personInfo;
contact.value = CONFIG.contact;
const initTyper = () => {
    const Typer = new TyperText({
        el: "#introduce-txt",
        spee: 100,
        text: personInfo.value.introduce,
        loop: false,
        startIndex: 1,
        fontSize: "24px",
        color: " #000000",
    });

    // 开始渲染
    Typer.render();
};
const contactList = computed(() => {
    if (!contact.value) return [];
    const keys = Object.keys(contact.value);
    const arr = keys.map((key) => {
        return {
            url: contact.value[key],
            name: key,
        };
    });
    return arr;
});
const jump = (way) => {
    const { url, name } = way;
    if (name !== "Email") {
        window.open(url, "_blank");
    } else {
        window.open(`mailto: ${url}`, "_blank");
    }
};
const openResume = () => {
    window.open(personInfo.value.onlineResume, '_blank')
}
onMounted(() => {
    initTyper();
});
</script>
<style lang="scss" scoped>
.lin-card {
    position: relative;
    z-index: 2;
    width: 80%;
    margin: 0 auto;
    .round {
        display: flex;
        align-items: center;
        .icon {
            margin-left: 5px;
        }
    }
    #introduce-txt {
        width: 70%;
        margin: 40px 0;
    }
    .contact-way {
        margin-top: 40px;
        .lin-btn {
            margin-right: 10px;
        }
    }
    #pro {
        position: absolute;
        top: -80%;
        width: 1920px;
        height: 1080px;
        transform: scale(0.4);
        background-color: #fff;
    }
}
</style>
