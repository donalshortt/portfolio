<template>
    <div id="projects">
        <ProjectList v-on:select-project="projectSelected" ref="projList"/>
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
                    text: "This website! Built to showcase projects I'm proud of.",
                    tags: ["HTML", "CSS", "JS", "Vue.js"],
                    link: "https://donalshortt.github.io/",
                    codelink: "https://github.com/donalshortt/portfolio",
                    imgpath: "portfolio.png"
                },
                Goose: {
                    text: "Goose Cafe is a lunch cafe located in Dublin, Ireland. It features a responsive, interactive UI and a custom built online ordering system.",
                    tags: ["HTML/CSS", "JS", "JQuery", "Pug", "Node.js", "Paypal API"],
                    link: "http://goose.cafe",
                    codelink: "unavailable",
                    imgpath: "goosecafe.png"
                },
                Tetris: {
                    text: "A simple Tetris clone built in Scala. Game development is a passion of mine and I expect this portfolio to be filled with similar side projects soon.",
                    tags: ["Scala", "Gradle"],
                    link: "unavailable",
                    codelink: "https://github.com/donalshortt/tetris",
                    imgpath: "tetris.png"
                },
                Shell: {
                    text: "A stripped down version of the BASH shell. I learned a lot about how operating systems work while working on this. In particular how Linux handles processes and the linux kernel's memory management solution.",
                    tags: ["C", "Bash"],
                    link: "unavailable",
                    codelink: "https://github.com/donalshortt/shell",
                    imgpath: "turtleshell.jpg"
                }
            }
        },
        methods: {
            projectSelected: function (name) {
                const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

                if (vw < 600) { document.getElementById("project-list").style.display = "none"; }

                this.current = this[name]; 
                document.getElementById("project-item").style.display = "initial";
                document.getElementById("")
            }
        },
        computed: {
            currentlySelected: function () { return this.current; }
        },
        mounted() {
            this.current = this.Portfolio;
            this.$refs.projItem.introDisplay();
            this.$refs.projList.initialiseList();
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