<template lang="pug">
    div#home
        div#content_container
            LinkDisplay(ref="linkDisp")
            WelcomeMessage(:welcomeMessage="welcomeMessage", :speed="speed", ref="welMsg")
            div#router_link_container
                router-link(to="/projects" id="projectLink") Projects
</template>

<script>
    import WelcomeMessage from "../components/WelcomeMessage";
    import LinkDisplay from "../components/LinkDisplay";
    export default {
        name: "Home",
        components: {LinkDisplay, WelcomeMessage},
        mounted() {
            this.$refs.welMsg.welcomeDisplay(this.speed);
            setTimeout(this.$refs.linkDisp.introLinks, this.welcomeMessageLength(this.welcomeMessage) * this.speed + 2000);
            setTimeout(function () {
                document.getElementById("projectLink").classList.toggle("fade")
            }, this.welcomeMessageLength(this.welcomeMessage) * this.speed + 2000);
        },
        data() {
            return {
                welcomeMessage: ["HEY I'M DONAL", "I'M A STUDENT DEVELOPER.", "BORN IN IRELAND", "LIVING IN", "AMSTERDAM", "AVAILABLE TO", "YOU :)"],
                speed: 50
            }
        },
        methods: {
            welcomeMessageLength: function (msg) {
                let count = 0;
                msg.forEach(line => {
                    count += line.length;
                })
                return count;
            }
        }
    }
</script>

<style scoped>
    #home {
        align-items: center;
        justify-content: center;
        display: flex;
        height: 100%;
        width: 100%;
        background: #333333;
        position: fixed;
        transition: background-color 1s;
    }

    #content_container {
        z-index: 100000000;
        text-align: center;
    }

    #router_link_container {
        margin-top: 8vh;
    }

    #projectLink {
        border: 2px solid whitesmoke;
        color: whitesmoke;
        text-decoration: none;
        padding: 1em;
        border-radius: 5%;
        opacity: 0;
        -webkit-transition: opacity 1.5s;
        -moz-transition: opacity 1.5s;
        transition: opacity 1.5s;
    }

    #projectLink:hover {
        border-color: #0047b3;
        color: #0047b3;
        background-color: whitesmoke;
    }

    #projectLink.fade {
        opacity: 1;
    }
</style>