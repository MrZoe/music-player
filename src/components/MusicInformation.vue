<template>
    <div id="information-wrapper">
        <div class="information-head">
            <span id="info-title"> {{ music.title }}</span>
            <span class="info-spacing">-</span>
            <span id="info-author"> {{ music.author }} </span>
        </div>
        <div class="information-main">
            <img
                id="info-banner"
                :src="music.coverSrc"
                :class="{
                    paused: isPaused,
                }"
            />
        </div>
        <div class="information-footer">
            <p class="intro-message">
                {{ music.type === 100 ? '纯音乐，请欣赏' : '摇滚乐' }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Information',
    computed: {
        ...mapGetters({
            isPaused: 'audio/getAudioIsPaused',
            music: 'audio/getCurrentMusicData',
        }),
    },
}
</script>

<style scoped>
@import url('https://fonts.font.im/css?family=Ropa+Sans');
@import url('https://fonts.font.im/css?family=Open+Sans');

#information-wrapper {
    height: 65%;
    text-align: center;
}

.information-head {
    height: 50px;
    width: 100%;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

#info-title {
    font-size: 30px;
}
#info-author {
    font-family: 'Open Sans', serif;
    font-size: 20px;
}

.info-spacing {
    margin: 0 10px;
}

.information-footer > p {
    font-family: 'Open Sans', serif;
}

.intro-title {
    font-size: 25px;
    margin: 10px 0 20px 0;
}

#info-banner {
    height: 80%;
    width: 80%;
    border-radius: 100%;
    box-shadow: 0 0 15px #454545;
    margin: 20px 0;
    animation: rotate 10s linear infinite;
}

@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(90deg);
    }
    50% {
        transform: rotate(180deg);
    }
    75% {
        transform: rotate(270deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
.paused {
    animation-play-state: paused !important;
}
</style>