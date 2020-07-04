<template lang="pug">
    div#home
        div#content-container
            div#link-display-container
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
                document.getElementById("routerLink").classList.toggle("fade")
            }, animateDelay);
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

    #link-display-container {
        padding-left: 20%;
        padding-right: 20%;
    }

    #content-container {
        z-index: 100000000;
        text-align: center;
    }
    
    #routerLink {
        margin-top: 6vh;
        opacity: 0;
        -webkit-transition: opacity 1.5s, background-color 1s;
        -moz-transition: opacity 1.5s, background-color 1s;
        transition: opacity 1.5s, background-color 1s;
    }

    #projectLink {
        border: 2px solid whitesmoke;
        color: whitesmoke;
        text-decoration: none;
        padding: 1em;
        border-radius: 5%;
        -webkit-transition: color 0.5s, background-color 0.5s, border-color 0.5s;
        -moz-transition: color 0.5s, background-color 0.5s, border-color 0.5s;
        transition: color 0.5s, background-color 0.5s, border-color 0.5s;
    }

    #projectLink:hover {
        border-color: #0047b3;
        color: #0047b3;
        background-color: whitesmoke;
    }

    #routerLink.fade {
        opacity: 1;
    }

    @media only screen and (max-width: 600px) {
        #home {
            font-size: .75em;
        }
    }
</style>