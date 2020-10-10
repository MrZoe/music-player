<template>
    <div id="app">
        <Loading></Loading>
        <MusicInformation></MusicInformation>
        <MusicConsole></MusicConsole>
        <!-- <div id="debug"></div>  -->
    </div>
</template>

<script>
import MusicInformation from './components/MusicInformation'
import MusicConsole from './components/MusicConsole'
// loading 组件
import Loading from './components/Loaidng'
export default {
    name: 'App',
    components: {
        MusicInformation,
        MusicConsole,
        Loading,
    },
}
</script>

<style scoped>
#app {
    position: relative;
    height: 95vh;
    width: 450px;
    background-color: var(--background-gray-color);
    padding: 30px;
    -webkit-tap-highlight-color: transparent;
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
        padding: 40px;
    }
}
</style>
