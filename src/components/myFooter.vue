<template>
      <div class="myFooter">
      <div class="contact">
        <a class="iconAction" href="mailto:GuY36@cardiff.ac.uk">
        <font-awesome-icon class="icon" :icon="['fas', 'envelope-square']" />
        </a>
        <a class="iconAction" href="https://github.com/YunaGu">
        <font-awesome-icon class="icon" :icon="['fab', 'github']" />
        </a>
        <a class="iconAction" href="https://www.instagram.com/yyyun_k/">
        <font-awesome-icon class="icon" :icon="['fab', 'instagram']" />
        </a>
        <a class="iconAction" href="https://www.linkedin.com/in/yun-gu-0932b11a5/">
        <font-awesome-icon class="icon" :icon="['fab', 'linkedin']" />
        </a>
      </div>
      <p id="copyRight">© 2022 YUN GU</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>
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
.iconAction {
  cursor: pointer;
  text-decoration: none;
  color: black;
}
.iconAction:link{
  color: none;
}
.iconAction:hover{
  color:#888;
}
.iconAction:visited{
  color:none;
}
</style>
