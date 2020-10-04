<template>
    <div class="console-item-wrapper">
        <i @click="muteEvent" class="fa fa-volume-off volume-btn"></i>
        <Progress
            :scale="volume"
            :progressBarClass="progressBarClass"
        ></Progress>
        <i @click="maxEvent" class="fa fa-volume-up volume-btn"></i>
    </div>
</template>

<script>
import Progress from '../common/Progress'
import { mapGetters } from 'vuex'
export default {
    name: 'volumeConsole',
    computed: {
        ...mapGetters({
            volume: 'audio/getVolume',
        }),
    },
    data() {
        return {
            progressBarClass: 'volume',
        }
    },
    components: {
        Progress,
    },
    methods: {
        muteEvent() {
            const store = this.$store
            store.commit('audio/changeAudioVolume', 0)
        },
        maxEvent() {
            const store = this.$store
            store.commit('audio/changeAudioVolume', 1)
        },
    },
}
</script>

<style scoped>
.console-item-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    margin: 30px 0;
}

.console-item-wrapper > div {
    width: 80% !important;
}
.volume-btn {
    cursor: pointer;
    transition: all 0.1s ease-in;
}

.volume-btn:active {
    transform: scale(1.15);
}
</style>