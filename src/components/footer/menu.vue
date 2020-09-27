<template>
    <div id="menu-container">
        <transition name="slide-fade">
            <div id="menu" v-if="$store.getters['playList/getPlayListStatus']">
                <div id="head">
                    <i class="fa fa-list-ul" aria-hidden="true"></i>
                    <h5 id="menu-title">
                        当前播放: <span id="menu-point">13</span>
                    </h5>
                    <i
                        @click="onClosed"
                        class="fa fa-times list-btn"
                        aria-hidden="true"
                    ></i>
                </div>
                <div id="list">
                    <div class="music-item">
                        <div class="music-info">
                            <h5>Awake</h5>
                            <span class="info-bar"> - </span>
                            <h6 class="author">AshenOne</h6>
                        </div>
                        <div class="item-close">
                            <i
                                class="fa fa-trash-o item-close-btn"
                                aria-hidden="true"
                            ></i>
                        </div>
                    </div>
                    <div class="music-item">
                        <div class="music-info">
                            <h5>生之爱</h5>
                            <span class="info-bar"> - </span>
                            <h6 class="author">嘎调</h6>
                        </div>
                        <div class="item-close">
                            <i
                                class="fa fa-trash-o item-close-btn"
                                aria-hidden="true"
                            ></i>
                        </div>
                    </div>
                </div>
                <div id="close">
                    <button id="close-menu-btn" @click="onClosed">关闭</button>
                </div>
            </div>
        </transition>
        <transition name="slide-fade">
            <div
                v-if="$store.getters['playList/getPlayListStatus']"
                class="background-drop"
                ref="backgroundDrop"
            ></div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {},
    methods: {
        onClosed() {
            const store = this.$store
            store.commit('playList/hide')
        },
    },
}
</script>

<style scoped>
#menu-container {
}

#menu {
    position: absolute;
    height: 500px;
    width: 440px;
    background-color: var(--background-light-color);
    margin: 0 10px 0 10px;
    bottom: 10px;
    border-radius: 5px;
    z-index: 20;
    padding: 20px;
    color: var(--text-primary-color);
    font-size: 30px;
    transition: all 0.4s ease-out;
}

.background-drop {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 10;
    opacity: 0.7;
    background-color: #000;
    transition: all 0.4s ease-out;
}

.slide-fade-enter,
.slide-fade-leave-to {
    transform: translateY(100%);
    opacity: 0;
}

h5,
h6 {
    margin: 0;
}

#head {
    display: flex;
    justify-content: space-between;
    height: 15%;
    cursor: default;
}

.list-btn {
    cursor: pointer;
}

#list {
    height: 70%;
    overflow: hidden;
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
}

.music-info > h5 {
    font-size: 16px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
}

.info-bar {
    font-size: 14px;
    margin: 0 10px 0 20px;
}

.author {
    font-family: 'Open Sans', sans-serif;
    text-transform: lowercase;
    font-weight: 400;
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
#close {
    height: 15%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
}

#close > button {
    display: flex;
    justify-content: center;
    border-radius: 50px;
    border: 1px solid var(--text-primary-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    padding: 10px;
    font-size: 15px;
    color: var(--text-primary-color);
}

#close > button:hover {
    background-color: var(--text-primary-color);
    color: var(--text-second-color);
    border: 1px solid var(--text-second-color);
}

#close > button:focus {
    outline: none;
}
</style>