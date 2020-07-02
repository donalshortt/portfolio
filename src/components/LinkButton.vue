<template>
    <div class="link-button">
        <div class="button-container">
            <a class="button" target="_blank" :href=linkDestination><span class="link-text">{{ text }}<span class="underscore">_</span></span></a>
        </div>
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
        width: 11.5%;
        height: 5em;
        margin-left: 5%;
        margin-right: 5%;
        display: flex;
        flex-flow: column nowrap;
    }

    .button-container:hover .underscore {
        animation: blinkingUnderscore .5s infinite;
        -webkit-animation: blinkingUnderscore .5s infinite;
        -moz-animation: blinkingUnderscore .5s infinite;
    }

    .button-container {
        border: 2px solid whitesmoke;
        border-radius: 5%;
        height: 90%;
        width: 100%;
        -webkit-transition: color 0.5s, background-color 0.5s, border-color 0.5s;
        -moz-transition: color 0.5s, background-color 0.5s, border-color 0.5s;
        transition: color 0.5s, background-color 0.5s, border-color 0.5s;
    }
    
    .button {
        color: whitesmoke;
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: inline-block;
    }

    .link-button.unavailable {
        opacity: .25;
        pointer-events: none;
    }

    .link-text {
        display: inline-block;
        margin-top: 1em;
        margin-left: 1em;
    }

    .button-container:hover {
        border-color: #0047b3;
        color: #0047b3;
        background-color: rgba(0,0,0, .5);
        cursor: pointer;
    }
    
    .button-container:hover + .link-tab {
        border-color: #0047b3;
    }
    
    .link-tab {
        width: 20%;
        height: 10%;
        margin-left: 70%;
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

    @media only screen and (max-width: 600px) {
        .link-button {
            width: 35%;
        }
    }
</style>