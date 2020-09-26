<template>
    <div id="menu-container">
        <div id="menu" ref="musicListMenu">
            <div id="head">
                <i class="fa fa-list-ul" aria-hidden="true"></i>
                <h5 id="menu-title">
                    当前播放: <span id="menu-point">13</span>
                </h5>
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
            <div id="list">
                <div class="music-item">
                    <div class="music-info">
                        <h5>Awake</h5>
                        <span class="info-bar"> - </span>
                        <h6 class="author">AshenOne</h6>
                    </div>
                    <i
                        class="fa fa-times item-close-btn"
                        aria-hidden="true"
                    ></i>
                </div>
                <div class="music-item">
                    <div class="music-info">
                        <h5>生之爱</h5>
                        <span class="info-bar"> - </span>
                        <h6 class="author">嘎调</h6>
                    </div>
                    <i
                        class="fa fa-times item-close-btn"
                        aria-hidden="true"
                    ></i>
                </div>
                <div class="music-item">
                    <div class="music-info">
                        <h5>Fantasia in D minor, K.397:Andante</h5>
                        <span class="info-bar"> - </span>
                        <h6 class="author">AshenOne</h6>
                    </div>
                    <i
                        class="fa fa-times item-close-btn"
                        aria-hidden="true"
                    ></i>
                </div>
            </div>
            <div id="close">
                <button id="close-menu-btn" @click="onClosed">关闭</button>
            </div>
        </div>
        <div class="background-drop" ref="backgroundDrop"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    mounted() {
        this.initMusicList()
    },
    methods: {
        onClosed() {
            console.log('onClosed!')
            const backgroundDrop = this.$refs.backgroundDrop
            const menu = this.$refs.musicListMenu
            if (menu !== undefined) {
                // console.log(backgroundDrop, menu)
                const element = {
                    backgroundDrop,
                    menu,
                }
                this.$store.commit('hide', element)
            }
        },
        initMusicList() {
            this.onClosed()
        },
    },
    props: {
        isShow: {
            type: Boolean,
            default: () => {
                return false
            },
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
    transition: all 0.7s ease-out;
}

.background-drop {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    transform: translateX(-20px);
    z-index: 10;
    opacity: 0.7;
    background-color: #000;
    transition: all 0.7s ease-out;
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

#list {
    height: 70%;
    overflow: hidden;
}

.music-item {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    border-bottom: 1px solid var(--background-gray-color);
    padding: 5px 10px;
    cursor: pointer;
    transition: all 0.3s ease-in;
    border-radius: 5px;
}

.music-item:hover {
    background-color: var(--background-dark-color);
    color: #fff;
}

.music-info {
    display: flex;
    justify-content: flex-start;
    line-height: 48px;
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
    transition: all 0.3s ease-in;
    padding: 0 10px;
    line-height: 40px;
}

.item-close-btn:hover {
    transform: rotateZ(180deg);
    border-right: 2px solid;
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