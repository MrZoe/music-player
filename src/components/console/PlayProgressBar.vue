<template>
    <div class="console-item-wrapper">
        <Progress
            :scale="playedScale"
            :progressBarClass="progressBarClass"
        ></Progress>
        <div id="time-wrapper">
            <span id="currentTime" class="audio-time">{{
                timeObj.currentTime
            }}</span>
            <span id="totalTime" class="audio-time">{{
                timeObj.duration
            }}</span>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Progress from '../common/Progress'
export default {
    name: 'playProgressBar',
    computed: {
        ...mapGetters({
            timeObj: 'audio/getAudioTimeObj',
            playedScale: 'audio/getAudioPlayedScale',
        }),
    },
    data() {
        return {
            progressBarClass: 'play',
        }
    },
    components: {
        Progress,
    },
}
</script>

<style scoped>
#time-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
}
</style>