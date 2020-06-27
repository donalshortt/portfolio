<template>
    <div id="project-list-item" v-on:click="projectSelected">
        <div>
            <h1> {{name}} </h1>
            <h3> {{type}} </h3>
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
    #project-list-item {
        color: whitesmoke;
        padding-left: 10%;
        padding-top: 5%;
        padding-bottom: 5%;
        display: flex;
        align-items: center;
    }
    
    #project-list-item:hover {
        cursor: pointer;
        background-color: rgba(255, 255, 255, .20);
    }
    
    h1 {
        margin-top: 0;
    }
</style>