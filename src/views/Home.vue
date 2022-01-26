<template>
  <div class="home">
    <img alt="photo" class="photo" src="../assets/photo.png">
    <div class="introduction">
      <p class="greeting">Hello!</p>
      <p class="welcome">I am Yun Gu, a postgraduate student @ <a href="https://www.cardiff.ac.uk/computer-science" target="_blank">Cardiff COMSC</a>. Welcome to my website : ).</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>

<style scoped>
.home{
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
}
.photo{
  width: 100%;
  display: flex;
  margin: 30px auto;
}
a{
  cursor: pointer;
  text-decoration: none;
}
a:link{
  color: rgb(42, 184, 231);
}
a:hover{
  color:#42b983;
}
a:visited{
  color:palevioletred
}
.introduction{
  text-align: left;
}
.greeting{
  font-size: 1.5em;
  font-weight: 600;
}
.welcome{
  font-weight: 500;
  padding-bottom: 30px;
}
</style>
