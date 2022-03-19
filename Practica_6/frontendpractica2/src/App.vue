<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/SA_Logo.png" />
    <HelloWorld msg="Pareja 5 Practica 7" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style>
.logo {
  width: 200px;
  height: 200px;
}
#app {
  background-color: rgb(46, 45, 45);

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fdfdfd;
  padding-block: 100px;
  margin-top: 10%;
  margin-left: 30%;
  margin-right: 30%;
  height: 100%;
}
</style>
