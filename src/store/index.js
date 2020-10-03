import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const audio = {
    namespaced: true,
    state: () => ({
        musicList: {},
        music: {},
        timeObj: {
            currentTime: '00:00',
            duration: '00:00',
        },
        audioElement: null,
        isPaused: true,
        playedScale: 0,
        volume: 0,
        duration: 0,
        timeAfterChange: 0,
    }),
    mutations: {
        initMusicList(state, musicList) {
            state.musicList = musicList
            state.music = musicList[0]
        },
        commitAudioElement(state, element) {
            state.audioElement = element
        },
        updateAudioPausedStatus(state, status) {
            state.isPaused = status
        },
        initAudioDuration(state, duration) {
            state.duration = duration
        },
        next(state) {
            const list = state.musicList
            const music = state.music
            // 下一首, 获取当前播放的歌曲的 id, 下一首的 id 是 id+1
            let id = music.id + 1
            // 处理最后一首的情况, 使歌单循环播放
            if (id === list.length) {
                id = 0
            }
            const newMusic = list[id]
            state.music = newMusic
        },
        previous(state) {
            const list = state.musicList
            const music = state.music
            // 下一首, 获取当前播放的歌曲的 id, 下一首的 id 是 id+1
            let id = music.id - 1
            // 处理 第一首的情况, 使歌单循环播放
            if (id < 0) {
                console.log(id)
                id = list.length - 1
            }
            const newMusic = list[id]
            state.music = newMusic
        },
        updateTime(state, timeObj) {
            state.timeObj = timeObj
        },
        updatePlayedScale(state, scale) {
            state.playedScale = scale
        },
        changeAudioCurrentTime(state, scale) {
            state.timeAfterChange = state.duration * scale
        },
        changeAudioVolume(state, scale) {
            state.volume = 1 * scale
        },
        selectMusic(state, music) {
            state.music = music
        },
        removeMusic(state, id) {
            const list = state.musicList
            console.log(id)
            const newList = list.filter(e => {
                return e.id !== id
            })
            state.musicList = newList

        }


    },
    getters: {
        getCurrentMusicData(state) {
            return state.music
        },
        getMusicListData(state) {
            return state.musicList
        },
        getAudioIsPaused(state) {
            return state.isPaused
        },
        getAudioTimeObj(state) {
            const timeObj = state.timeObj
            if (timeObj.duration.includes('0') === false) {
                timeObj.duration = '00:00'
            }
            return timeObj
        },
        getAudioPlayedScale(state) {
            return state.playedScale
        },
        getTimeAfterChange(state) {
            return state.timeAfterChange
        },
        getVolume(state) {
            return state.volume
        }

    }
}

const playList = {
    namespaced: 'playList',
    state: () => ({
        isShow: false,
    }),

    mutations: {
        updateIsShowStatus(state, status) {
            console.log(`update!:${status}`)
            state.isShow = status
        }
    },
    getters: {
        getPlayListIsShow(state) {
            return state.isShow
        }
    }
}

const store = new Vuex.Store({
    modules: {
        audio,
        playList,
    }
})

export default store