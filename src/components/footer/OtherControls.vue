<template>
    <div id="list">
        <i class="fa fa-heart-o console-btn" aria-hidden="true"></i>
        <i class="fa fa-heart console-btn" aria-hidden="true"></i>
        <i class="fa fa-share console-btn" aria-hidden="true"></i>
        <i
            @click="openMusicList"
            class="fa fa-list-ul console-btn"
            aria-hidden="true"
        ></i>
    </div>
</template>

<script>
export default {
    methods: {
        openMusicList() {
            const sotre = this.$store
            sotre.commit('playList/show')
        },
    },
}
</script>

<style scoped>
#list {
    font-size: 25px;
    display: flex;
    justify-content: space-around;
}
</style>