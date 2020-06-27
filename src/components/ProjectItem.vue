<template>
    <div id="project-item">
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
            <LinkButton :link=codelink  text="Code"></LinkButton>
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
                return require('../assets/' + this.imgpath);
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
        padding-left: 3em;
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
    }

    #tag-header {
        display: inline;
        margin-left: 2.5vw;
    }
    
    #tag {
        display: inline;
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
</style>