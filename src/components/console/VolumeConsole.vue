<template>
    <div class="console-item-wrapper">
        <i class="fa fa-volume-off"></i>
        <Progress
            :scale="volume"
            :progressBarClass="progressBarClass"
        ></Progress>
        <i class="fa fa-volume-up"></i>
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
</style>