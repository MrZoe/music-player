<template>
    <footer>
        <div id="progressbar">
            <div id="current" class="console-btn porgress-time">00:03</div>
            <div class="bar"></div>
            <div id="end" class="console-btn porgress-time">05:33</div>
        </div>
        <div id="console">
            <i class="fa fa-backward console-btn" aria-hidden="true"></i>
            <i
                @click="onPlay"
                class="fa fa-play console-btn"
                aria-hidden="true"
            ></i>
            <i class="fa fa-forward console-btn" aria-hidden="true"></i>
        </div>
        <div id="volume">
            <i
                id="volume-off"
                class="fa fa-volume-off console-btn"
                aria-hidden="true"
            ></i>
            <div class="volume-wrapper">
                <div id="volume-bar" class="bar"></div>
                <div id="volume-dot" class="bar"></div>
            </div>
            <i
                id="volume-up"
                class="fa fa-volume-up console-btn"
                aria-hidden="true"
            ></i>
        </div>
        <div id="list">
            <i class="fa fa-heart-o console-btn" aria-hidden="true"></i>
            <i class="fa fa-share console-btn" aria-hidden="true"></i>
            <i
                @click="openMusicList"
                class="fa fa-list-ul console-btn"
                aria-hidden="true"
            ></i>
        </div>
    </footer>
</template>

<script>
export default {
    methods: {
        onPlay() {
            console.log('onPlay!')
            const audio = this.$store.state.audio
            // console.log(audio)
            const isPlayStatus = this.$store.state.isPlay
            if (isPlayStatus === false) {
                const status = true
                this.$store.commit('changeIsPlayStatus', status)
                audio.play()
            } else {
                const status = false
                this.$store.commit('changeIsPlayStatus', status)
                audio.pause()
            }
        },
        openMusicList() {
            const backgroundDrop = this.$refs.backgroundDrop
            const menu = this.$refs.musicListMenu

            const element = {
                backgroundDrop,
                menu,
            }
            this.store.state.commit('show', element)
        },
    },
}
</script>

<style scoped>
footer {
    height: 40%;
}

footer > div {
    margin: 50px 0;
}

#progressbar {
    height: 5px;
    width: 80%;
    margin: 0 auto;
    background-color: var(--background-dark-color);
    display: flex;
    position: relative;
}

.porgress-time {
    margin: 10px;
    position: absolute;
}
#current {
    left: 0;
}
#end {
    right: 0;
}

.bar {
    height: 100%;
    width: 100px;
    background-color: var(--text-primary-color);
}

.parting-line {
    width: 80%;
    height: 2px;
    background-color: var(--text-second-color);
    margin: 20px auto;
}

#console {
    font-size: 50px;
    display: flex;
    justify-content: space-around;
}

.console-btn {
    color: var(--text-primary-color);
}

#volume {
    display: flex;
    width: 80%;
    margin: 0 auto;
}

.volume-wrapper {
    height: 5px;
    width: 85%;
    background-color: var(--background-light-color);
    position: relative;
    margin: 0 auto;
}

#volume-off {
    transform: translateY(-35%);
}
#volume-up {
    transform: translateY(-35%);
}
#volume-bar {
    width: 50%;
}

#volume-dot {
    width: 20px;
    height: 20px;
    border-radius: 100%;
    opacity: 0.9;
    box-shadow: 0px 2px 5px #1a1919;
    transform: translateY(-60%);
    margin-left: 50%;
}

#list {
    font-size: 25px;
    display: flex;
    justify-content: space-around;
}
</style>