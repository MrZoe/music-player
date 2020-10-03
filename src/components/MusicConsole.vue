<template>
    <div id="music-console">
        <div><PlayProgressBar></PlayProgressBar></div>
        <div><PlayConsole></PlayConsole></div>
        <div><VolumeConsole></VolumeConsole></div>
        <div><PlayList></PlayList></div>
    </div>
</template>

<script>
import PlayProgressBar from './console/PlayProgressBar'
import PlayConsole from './console/PlayConsole'
import VolumeConsole from './console/VolumeConsole'
import PlayList from './console/PlayList'

import API from '../request/http-request'
export default {
    name: 'musicConsole',
    components: {
        PlayProgressBar,
        PlayConsole,
        VolumeConsole,
        PlayList,
    },
    data() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {
        async getMusicList() {
            const params = {}
            const response = await API.getMusicList(params)
            const musicList = response.data
            const store = this.$store
            store.commit('audio/initMusicList', musicList)
        },
    },
    created() {
        this.getMusicList()
    },
    mounted() {},
}
</script>

<style scoped>
#music-console {
    height: 35%;
    margin-top: 10px;
}
</style>