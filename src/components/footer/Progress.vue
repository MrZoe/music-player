<template>
    <div id="progressbar" @click="progressOnClick">
        <div id="current" class="console-btn porgress-time">
            {{ currentTime }}
        </div>
        <div
            ref="progressBar"
            class="bar"
            :style="{
                width: percentage,
            }"
        ></div>
        <div id="end" class="console-btn porgress-time">
            <span> {{ totalTime }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {}
    },
    methods: {
        initProgressBar() {
            const bar = this.$refs.progressBar
            const store = this.$store
            const audio = this.audioElement
            console.log('操你妈')
            const currentTime = audio.currentTime
            const duration = audio.duration
            const timeObj = {}
            console.log('formatTime')
            timeObj.currentTime = this.formatTime(currentTime)
            timeObj.totalTime = this.formatTime(duration)
            store.commit('audio/changeTime', timeObj)
            store.commit('audio/initBar', bar)
            console.log('init 结束')
        },
        progressOnClick(event) {
            console.log(event)
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
    computed: {
        ...mapGetters({
            currentTime: 'audio/getAudioCurrentTime',
            totalTime: 'audio/getAudioTotalTime',
            audioElement: 'audio/getAudioElement',
            percentage: 'audio/getAudioCurrentPercentage',
        }),
    },
    watch: {
        audioElement: function () {
            this.initProgressBar()
        },
        percentage: function (val) {
            console.log(this.currentTime, val)
        },
        currentTime: function (val) {
            console.log(val)
        },
    },
}
</script>

<style scoped>
#progressbar {
    height: 5px;
    width: 80%;
    margin: 0 auto;
    background-color: var(--background-dark-color);
    display: flex;
    position: relative;
}

.porgress-time {
    margin: 10px;
    position: absolute;
}
#current {
    left: 0;
}
#end {
    right: 0;
}
</style>