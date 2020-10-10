<template>
    <div ref="progressBar" @click="progressBarOnClickEvent" id="progressbar">
        <div
            ref="currentBar"
            class="current-progress"
            :style="{ width: scale * 100 + '%' }"
        ></div>
        <div
            ref="progressDot"
            @touchstart="touchStartEvent"
            @mousedown="mouseDownEvent"
            class="dot"
            :style="{ 'margin-left': scale * 100 + '%' }"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'appProgress',
    props: {
        scale: {
            type: [Number, String],
            default: () => {
                return 0
            },
        },
        progressBarClass: {
            type: String,
            default: () => {
                return null
            },
        },
    },
    data() {
        return {
            progressBar: null,
            progressDot: null,
        }
    },
    methods: {
        progressBarOnClickEvent(e) {
            const store = this.$store
            const layerX = e.layerX
            const offsetWidth = this.progressBarWidth
            const scale = (layerX / offsetWidth).toFixed(2)
            if (this.progressBarClass === 'volume') {
                // console.log(`这是音量控制条`)
                store.commit('audio/changeAudioVolume', scale)
            } else if (this.progressBarClass === 'play') {
                // console.log(`这是播放进度条`)
                store.commit('audio/changeAudioCurrentTime', scale)
            }
        },
        //
        touchStartEvent(e) {
            // 当按钮被触摸时, 获取到进度条的总长度和当前的长度, 以及按钮在设备中的 x 轴坐标
            const store = this.$store
            const startingX = e.changedTouches[0].clientX
            const width = this.progressBarWidth
            const currentWidth = this.currentBar.offsetWidth
            console.log('touchStart')
            document.ontouchmove = (event) => {
                //  当拖动时, 获取到当前手指在 dom 上的 x 轴坐标
                //      当前的坐标减去起始的坐标就是移动的距离
                const currentX = event.changedTouches[0].clientX
                const distance = currentX - startingX
                //  进度条当前的长度加上移动的距离就是新的长度
                let offset = (currentWidth + distance).toFixed(2)
                //  设置边界
                offset = Math.max(offset, 0)
                offset = Math.min(offset, width)
                //  新的长度除以总长度就是新的比例
                const scale = (offset / width).toFixed(2)
                console.log(
                    `总长度:${width}, 当前长度:${offset}, 比例:${scale} `
                )
                if (this.progressBarClass === 'volume') {
                    store.commit('audio/changeAudioVolume', scale)
                } else if (this.progressBarClass === 'play') {
                    // console.log(`这是播放进度条`)
                    store.commit('audio/changeAudioCurrentTime', scale)
                }
            }
            document.ontouchend = () => {
                document.ontouchmove = null
                document.ontouchend = null
            }
        },
        mouseDownEvent(e) {
            // 当按钮被点击时, 获取到进度条的总长度和当前的长度, 以及按钮在设备中的 x 轴坐标
            const store = this.$store
            const startingX = e.clientX
            const width = this.progressBarWidth
            const currentWidth = this.currentBar.offsetWidth
            console.log('mousedown')
            document.onmousemove = (event) => {
                //  当拖动时, 获取到当前指针在 dom 上的 x 轴坐标
                //      当前的坐标减去起始的坐标就是移动的距离
                console.log('mousemove')
                const currentX = event.clientX
                const distance = currentX - startingX
                //  进度条当前的长度加上移动的距离就是新的长度
                let offset = (currentWidth + distance).toFixed(2)
                //  设置边界
                offset = Math.max(offset, 0)
                offset = Math.min(offset, width)
                //  新的长度除以总长度就是新的比例
                const scale = (offset / width).toFixed(2)
                console.log(
                    `总长度:${width}, 当前长度:${offset}, 比例:${scale} `
                )
                if (this.progressBarClass === 'volume') {
                    store.commit('audio/changeAudioVolume', scale)
                } else if (this.progressBarClass === 'play') {
                    // console.log(`这是播放进度条`)
                    store.commit('audio/changeAudioCurrentTime', scale)
                }
            }
            document.onmouseup = () => {
                document.onmousemove = null
                document.onmouseup = null
            }
        },
    },
    mounted() {
        this.progressBar = this.$refs.progressBar
        this.progressDot = this.$refs.progressDot
        this.currentBar = this.$refs.currentBar
        this.progressBarWidth = this.progressBar.offsetWidth
    },
}
</script>

<style scoped>
#progressbar {
    width: 100%;
    height: 5px;
    background-color: var(--background-dark-color);
    position: relative;
}

.current-progress {
    height: 100%;
    background-color: var(--text-middle-color);
}

.dot {
    cursor: pointer;
    position: absolute;
    top: 0;
    transform: translate(-10%, -30%);
    height: 15px;
    width: 15px;
    border-radius: 100%;
    background-color: var(--text-primary-color);
    box-shadow: 0 0 5px #454545;
}
</style>