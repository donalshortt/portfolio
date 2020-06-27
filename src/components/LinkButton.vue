<template>
    <div class="link-button">{{ text }}</div>
</template>

<script>
    export default {
        name: "LinkButton",
        props: {
            link: {
                type: String,
                required: true
            },
            text: {
                type: String,
                required: true
            }
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

    .link-button:hover {
        border-color: #0047b3;
        color: #0047b3;
        background-color: whitesmoke;
        cursor: pointer;
    }
</style>