<template>
    <div id="project-list">
        <div id="back-link-container">
            <a href="/#/">Back</a>
            <div id="link-display-container">
                <LinkDisplay ref="linkDisp"></LinkDisplay>
            </div>
        </div>
        <ProjectListItem name="Portfolio" type="Front End Web" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Goose" type="Full Stack Web" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Tetris" type="Desktop" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Shell" type="Desktop" v-on:select-project="projectSelected"/>
    </div>
</template>

<script>
    import ProjectListItem from "./ProjectListItem";
    import LinkDisplay from "./LinkDisplay";
    export default {
        name: "ProjectList",
        components: {LinkDisplay, ProjectListItem},
        methods: {
            projectSelected: function (name) { this.$emit("select-project", name); },
            initialiseList: function () {
                this.$refs.linkDisp.introLinks(); }
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

    #back-link-container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 5%;
        margin-bottom: 5%;
    }

    #link-display-container {
        width: 55%;
    }

    a {
        border: 2px solid whitesmoke;
        color: whitesmoke;
        text-decoration: none;
        padding: 1em;
        border-radius: 5%;
        -webkit-transition: opacity 1.5s;
        -moz-transition: opacity 1.5s;
        transition: opacity 1.5s;
        width: 15%;
        height: .7em;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-left: 5%;
        margin-right: 5%;
    }

    a:hover {
        border-color: #0047b3;
        color: #0047b3;
        background-color: whitesmoke;
        cursor: pointer;
    }
</style>