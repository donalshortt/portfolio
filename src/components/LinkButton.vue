<template>
    <a class="link-button" target="_blank" :href=linkDestination>{{ text }}</a>
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
                if (this.link === "unavailable" && !this.$el.classList.contains("unavailable")) {
                    this.$el.classList.toggle("unavailable");
                } else if (this.link !== "unavailable" && this.$el.classList.contains("unavailable")) {
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
    .link-button {
        border: 2px solid whitesmoke;
        color: whitesmoke;
        text-decoration: none;
        padding: 1em;
        border-radius: 5%;
        -webkit-transition: opacity 1.5s;
        -moz-transition: opacity 1.5s;
        transition: opacity 1.5s;
        width: 10%;
        height: 2em;
        margin-left: 5%;
        margin-right: 5%;
        display: inline-block;
    }

    .link-button.unavailable {
        opacity: .25;
        pointer-events: none;
    }

    .link-button:hover {
        border-color: #0047b3;
        color: #0047b3;
        background-color: whitesmoke;
        cursor: pointer;
    }
</style>