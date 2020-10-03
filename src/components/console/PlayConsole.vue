<template>
    <div class="console-item-wrapper">
        <i @click="previousEvent" class="fa fa-step-backward"></i>
        <i
            @click="togglePlayStatusEvent"
            @ended="nextEvent"
            id="play-btn"
            class="fa"
            :class="{
                'fa-play-circle': isPaused,
                'fa-pause-circle': !isPaused,
            }"
        ></i>
        <i @click="nextEvent" class="fa fa-step-forward"></i
        ><audio
            @play="playEvent"
            @pause="pauseEvent"
            @timeupdate="updateAudioProgressEvent"
            @ended="nextEvent"
            ref="audio"
            :src="music.musicSrc"
            autoplay
        ></audio>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'console',
    computed: {
        ...mapGetters({
            music: 'audio/getCurrentMusicData',
            isPaused: 'audio/getAudioIsPaused',
            time: 'audio/getTimeAfterChange',
            volume: 'audio/getVolume',
        }),
    },
    watch: {
        time: function (newTime) {
            const audio = this.$refs.audio
            audio.currentTime = newTime
        },
        volume: function (newVolume) {
            const audio = this.$refs.audio
            audio.volume = newVolume
        },
    },
    // fa-play-circle
    methods: {
        commitAudioElement() {
            const audio = this.$refs.audio
            const store = this.$store
            store.commit('audio/commitAudioElement', audio)
        },
        initVolume() {
            const audio = this.$refs.audio
            const store = this.$store
            const volume = 0.2
            audio.volume = volume
            store.commit('audio/changeAudioVolume', volume)
        },
        togglePlayStatusEvent() {
            const audio = this.$refs.audio
            const paused = audio.paused
            if (paused === true) {
                //  暂停状态下
                console.log('暂停状态下')
                audio.play()
            } else {
                // 播放状态下
                audio.pause()
            }
        },
        playEvent() {
            console.log('播放事件')
            const store = this.$store
            let status = false
            store.commit('audio/updateAudioPausedStatus', status)
        },
        pauseEvent() {
            console.log('暂停事件')
            const store = this.$store
            let status = true
            store.commit('audio/updateAudioPausedStatus', status)
        },
        nextEvent() {
            const store = this.$store
            store.commit('audio/next')
            const status = false
            store.commit('audio/updateAudioPausedStatus', status)
        },
        previousEvent() {
            const store = this.$store
            store.commit('audio/previous')
            const status = false
            store.commit('audio/updateAudioPausedStatus', status)
        },
        updateAudioProgressEvent() {
            const store = this.$store
            const audio = this.$refs.audio
            const duration = audio.duration
            const currentTime = audio.currentTime
            // 将格式化后的时间, 提交给 vuex 的 store
            const timeObj = {}
            timeObj.duration = this.formatTime(duration)
            timeObj.currentTime = this.formatTime(currentTime)
            store.commit('audio/updateTime', timeObj)
            // 更新进度条样式
            const scale = (currentTime / duration).toFixed(2)
            // console.log(scale)
            store.commit('audio/updatePlayedScale', scale)
            store.commit('audio/initAudioDuration', duration)
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
    },
    mounted() {
        this.commitAudioElement()
        this.initVolume()
    },
}
</script>

<style scoped>
.console-item-wrapper {
    margin: 20px 25%;
    font-size: 40px;
    display: flex;
    justify-content: space-between;
    line-height: 60px;
    align-items: center;
}

#play-btn {
    font-size: 70px;
}
</style>