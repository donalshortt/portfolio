<template>
    <div id="project-list">
        <ProjectListItem name="Portfolio" type="Front End Web" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Goose" type="Full Stack Web" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Tetris" type="Desktop" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Shell" type="Desktop" v-on:select-project="projectSelected"/>
    </div>
</template>

<script>
    import ProjectListItem from "./ProjectListItem";
    export default {
        name: "ProjectList",
        components: {ProjectListItem},
        methods: {
            projectSelected: function (name) { this.$emit("select-project", name); }
        }
    }
</script>

<style scoped>
    #project-list {
        height: 100%;
        width: 24.75%;
        background-color: rgba(0, 0, 0, .50);
        display: inline-block;
        position: absolute;
        left: 0;
        border-right: .25vw solid black;
    }
</style>