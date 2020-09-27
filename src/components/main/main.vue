<template>
    <main>
        <div id="cover">
            <img
                alt=""
                :class="{
                    paused: !this.$store.getters['audio/getAudioPlayStatus'],
                }"
                @click="coverHandle"
                :src="music.coverImgSrc"
            />
        </div>
        <div id="info">
            <audio
                @canplay="initAudioElement"
                ref="audio"
                :src="music.musicSrc"
                @timeupdate="currentTimeChange"
            ></audio>

            <h2>{{ music.musicName }}</h2>
        </div>
    </main>
</template>

<script>
import { mapGetters } from 'vuex'
import API from '../../http-request/request'
// import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    created() {
        this.getPlayList()
    },
    methods: {
        initAudioElement() {
            const audio = this.$refs.audio
            this.$store.commit('audio/init', audio)
        },
        coverHandle() {
            const store = this.$store
            store.commit('audio/audioControlProgram')
        },
        //   time update 事件回调函数, 改变进度条样式
        currentTimeChange() {
            // audio 标签相关属性
            const audio = this.$refs.audio
            const currentTime = audio.currentTime
            const duration = audio.duration
            const percentage = ((currentTime / duration) * 100).toFixed(1)
            const timeObj = {}
            timeObj.currentTime = this.formatTime(currentTime)
            timeObj.totalTime = this.formatTime(duration)
            // audio module
            const store = this.$store
            // console.log(`currenTime: ${currentTime},duration:${duration}`)
            store.commit('audio/changeAudioProgress', percentage)
            store.commit('audio/changeTime', timeObj)
        },
        formatTime(time) {
            let result = {}
            let min = Math.floor(time / 60) % 60
            let sec = Math.floor((time % 60).toFixed(2))
            if (min < 10) {
                min = '0' + String(min)
            }
            if (sec < 10) {
                sec = '0' + String(sec)
            }
            result = `${min}:${sec}`
            return result
        },
        async getPlayList() {
            const params = {}
            const response = await API.getPlayList(params)
            const music = response.data
            const store = this.$store
            store.commit('music/initMusic', music)
        },
    },
    computed: {
        ...mapGetters({
            volume: 'audio/getAudioVolume',
            music: 'music/getMusicInStore',
        }),
    },
    props: {
        isPlay: {
            type: Boolean,
            default: () => {
                return false
            },
        },
    },
    watch: {
        volume: function (volumeData) {
            const audio = this.$refs.audio
            audio.volume = volumeData
        },
    },
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

img {
    cursor: pointer;
    height: 300px;
    width: 300px;
    box-shadow: 0 0 10px #454545;
    border-radius: 100%;
    animation: rotate 10s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.paused {
    animation-play-state: paused;
}

#info {
    text-align: center;
    color: var(--text-primary-color);
    font-family: 'Ropa Sans', sans-serif;
    font-size: 25px;
}
</style>