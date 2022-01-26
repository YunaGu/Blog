<template>
  <div id="nav">
  <div class="logo">
      <img class="logoImg" src="../assets/yungu.png">
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
/* On screens that are 830px or less, logo zoom in */
@media screen and (max-width: 830px) {
  .logo {
    width: 50%;
    /* height: 50px; */
    /* background-color: #666; */
    float: left;
    margin-left: 0;
  }
  .logoImg{
    width: 100%;
  }
}
/* On screens that are 480px or less, logo zoom in */
@media screen and (max-width: 480px) {
  .logo {
    width: 40px;
    /* height: 50px; */
    /* background-color: #666; */
    float: left;
    margin-left: 0;
  }
  .logoImg{
    width: 50%;
  }
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
  color: black;
  height: 1.5em;
}
.item:link{
  color: none;
}
.item:hover{
  color:#888;
  border-bottom: 3px solid #888;
}
.item:visited{
  color:none;
}
</style>
