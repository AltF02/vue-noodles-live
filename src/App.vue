<template>
  <div id="app">
    <Navbar/>
    <router-view/>
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
  :root{
    font-size: 16px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
  body::-webkit-scrollbar {
    width: 0.25rem;
  }
  body::-webkit-scrollbar-track {
    background: #1e1e24;
  }
  body::-webkit-scrollbar-thumb {
    background: #fd6000;
  }

</style>
