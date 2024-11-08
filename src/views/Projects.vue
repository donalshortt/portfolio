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
		// eslint-disable-next-line
        name: "Projects",
        components: {ProjectItem, ProjectList},
        data() {
            return {
                current: {},
                Portfolio: {
                    text: "This website! Built to showcase projects I'm proud of.",
                    tags: ["HTML", "CSS", "Javascript", "Vue.js"],
                    link: "https://donalshortt.github.io/",
                    codelink: "https://github.com/donalshortt/portfolio",
                    imgpath: "portfolio.jpg"
                },
                Goose: {
                    text: "Goose Cafe is a lunch cafe located in Dublin, Ireland. It's website features a responsive, interactive UI and a custom built online ordering system.",
                    tags: ["HTML/CSS", "Javascript", "JQuery", "Pug", "Node.js"],
                    link: "unavailable",
                    codelink: "unavailable",
                    imgpath: "goosecafe.jpg"
                },
                RevolVR: {
                    text: "RevolVR is a prototype game made for VR using Unity to explore evolutionary outcomes when a human is directly involved in the evolutionary process.",
                    tags: ["C#", "Python", "Unity"],
                    link: "unavailable",
                    codelink: "https://github.com/donalshortt/RevolVR",
                    imgpath: "revolvr.jpg"
                },
                Shell: {
                    text: "A stripped down version of the BASH shell. I learned a lot about how operating systems work while working on this. In particular how Linux handles processes.",
                    tags: ["C", "Bash"],
                    link: "unavailable",
                    codelink: "https://github.com/donalshortt/shell",
                    imgpath: "myshell.jpg"
                },
				Kernel: {
					text: "A simple kernel made from scratch for the x86_64 architecture. Made to demonstrate the relative ease one can perform transient execution attacks in a low noise environment. Two attack examples are included, Flush+Reload & SpectreV1.",
					tags: ["C", "Assembly"],
					link:"unavailable",
					codelink: "https://github.com/donalshortt/microcosmOS",
					imgpath: "kernel.jpg"
				},
				MoC: {
					text: "An application to run tournaments for the game Europa Universalis IV (EU4). Includes a web frontend and backend, and a TUI for monitoring EU4 gamestate.",
					tags: ["Vue", "Node.js", "Rust"],
					link: "unavailable",
					codelink: "https://github.com/donalshortt/moc",
					imgpath: "moc.jpg"
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
