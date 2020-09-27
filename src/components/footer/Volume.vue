<template>
    <div id="volume">
        <i
            @click="onMuteEvent"
            id="volume-off"
            class="fa fa-volume-off console-btn"
            aria-hidden="true"
        ></i>
        <div class="volume-wrapper">
            <div
                ref="volumeBar"
                id="volume-bar"
                class="bar"
                :style="{ width: audioVolume * 100 + '% ' }"
            ></div>
            <div
                ref="volumeDot"
                id="volume-dot"
                class="bar"
                :style="{
                    'margin-left': audioVolume * 100 + '% ',
                }"
                @mousedown="onMousedown"
            ></div>
        </div>
        <i
            @click="onMaxVolumeEvent"
            id="volume-up"
            class="fa fa-volume-up console-btn"
            aria-hidden="true"
        ></i>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'volume',
    data() {
        return {
            dot: null,
            bar: null,
        }
    },
    mounted() {
        this.dot = this.$refs.volumeDot
        this.bar = this.$refs.volumeBar
    },
    methods: {
        // 当点击 dot 按钮时, 获取当前进度条的宽度和 鼠标点击的 x 轴
        // 当鼠标移动时, 监听当前鼠标的 x 轴
        // 根据当前鼠标位置 和 上一次鼠标位置来获取 鼠标移动的距离 distance
        //  如果 distance 为正数, 代表是增加操作, 如果是负数, 代表减少操作
        //  减少操作: bar 的宽度 减去 移动的宽度
        //  增加操作:  bar 的宽度 增加 移动的宽度
        //      当前应该是的宽度 除以 总宽度 等于 进度
        onMousedown(element) {
            const bar = this.bar
            const progressWidth = bar.offsetWidth
            const startX = element.clientX
            const __this = this
            console.log('mouseDown!')
            document.onmousemove = (ele) => {
                const distance = ele.clientX - startX
                let width = Math.ceil(((progressWidth + distance) / 308) * 100)
                width = Math.max(width, 0)
                width = Math.min(width, 100)
                console.log(`当前宽度应为: ${width} / 100`)
                __this.barWidth = width + '%'
                __this.dotLeft = width + '%'
                __this.$store.commit('audio/changeAudioVolume', width / 100)
            }
            document.onmouseup = () => {
                console.log('mouseUp')
                document.onmousemove = null
                document.onmouseup = null
            }
        },
        onMaxVolumeEvent() {
            this.$store.commit('audio/changeAudioVolume', 1)
        },
        onMuteEvent() {
            this.$store.commit('audio/changeAudioVolume', 0)
        },
    },
    computed: {
        // 使用对象展开运算符将 getter 混入 computed 对象中
        ...mapGetters({
            // 把 `this.doneCount` 映射为 `this.$store.getters.doneTodosCount`
            audioVolume: 'audio/getAudioVolume',
        }),
    },
    watch: {
        audioVolume: (val) => {
            console.log(val)
        },
    },
}
</script>

<style scoped>
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
    width: 0;
}

#volume-dot {
    width: 15px;
    height: 15px;
    border-radius: 100%;
    opacity: 0.9;
    box-shadow: 0px 2px 5px #1a1919;
    transform: translateY(-70%);
    cursor: pointer;
}
</style>