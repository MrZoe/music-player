<template>
    <div id="console">
        <i class="fa fa-backward console-btn" aria-hidden="true"></i>
        <i
            @click="playButtonHandle"
            class="fa console-btn"
            :class="{
                'fa-play': !this.$store.getters['audio/getAudioPlayStatus'],
                'fa-pause': this.$store.getters['audio/getAudioPlayStatus'],
            }"
            aria-hidden="true"
            id="play-btn"
        ></i>
        <i class="fa fa-forward console-btn" aria-hidden="true"></i>
    </div>
</template>

<script>
export default {
    methods: {
        playButtonHandle() {
            const store = this.$store
            store.commit('audio/audioControlProgram')
        },
    },
}
</script>

<style scoped>
#console {
    font-size: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#play-btn {
    font-size: 60px;
}
</style>