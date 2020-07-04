<template>
    <div id="link-display">
        <font-awesome-icon @click="goGithub" :icon="['fab', 'github-square']" class="icon" id="icn1"/>
        <font-awesome-icon @click="goLinkedin" :icon="['fab', 'linkedin']" class="icon" id="icn2"/>
        <font-awesome-icon @click="goResume" :icon="['far', 'address-book']" class="icon" id="icn3"/>
    </div>
</template>

<script>
    export default {
        name: "LinkDisplay",
        methods: {
            introLinks: function () {
                setTimeout(function () { document.getElementById("icn1").classList.toggle("fade") }, 0);
                setTimeout(function () { document.getElementById("icn2").classList.toggle("fade") }, 250);
                setTimeout(function () { document.getElementById("icn3").classList.toggle("fade") }, 500);
            },
            goGithub: function () { window.open("https://github.com/donalshortt") },
            goLinkedin: function () { window.open("https://www.linkedin.com/in/donal-shortt-3bb02b135/") },
            goResume: function () { window.open("https://docs.google.com/document/d/1_gA6zYsEqdzCxeL5aYghoFjKuqJC123-fET68Ad0mSU/edit?usp=sharing") }
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
        animation: bounce 1.5s infinite;
        -webkit-animation: bounce 1.5s infinite;
        -moz-animation: bounce 1.5s infinite;
        color: #0047b3;
    }

    @-webkit-keyframes bounce {
        0%,
        100% { -webkit-transform: translateY(0); }
        50% { -webkit-transform: translateY(-10px); }
    }
    @-moz-keyframes bounce {
        0%,
        100% { -moz-transform: translateY(0); }
        50% { -moz-transform: translateY(-10px); }
    }
    @keyframes bounce {
        0%,
        100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
    }

    @media only screen and (max-width: 600px) {
        .icon {
            width: 2.5em;
            height: 2.5em;
        }
    }
</style>