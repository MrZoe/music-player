import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        audio: null,
        isPlay: false,
        menu: {
            isShow: false,
        }
    },
    mutations: {
        init(state, audio) {
            state.audio = audio
        },
        changeIsPlayStatus(state, status) {
            state.isPlay = status
        },
        show(state, element) {
            if (element !== undefined) {
                // console.log(backgroundDrop, menu)
                element.backgroundDrop.style.opacity = '1'
                element.backgroundDrop.style.transform = 'translate(-20px,-500px)'
                element.menu.style.transform = 'translateY(-100%)'
                element.menu.style.opacity = '1'
                state.menu.isShow = true
            }
        },
        hide(state, element) {
            if (element !== undefined) {
                // console.log(backgroundDrop, menu)
                element.backgroundDrop.style.opacity = '0'
                element.backgroundDrop.style.transform = 'translate(-20px,500px)'
                element.menu.style.transform = 'translateY(100%)'
                element.menu.style.opacity = '0'
                state.menu.isShow = false
            }
        },
    },
    actions: {
    },
    modules: {
    }
})
