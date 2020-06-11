<template lang="pug">
    div#home
        div#content_container
            div#link_icon_container
            WelcomeMessage
        <!--        router-link(to="/projects") Projects-->
</template>

<script>

    import WelcomeMessage from "../components/WelcomeMessage";
    export default {
        name: "Home",
        components: {WelcomeMessage}
    }
</script>

<style scoped>
    
</style>