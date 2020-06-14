<template>
    <div id="project_list">
        <ProjectItem class="project_item"/>
    </div>
</template>

<script>
    import ProjectItem from "./ProjectItem";
    export default {
        name: "ProjectList",
        components: {ProjectItem}
    }
</script>

<style scoped>
    #project_list {
        height: 100%;
        width: 25%;
        background: #1a1a1a;
        border-right: whitesmoke 2px solid;
    }
</style>