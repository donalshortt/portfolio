<template>
    <div class="link-button">
        <a class="button" target="_blank" :href=linkDestination>{{ text }}<span class="underscore">_</span></a>
        <div class="link-tab"></div>
    </div>
</template>

<script>
    export default {
        name: "LinkButton",
        props: {
            link: String,
            text: {
                type: String,
                required: true
            }
        },
        mounted() { this.checkAvailable(); },
        computed: {
            linkDestination: function () { return this.link; }
        },
        methods: {
            checkAvailable: function () {
                let linkUnavailable = this.link === "unavailable";
                let linkCurrentlyUnavailable = this.$el.classList.contains("unavailable");
                
                if ((linkUnavailable && !linkCurrentlyUnavailable) || (!linkUnavailable && linkCurrentlyUnavailable)) {
                    this.$el.classList.toggle("unavailable");
                } 
            }
        },
        watch: {
            link: function () { this.checkAvailable() }
        }
    }
</script>

<style scoped>
    @import "../../src/assets/css/underscoreAnimation.css";
    
    .link-button {
        width: 7.5%;
        height: 40%;
        margin-left: 5%;
        margin-right: 5%;
        display: flex;
        flex-flow: column nowrap;
    }

    .link-button:hover .underscore {
        animation: blinkingUnderscore .5s infinite;
        -webkit-animation: blinkingUnderscore .5s infinite;
        -moz-animation: blinkingUnderscore .5s infinite;
    }
    
    .button {
        border: 2px solid whitesmoke;
        color: whitesmoke;
        text-decoration: none;
        padding: 1em;
        padding-bottom: 2em;
        border-radius: 5%;
        width: 100%;
        height: 200%;
        display: block;
        -webkit-transition: color 0.5s, background-color 0.5s, border-color 0.5s;
        -moz-transition: color 0.5s, background-color 0.5s, border-color 0.5s;
        transition: color 0.5s, background-color 0.5s, border-color 0.5s;
    }

    .link-button.unavailable {
        opacity: .25;
        pointer-events: none;
    }

    .button:hover {
        border-color: #0047b3;
        color: #0047b3;
        background-color: rgba(245,245,245, 1);
        cursor: pointer;
    }
    
    .button:hover + .link-tab {
        border-color: #0047b3;
    }
    
    .link-tab {
        width: 1.5em;
        height: .45em;
        margin-left: 95%;
        border-top-left-radius: 25%;
        border-top-right-radius: 25%;
        border-top: 2px solid whitesmoke;
        border-left: 2px solid whitesmoke;
        border-right: 2px solid whitesmoke;
        display: block;
        order: -1;
        -webkit-transition: border-color 0.5s;
        -moz-transition:border-color 0.5s;
        transition: border-color 0.5s;
    }
</style>