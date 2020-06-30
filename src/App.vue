<template lang="pug">
    div#app
        video(autoplay muted loop)
            source(src="./assets/outputCityscape1000.mp4" type="video/mp4")
        keep-alive
            router-view
</template>

<script>
import Home from "./views/Home";

export default {
    name: 'App',
    components: {
        Home
    }
}
</script>

<style>
    body {
        margin: 0;
        font-family: 'PT Mono', monospace;
    }
    
    video {
        position: fixed;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
    }
    
    #app {
        padding: 0;
        height: 100vh;
        width: 100vw;
    }
    
    
    .fade-enter-active,  .fade-leave-active {
        transition: opacity .25s;
    }
    
    .fade-enter, .fade-leave-to {
        transition: opacity .25s;
        opacity: 0;
    }

</style>
