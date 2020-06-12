<template lang="pug">
    div#home
        div#content_container
            LinkDisplay(ref="linkDisp")
            WelcomeMessage(:welcomeMessage="welcomeMessage", :speed="speed", ref="welMsg")
            router-link(to="/projects") Projects
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
    }
</style>