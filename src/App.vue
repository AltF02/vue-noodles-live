<template>
  <div id="app">
    <div>
      <Navbar/>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import Navbar from "./components/NavBar/NavBar"
  export default {
    name: 'App',
    components: {
      Navbar
    },
  }
</script>

<style>
  @import "App.css";
</style>
