<template lang="pug">
    div#routerLink
        router-link(to="../projects" id="projectLink") Projects
</template>

<script>
    export default {
        name: "RouterLink",
        methods: {
            displayLink: function () {
                document.getElementById("projectLink").classList.toggle("fade")
            }
        }
    }
</script>

<style scoped>
   
</style>