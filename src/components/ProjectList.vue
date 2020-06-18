<template>
    <div id="project-list">
        <ProjectListItem name="Portfolio" type="Front End Web" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Goose Café" type="Full Stack Web" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Tetris" type="Desktop" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Bash Shell" type="Desktop" v-on:select-project="projectSelected"/>
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
        width: 25%;
        background: #1a1a1a;
        border-right: black 2px solid;
        margin-right: 0;
        display: inline-block;
    }
</style>