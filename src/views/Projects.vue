<template>
    <div id="projects">
        <ProjectList />
        <div id="project_item_container"></div>
    </div>
</template>

<script>
    import ProjectList from "../components/ProjectList";
    export default {
        name: "Projects",
        components: {ProjectList}
    }
</script>

<style scoped>
    #projects {
        position: fixed;
        z-index: 100000;
        background-color: rgba(0, 0, 0, .75);
        height: 100vh;
        width: 100vw;
    }
</style>