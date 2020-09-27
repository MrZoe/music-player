import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const audio = {
    namespaced: true,
    state: () => ({
        audio: null,
        isPlay: false,
        progress: '0%',
        bar: null,
        currentTime: '00:00',
        totalTime: '00:00',
        volume: 0.2,
        barOffSetWidth: null,
    }),
    mutations: {
        init(state, audio) {
            state.audio = audio
        },
        audioControlProgram(state) {
            console.log('onPlay!')
            const audio = state.audio
            const isPlay = state.isPlay
            if (isPlay === false) {
                state.isPlay = true
                audio.play()
            } else {
                state.isPlay = false
                audio.pause()
            }
        },
        changeAudioProgress(state, currentTime) {
            const currentPercentage = `${currentTime}%`
            state.progress = currentPercentage
            // console.log(`当前播放进度: ${state.progress}`)
        },
        initBar(state, element) {
            state.bar = element
        },
        changeTime(state, timeObj) {
            state.currentTime = timeObj.currentTime
            state.totalTime = timeObj.totalTime
        },
        changeAudioVolume(state, volume) {
            state.volume = volume
            console.log('change')
        },
    },
    getters: {
        getAudioElement(state) {
            return state.audio
        },
        getAudioPlayStatus(state) {
            console.log(`getStatus ${state.isPlay}`)
            return state.isPlay
        },
        getAudioCurrentPercentage(state) {
            return state.progress
        },
        getAudioCurrentTime(state) {
            return state.currentTime
        },
        getAudioTotalTime(state) {
            return state.totalTime
        },
        getAudioVolume(state) {
            return state.volume
        }
    }
}

const playList = {
    namespaced: true,
    state: () => ({
        isShow: false,
    }),
    mutations: {
        show(state) {
            state.isShow = true
            console.log(state.isShow)
        },
        hide(state) {
            state.isShow = false
            console.log(state.isShow)
        },
    },
    getters: {
        getPlayListStatus(state) {
            const isShow = state.isShow
            console.log(isShow)
            return isShow
        }
    }
}

const music = {
    namespaced: true,
    state: () => ({
        data: {
            coverImgSrc: null,
            musicSrc: null,
            musicName: null,
            singer: null,
        },
    }),
    mutations: {
        initMusic(state, music) {
            state.data = music
        }
    },
    getters: {
        getMusicInStore(state) {
            return state.data
        }
    }
}

const store = new Vuex.Store({
    modules: {
        audio,
        playList,
        music,
    }
})

export default store