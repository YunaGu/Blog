<template>
  <div id="app">
    <my-nav />
    <router-view/>
    <my-footer />
  </div>
</template>

<script>
import myFooter from './components/myFooter.vue'
import myNav from './components/myNav.vue'
export default {
  components: { myFooter, myNav },
  data () {
    return {
      // components: { myFooter, myNav }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} */

</style>
