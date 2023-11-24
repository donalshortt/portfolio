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
                    tags: ["Vue.js"],
                    link: "https://donalshortt.github.io/",
                    codelink: "https://github.com/donalshortt/portfolio",
                    imgpath: "portfolio.jpg"
                },
                Goose: {
                    text: "Goose Cafe is a lunch cafe located in Dublin, Ireland. It features a responsive, interactive UI and a custom built online ordering system.",
                    tags: ["HTML/CSS", "Javascript", "JQuery", "Pug", "Node.js"],
                    link: "https://goose.cafe",
                    codelink: "unavailable",
                    imgpath: "goosecafe.jpg"
                },
                Tetris: {
                    text: "A simple Tetris clone built in Scala.",
                    tags: ["Scala"],
                    link: "unavailable",
                    codelink: "https://github.com/donalshortt/tetris",
                    imgpath: "tetris.jpg"
                },
                Shell: {
                    text: "A stripped down version of the BASH shell. I learned a lot about how operating systems work while working on this. In particular how Linux handles processes.",
                    tags: ["C", "Bash"],
                    link: "unavailable",
                    codelink: "https://github.com/donalshortt/shell",
                    imgpath: "myshell.jpg"
                },
				Kernel: {
					text: "A very simple x86_64 kernel. Built to help test the relative ease of performing transient execution attacks in a low noise environment. Includes examples of how to perform Flush+Reload and SpectreV1",
					tags: ["C"],
					link: "unavailable",
					codelink: "https://github.com/donalshorttmicrocosmOS",
					imgpath: "kernel.jpg"
				},
				MoC: {
					text: "A savefile parser and web application that parses and uploads players scores in realtime to a website. Once on the website, an administrator can add score modifiers to the players' score using the online dashboard in order to provide more interesting and dynamic Europa Universalis IV multiplayer games.",
					tags: ["Rust", "Node.js", "Vue.js"],
					link: "unavailable",
					codelink: "https://github.com/donalshortt/moc",
					imgpath: ""
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
