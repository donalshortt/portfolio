<<<<<<< HEAD
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
=======
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
>>>>>>> 703e1b4d6f1aca0187063fbe5d05b415553eabf5
}
</script>

<style>
<<<<<<< HEAD
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
=======

>>>>>>> 703e1b4d6f1aca0187063fbe5d05b415553eabf5
</style>
