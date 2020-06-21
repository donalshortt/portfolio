<template>
    <div id="projects">
        <ProjectList v-on:select-project="projectSelected" />
        <ProjectItem :details="currentlySelected" ref="projItem"/>
    </div>
</template>

<script>
    import ProjectList from "../components/ProjectList";
    import ProjectItem from "../components/ProjectItem";
    export default {
        name: "Projects",
        components: {ProjectItem, ProjectList},
        data() {
            return {
                current: {},
                Portfolio: {
                    text: "hello this is the website",
                    tags: ["HTML", "CSS", "JS", "Vue.js"],
                    link: "linkgoeshere",
                    codelink: "codelinkgoeshere"
                },
                Goose: {
                    text: "this is goose cafe",
                    tags: ["HTML", "CSS", "JS", "JQuery", "Pug", "Node.js", "Paypal API"],
                    link: "linkgoeshere",
                    codelink: "codelinkgoeshere"
                },
                Tetris: {
                    text: "this is my tetris clone",
                    tags: ["Scala", "Gradle"],
                    link: "linkgoeshere",
                    codelink: "codelinkgoeshere"
                },
                Shell: {
                    text: "this was a fun shell project",
                    tags: ["C", "Bash"],
                    link: "linkgoeshere",
                    codelink: "codelinkgoeshere"
                }
            }
        },
        methods: {
            projectSelected: function (name) { this.current = this[name]; }
        },
        computed: {
            currentlySelected: function () { return this.current; }
        }
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