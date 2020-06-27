<template>
    <div id="link-display">
        <font-awesome-icon :icon="['fab', 'github-square']" class="icon" id="icn1"/>
        <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" id="icn2"/>
        <font-awesome-icon :icon="['far', 'address-book']" class="icon" id="icn3"/>
    </div>
</template>

<script>
    export default {
        name: "LinkDisplay",
        methods: {
            introLinks: function () {
                setTimeout(function () {document.getElementById("icn1").classList.toggle("fade")}, 0);
                setTimeout(function () {document.getElementById("icn2").classList.toggle("fade")}, 250);
                setTimeout(function () {document.getElementById("icn3").classList.toggle("fade")}, 500);
            }
        }
    }
</script>

<style scoped>
    #link-display {
        display: flex;
        justify-content: space-between;
        padding-left: 10%;
        padding-right: 10%;
    }

    .icon {
        z-index: 100000;
        color: whitesmoke;
        height: 2em;
        width: 2em;
        cursor: pointer;
        opacity: 0;
        -webkit-transition: opacity 1s, color 0.5s;
        -moz-transition: opacity 1s, color 0.5s;
        transition: opacity 1s, color 0.5s;
    }

    .fade {
        opacity: 1;
    }

    .icon:hover {
        animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        -moz-animation: bounce 2s infinite;
        color: #0047b3;
    }

    @-webkit-keyframes bounce {
        0%,
        100% {
            -webkit-transform: translateY(0);
        }
        50% {
            -webkit-transform: translateY(-10px);
        }
    }
    @-moz-keyframes bounce {
        0%,
        100% {
            -moz-transform: translateY(0);
        }
        50% {
            -moz-transform: translateY(-10px);
        }
    }
    @keyframes bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
</style>