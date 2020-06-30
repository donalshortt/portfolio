<template>
    <div id="project-list-item" v-on:click="projectSelected">
        <div>
            <h1> {{name}} </h1>
            <h3> {{type}}<span class="underscore">_</span> </h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProjectListItem",
        props: {
            name: String,
            type: String,
            details: Object
        },
        methods: {
            projectSelected: function () {
                this.$emit("select-project", this.name);
            }
        }
    }
</script>

<style scoped>
    @import "../../src/assets/css/underscoreAnimation.css";
    
    #project-list-item {
        color: whitesmoke;
        padding-left: 10%;
        padding-top: 5%;
        padding-bottom: 5%;
        display: flex;
        align-items: center;
    }
    
    #project-list-item:hover .underscore {
        animation: blinkingUnderscore .5s infinite;
        -webkit-animation: blinkingUnderscore .5s infinite;
        -moz-animation: blinkingUnderscore .5s infinite;
    }
    
    #project-list-item:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, .20);
    }
    
    h1 {
        margin-top: 0;
    }
</style>