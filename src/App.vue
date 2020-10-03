<template>
    <div id="app">
        <MusicInformation></MusicInformation>
        <MusicConsole></MusicConsole>
        <!-- <div id="debug"></div>  -->
    </div>
</template>

<script>
import MusicInformation from './components/MusicInformation'
import MusicConsole from './components/MusicConsole'
export default {
    name: 'App',
    components: {
        MusicInformation,
        MusicConsole,
    },
}
</script>

<style scoped>
#app {
    height: 800px;
    width: 500px;
    background-color: var(--background-gray-color);
    padding: 40px;
}

#debug {
    width: 50%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    border-right: 1px solid #000;
}
@media screen and (max-width: 500px) {
    #app {
        height: 100vh;
        width: 100vw;
    }
}
</style>
