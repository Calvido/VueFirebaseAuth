<template>
  <v-fade-transition appear>
    <router-view/>
  </v-fade-transition>
</template>

<script>
  export default {
    name: "App"
  };
</script>

<style scoped>
  #app {
    /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    /*padding-top: 60px;*/
  }
</style>
