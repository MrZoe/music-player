<template>
    <div id="container">
        <Header></Header>
        <Main :isPlay="isPlay"></Main>
        <Footer></Footer>
        <Menu></Menu>
    </div>
</template>

<script>
import Header from './header/header'
import Main from './main/main'
import Footer from './footer/footer'
import Menu from './footer/menu'
export default {
    data() {
        return {
            isPlay: false,
            per: 85,
        }
    },
    created() {
        const getters = this.$store.getters
        const isPlay = getters['audio/getAudioPlayStatus']
        this.isPlay = isPlay
    },
    components: {
        Header,
        Main,
        Footer,
        Menu,
    },
}
</script>

<style scoped>
#container {
    width: 500px;
    height: 800px;
    border-radius: 5px;
    box-shadow: 0 0 2px var(--background-dark-color);
    background-color: var(--background-gray-color);
    padding: 20px;
    position: relative;
    overflow: hidden;
}

/* 底部区域 */
</style>