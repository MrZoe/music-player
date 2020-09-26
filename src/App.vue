<template>
    <div id="app">
        <Main></Main>
    </div>
</template>

<script>
import Main from './components/index'
export default {
    name: 'App',
    components: {
        Main,
    },
}
</script>

<style>
#app {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
