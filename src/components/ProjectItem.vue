<template>
    <div id="project-item">
        <div id="back-button" v-on:click="back">
            <font-awesome-icon :icon="['fas', 'arrow-left']"/>
        </div>
        <div id="img-container">
            <img :src="getImg" alt="image of the project"/>
        </div>
        <div id="tag-container">
            <p id="tag-header">Technologies used: </p>
            <div id="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
        </div>
        <div id="text-container">{{ text }}</div>
        <div id="links-container">
            <LinkButton :link=link text="View" class="link"></LinkButton>
            <LinkButton :link=codelink  text="Code" class="link"></LinkButton>
        </div>
    </div>
</template>

<script>
    import LinkButton from "./LinkButton";
    export default {
        name: "ProjectItem",
        components: {LinkButton},
        props: {
            text: String,
            tags: Array,
            link: String,
            codelink: String,
            imgpath: String
        },
        computed: {
            getImg: function () {
                // computed is called on undefined because the default state on projectItem is called with empty item <- look into more elegant solution maybe
                if (this.imgpath === undefined) { return; }
				// eslint-disable-next-line no-undef
                return require('../assets/' + this.imgpath);
            }
        },
        methods: {
            introDisplay: function () {
                setTimeout(function () {document.getElementById("img-container").classList.toggle("fade")}, 0);
                setTimeout(function () {document.getElementById("tag-container").classList.toggle("fade")}, 100);
                setTimeout(function () {document.getElementById("text-container").classList.toggle("fade")}, 300);
                setTimeout(function () {document.getElementById("links-container").classList.toggle("fade")}, 400);
            },
            back: function () {
                this.$el.style.display = "none";
                document.getElementById("project-list").style.display = "initial";
            }
        }
    }
</script>

<style scoped>
    #project-item {
        height: 100%;
        width: 75%;
        color: whitesmoke;
        position: absolute;
        right: 0;
        overflow-y: auto;
    }

    #project-item::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        background-color: rgba(0,0,0,.8)
    }

    #project-item::-webkit-scrollbar {
        width: 12px;
        background-color: #F5F5F5;
    }

    #project-item::-webkit-scrollbar-thumb {
        border-radius: 10px;
        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #1a1a1a;
    }

    #back-button {
        position: fixed;
        background:
                linear-gradient(to top left,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0) calc(50% - 0.8px),
                rgba(255,255,255,1) 50%,
                rgba(0,0,0,.75) calc(50% + 0.8px),
                rgba(0,0,0,.75) 100%);
        height: 2em;
        width: 2em;
        padding: .75em;
        top: 0;
        left: 0;
        display: none;
    }
    
    #img-container {
        width: 80%;
        height: 40%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 10vh;
    }
    
    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border: 2px solid whitesmoke;
        border-radius: 1%;
    }
    
    #tag-container{
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5vh;
        line-height: 200%;
    }

    #tag-header {
        display: inline;
    }
    
    #tag {
        margin-left: 2.5vw;
    }
    
    #text-container, #links-container {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5vh;
    }
    
    #links-container {
        display: flex;
        justify-content: center;
    }

    #img-container, #tag-container, #text-container, #links-container {
        opacity: 0;
        -webkit-transition: opacity 1s;
        -moz-transition: opacity 1s;
        transition: opacity 1s;
    }

    #img-container.fade, #tag-container.fade, #text-container.fade, #links-container.fade {
        opacity: 1;
    }

    .link {
        margin-bottom: 5vh;
    }

    @media only screen and (max-width: 600px) {
        #project-item {
            display: none;
            width: 100vw;
        }

        #back-button {
            display: initial;
        }
    }
</style>
