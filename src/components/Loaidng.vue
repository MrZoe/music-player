<template>
    <div v-if="!status" id="loading-container">
        <div class="loader"></div>
        <p class="message">加载中</p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'loading',
    computed: {
        ...mapGetters({
            status: 'audio/getAudioCanPlayStatus',
        }),
    },
}
</script>

<style scoped>
#loading-container {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
/*  5A5DAA E8488A 89D4E8 */
.loader {
    position: relative;
    height: 100px;
    width: 100px;
    border-top: 5px solid #5a5daa;
    border-bottom: 5px solid #5a5daa;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: rotate 0.9s linear infinite;
}

.loader::after,
.loader::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
    top: -5px;
    border-radius: 50%;
    /* background-color: #f2f22f; */
}

.loader::after {
    border-top: 5px solid #e8488a;
    transform: rotate(120deg);
}
.loader::before {
    border-top: 5px solid #89d4e8;
    transform: rotate(-120deg);
}

.message {
    font-size: 25px;
}

.message::after {
    content: '..';
    animation: content 4s linear infinite;
}
@keyframes rotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@keyframes content {
    0% {
        content: '...';
    }
    25% {
        content: '....';
    }
    50% {
        content: '.....';
    }
    75% {
        content: '......';
    }
    100% {
        content: '.......';
    }
}
</style>