<template>
    <div id="project-list-item" v-on:click="projectSelected">
        <h1> {{name}} </h1>
        <h2> {{type}} </h2>
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
    }

    #project-list-item:hover {
        cursor: pointer;
        background-color: #333333;
    }
    
    h1 {
        margin-top: 0;
    }
</style>