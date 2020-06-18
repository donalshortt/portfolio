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
        width: 70%;
        background: red;
        border-right: black 2px solid;
        display: inline-block;
        top: 0;
    }
</style>