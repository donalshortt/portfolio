<template>
    <div id="project-item">
        {{ this.details.text }}
    </div>
</template>

<script>
    export default {
        name: "ProjectItem",
        props: {
            details: Object
        }
    }
</script>

<style scoped>
    #project-item {
        height: 100%;
        width: 75%;
        background: red;
        position: absolute;
        right: 0;
    }
</style>