<template lang="pug">
    div#home
            div#content-container
                LinkDisplay(ref="linkDisp")
                WelcomeMessage(:welcomeMessage="welcomeMessage", :speed="speed", ref="welMsg")
                div#routerLink
                    router-link(to="../projects" id="projectLink") Projects
</template>

<script>
    import WelcomeMessage from "../components/WelcomeMessage";
    import LinkDisplay from "../components/LinkDisplay";
    
    export default {
        name: "Home",
        components: {LinkDisplay, WelcomeMessage},
        mounted() {
            let animateDelay = this.welcomeMessageLength(this.welcomeMessage) * this.speed + 2000;
            this.$refs.welMsg.welcomeDisplay(this.speed);
            setTimeout(this.$refs.linkDisp.introLinks, animateDelay);
            setTimeout(function () {
                document.getElementById("projectLink").classList.toggle("fadein")
                sessionStorage.setItem("animated" , "true");
            }, animateDelay);
        },
        deactivated() {
            document.getElementById("projectLink").style.opacity = 1;
            document.getElementById("icn1").style.opacity = 1;
            document.getElementById("icn2").style.opacity = 1;
            document.getElementById("icn3").style.opacity = 1;
        },
        data() {
            return {
                welcomeMessage: ["HEY I'M DONAL", "I'M A STUDENT DEVELOPER.", "BORN IN IRELAND", "LIVING IN", "AMSTERDAM", "AVAILABLE TO", "YOU :)"],
                speed: 50,
            }
        },
        methods: {
            welcomeMessageLength: function (msg) {
                let count = 0;
                msg.forEach(line => { count += line.length; })
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
        -webkit-transition: opacity 1.5s, background-color 1s;
        -moz-transition: opacity 1.5s, background-color 1s;
        transition: opacity 1.5s, background-color 1s;
    }

    #content-container {
        z-index: 100000000;
        text-align: center;
    }

    #content-container.fadeout {
        opacity: 0;
    }
    
    #routerLink {
        margin-top: 4vh;
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

    #projectLink.fadein {
        opacity: 1;
    }
</style>