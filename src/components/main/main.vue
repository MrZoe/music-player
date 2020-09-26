<template>
    <main>
        <div id="cover">
            <img
                @click="onPlay"
                src="../../../public/banner/celeste.jpg"
                alt=""
            />
        </div>
        <div id="info">
            <audio
                ref="audio"
                src="../../../public/music/awake.mp3"
                @canplay="canPlay"
            ></audio>

            <h2>Awake</h2>
        </div>
    </main>
</template>

<script>
// import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    methods: {
        canPlay() {
            console.log('canPlay')
            const audio = this.$refs.audio
            this.$store.commit('init', audio)
            // console.log(this.$store.state.audio)
            console.log('main 组件 init')
        },
        onPlay() {
            console.log('onPlay!')
            const audio = this.$store.state.audio
            // console.log(audio)
            const isPlayStatus = this.$store.state.isPlay
            if (isPlayStatus === false) {
                const status = true
                this.$store.commit('changeIsPlayStatus', status)
                audio.play()
            } else {
                const status = false
                this.$store.commit('changeIsPlayStatus', status)
                audio.pause()
            }
        },
    },
    // computed: {
    //     ...mapState(['audio']),
    // },
}
</script>

<style scoped>
main {
    height: 50%;
    margin-bottom: 20px;
}

#cover {
    display: flex;
    justify-content: center;
}

#cover > img {
    height: 300px;
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 0 10px #454545;
}

#info {
    text-align: center;
    color: var(--text-primary-color);
    font-family: 'Ropa Sans', sans-serif;
    font-size: 25px;
}
</style>