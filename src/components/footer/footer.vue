<template>
    <footer>
        <Progress></Progress>
        <Console></Console>
        <Volume></Volume>
        <OtherControls></OtherControls>
    </footer>
</template>

<script>
import Progress from './Progress'
import Console from './Console'

import Volume from './Volume'
import OtherControls from './OtherControls'
export default {
    data() {
        return {}
    },
    methods: {},
    components: {
        Progress,
        Console,
        Volume,
        OtherControls,
    },
}
</script>

<style>
footer {
    height: 40%;
}

footer > div {
    margin: 50px 0;
}

.bar {
    height: 100%;
    width: 100px;
    background-color: var(--text-primary-color);
}

.console-btn {
    color: var(--text-primary-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.console-btn:hover {
    transform: scale(1.1);
    text-shadow: 5px 0 15px rgb(146, 146, 146);
}
</style>