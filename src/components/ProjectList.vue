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
        <ProjectListItem name="RevolVR" type="Desktop" v-on:select-project="projectSelected"/>
        <ProjectListItem name="Shell" type="Desktop" v-on:select-project="projectSelected"/>
		<ProjectListItem name="Kernel" type="OS" v-on:select-project="projectSelected"/>
		<ProjectListItem name="MoC" type="Desktop" v-on:select-project="projectSelected"/>
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
            initialiseList: function () { this.$refs.linkDisp.introLinks(); }
        }
    }
</script>

<style scoped>
    #project-list {
        height: 100%;
        width: 25%;
        background-color: rgba(0, 0, 0, .50);
        display: inline-block;
        position: absolute;
        left: 0;
        overflow-y: auto;
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
        -webkit-transition: color 0.5s, background-color 0.5s, border-color 0.5s;
        -moz-transition: color 0.5s, background-color 0.5s, border-color 0.5s;
        transition: color 0.5s, background-color 0.5s, border-color 0.5s;
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

    @media only screen and (max-width: 600px) {
        #project-list {
            width: 100%;   
        }
    }
</style>
