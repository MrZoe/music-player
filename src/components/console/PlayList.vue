<template>
    <div class="console-item-wrapper">
        <i class="fa fa-heart-o list-btn"></i>
        <i @click="openPlayList" class="fa fa-list list-btn"></i>
        <transition name="slide-fade">
            <div v-if="isShow" id="menu-wrapper">
                <div id="menu-play-list">
                    <div id="list-header">
                        <i
                            class="fa fa-list-ul list-btn"
                            aria-hidden="true"
                        ></i>
                        <h3 id="header-title">
                            当前播放:
                            <span id="title-point">
                                {{ musicList.length }}
                            </span>
                        </h3>
                        <i
                            @click="closePlayListEvent"
                            class="fa fa-times list-btn"
                            aria-hidden="true"
                        ></i>
                    </div>
                    <div id="list-content">
                        <div
                            v-for="music in musicList"
                            :key="music.id"
                            class="music-item"
                        >
                            <div
                                @click="selectMusicEvent(music.id)"
                                class="music-info"
                            >
                                <h5>{{ music.title }}</h5>
                                <span class="info-bar"> - </span>
                                <h6 class="author">{{ music.author }}</h6>
                            </div>
                            <div
                                @click="removeMusicEvent(music.id)"
                                class="item-close"
                            >
                                <i
                                    class="fa fa-trash-o item-close-btn"
                                    aria-hidden="true"
                                ></i>
                            </div>
                        </div>
                    </div>
                    <button @click="closePlayListEvent" id="menu-close-button">
                        关闭
                    </button>
                </div>
                <div id="menu-background-drop"></div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'playList',
    computed: {
        ...mapGetters({
            isShow: 'playList/getPlayListIsShow',
            musicList: 'audio/getMusicListData',
        }),
    },
    methods: {
        openPlayList() {
            const store = this.$store
            store.commit('playList/updateIsShowStatus', true)
        },
        closePlayListEvent() {
            const store = this.$store
            store.commit('playList/updateIsShowStatus', false)
        },
        selectMusicEvent(id) {
            const store = this.$store
            this.musicList.forEach((music) => {
                if (music.id === id) {
                    store.commit('audio/selectMusic', music)
                    return true
                }
            })
        },
        removeMusicEvent(id) {
            const store = this.$store
            store.commit('audio/removeMusic', id)
        },
    },
}
</script>

<style scoped>
.console-item-wrapper {
    display: flex;
    justify-content: space-between;
    font-size: 25px;
}

#menu-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    transition: all 0.3s ease-in-out;
}
.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(100%);
    opacity: 0;
}
#menu-play-list {
    position: absolute;
    height: 500px;
    width: 90%;
    bottom: 10px;
    margin: 0 5%;
    padding: 30px;
    border-radius: 10px;
    background-color: var(--background-light-color);
    z-index: 20;
}

#list-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.list-btn {
    font-size: 25px;
    cursor: pointer;
    transition: all 0.2s ease-in;
}

.list-btn:hover {
    transform: rotate(360deg) scale(1.1);
    text-shadow: 2px 2px 5px rgb(110, 110, 110);
}

#list-content {
    height: 80%;
    padding: 20px 0;
}

.music-item {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    border-bottom: 1px solid var(--background-gray-color);
    cursor: pointer;
    transition: all 0.2s ease-in;
    border-radius: 5px;
    line-height: 48px;
    padding-left: 10px;
}
.music-item:hover {
    background-color: var(--background-dark-color);
    color: #fff;
}
.music-info {
    display: flex;
    justify-content: flex-start;
    width: 85%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.music-info > h5 {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
    margin: 0;
}
.info-bar {
    font-size: 14px;
    margin: 0 5px;
}
.author {
    font-family: 'Open Sans', sans-serif;
    text-transform: lowercase;
    font-weight: 400;
    margin: 0;
}

.item-close {
    width: 10%;
}
.item-close-btn {
    font-size: 20px;
    cursor: pointer;
    padding: 0 10px;
    line-height: 20px;
    transition: all 0.3s ease-in;
    border-left: 1px solid var(--background-dark-color);
}
.item-close:hover .item-close-btn {
    border-left: 1px solid #fff;
}

#header-title {
    margin: 0;
}

#menu-close-button {
    width: 100%;
    padding: 10px;
    background-color: var(--background-light-color);
    border-radius: 50px;
    border: 1px solid var(--text-primary-color);
    font-size: 14px;
    color: var(--text-primary-color);
    bottom: 0;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
}

#menu-close-button:focus {
    border: none;
    outline: none;
}

#menu-close-button:hover {
    background-color: var(--text-primary-color);
    color: var(--text-second-color);
    border: 1px solid var(--text-second-color);
}

#menu-background-drop {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: #000;
    opacity: 0.5;
    z-index: 10;
}
</style>