<template lang="pug">
    div#base
        router-view
</template>

<script>
import Home from "./views/Home";

export default {
    name: 'App',
    components: {
        Home
    }
}
</script>

<style>
  
</style>
