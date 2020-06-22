<template>
    <div id="project-item">
        <div id="img-container">
            <img :src="getImg" alt="image of the project"/>
        </div>
        <div id="tag-container">
            <div id="tag" v-for="tag in tags" :key="tag">{{ tag }}</div>
        </div>
        <div id="text-container">{{ text }}</div>
    </div>
</template>

<script>
    export default {
        name: "ProjectItem",
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
    }
    
    #tag-container {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5vh;
    }
    
    #tag {
        display: inline;
        margin-left: 2.5vw;
    }
    
    #text-container {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-top: 5vh;
    }
</style>