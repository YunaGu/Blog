<template>
  <div id="app">
    <div id="nav">
      <div class="logo">
        <img src="./assets/yungu.png">
      </div>
      <div class="bar">
          <span class="item" v-for="nav in navs" :key="nav.id">{{nav.text}}</span>
      </div>
    </div>
    <router-view/>
    <div class="myFooter">
      <div class="contact">
        <font-awesome-icon class="icon" :icon="['fas', 'envelope-square']" />
        <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
        <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
      </div>
      <p id="copyRight">© 2022 YUN GU</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        { id: 1, text: 'Work' },
        { id: 2, text: 'Bio' },
        { id: 3, text: 'Home' }
      ],
      footer: [
        { text: 'Email', link: 'GuY36@cardfiff.ac.uk', icon: '@/icon/favicon.ico' },
        { text: 'Instagram', link: 'yyyun_k', icon: '@/icon/favicon.ico' }
      ]
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
#nav {
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 80px;
    background-color: #fff;
    border-bottom: 1px solid #000;
    padding-bottom:10px;
}
/* #nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} */
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
  /* background-color: green; */
  float: right;
  font-size:1.5em;
  font-family: Helvetica, 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.myFooter{
  width: 100%;
  /* display: flex;
  flex-direction: row; */
  height: 80px;
  background-color: #fff;
  border-top: 1px solid #000;
  padding-top:10px;
}
.contact{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.icon{
  font-size: 1.5em;
  margin: 10px;
  margin-bottom: 0;
}
.ways{
  margin: 0 100px;
  text-align: left;
}
.title{
  margin: 0
}
.link{
  margin: 0;
  /* display: flex;
  flex-direction: row; */
}
</style>
