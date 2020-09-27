<template>
    <header>
        <h1 id="app-title">{{ music.album }}</h1>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            music: 'music/getMusicInStore',
        }),
    },
}
</script>

<style scoped>
@import url('https://fonts.font.im/css?family=Roboto+Condensed');

header {
    text-align: center;
    height: 10%;
}

#app-title {
    color: var(--text-primary-color);
    font-weight: 500;
    font-size: 40px;
}

h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-family: 'Roboto Condensed', sans-serif;
}
</style>