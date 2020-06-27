<template>
    <div id="projects">
        <ProjectList v-on:select-project="projectSelected" />
        <ProjectItem v-bind="currentlySelected" ref="projItem"/>
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
                    text: "hello this is the website Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus in augue tincidunt, non scelerisque velit varius. Suspendisse volutpat ipsum non ipsum euismod rutrum. Cras vitae euismod arcu, a ultricies risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam maximus egestas sem, in pulvinar est. Curabitur consectetur libero ut enim elementum, non feugiat ipsum feugiat. Etiam finibus velit ac nisl imperdiet elementum.",
                    tags: ["HTML", "CSS", "JS", "Vue.js"],
                    link: "https://donalshortt.github.io/",
                    codelink: "https://github.com/donalshortt/portfolio",
                    imgpath: "portfolio.png"
                },
                Goose: {
                    text: "this is goose cafe Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus in augue tincidunt, non scelerisque velit varius. Suspendisse volutpat ipsum non ipsum euismod rutrum. Cras vitae euismod arcu, a ultricies risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam maximus egestas sem, in pulvinar est. Curabitur consectetur libero ut enim elementum, non feugiat ipsum feugiat. Etiam finibus velit ac nisl imperdiet elementum.",
                    tags: ["HTML", "CSS", "JS", "JQuery", "Pug", "Node.js", "Paypal API"],
                    link: "goose.cafe",
                    imgpath: "goosecafe.png"
                },
                Tetris: {
                    text: "this is my tetris clone Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus in augue tincidunt, non scelerisque velit varius. Suspendisse volutpat ipsum non ipsum euismod rutrum. Cras vitae euismod arcu, a ultricies risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam maximus egestas sem, in pulvinar est. Curabitur consectetur libero ut enim elementum, non feugiat ipsum feugiat. Etiam finibus velit ac nisl imperdiet elementum.",
                    tags: ["Scala", "Gradle"],
                    codelink: "https://github.com/donalshortt/tetris",
                    imgpath: "tetris.png"
                },
                Shell: {
                    text: "this was a fun shell project Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam venenatis purus in augue tincidunt, non scelerisque velit varius. Suspendisse volutpat ipsum non ipsum euismod rutrum. Cras vitae euismod arcu, a ultricies risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam maximus egestas sem, in pulvinar est. Curabitur consectetur libero ut enim elementum, non feugiat ipsum feugiat. Etiam finibus velit ac nisl imperdiet elementum.",
                    tags: ["C", "Bash"],
                    codelink: "codelinkgoeshere",
                    imgpath: "turtleshell.jpg"
                }
            }
        },
        methods: {
            projectSelected: function (name) { this.current = this[name]; }
        },
        computed: {
            currentlySelected: function () { return this.current; }
        },
        mounted() {
            this.current = this.Portfolio;
        }
    }
</script>

<style scoped>
    #projects {
        position: fixed;
        z-index: 100000;
        background-color: rgba(0, 0, 0, .60);
        height: 100vh;
        width: 100vw;
    }
</style>