<template>
  <div id="nav">
  <div class="logo">
      <img src="../assets/yungu.png">
  </div>
  <div class="bar">
      <!-- <span class="item" v-for="nav in navs" :key="nav.id">{{nav.text}}</span> -->
    <router-link to="/Works">
        <span class="item" >Works</span>
    </router-link>
    <router-link to="/Bio">
        <span class="item" >Bio</span>
    </router-link>
    <router-link to="/">
        <span class="item" >Home</span>
    </router-link>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
#nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #000;
    padding-bottom:10px;
}
.logo {
    width: 20%;
    /* background-color: #666; */
    float: left;
    margin-left: 70px;
}
.bar {
    color: #000;
    width: 80%;
    /* background-color: #444; */
    margin-right: 70px;
}
.item {
  margin: 30px;
  cursor: pointer;
  float: right;
  font-size:1.5em;
  font-family: Helvetica, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
