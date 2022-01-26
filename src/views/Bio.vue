<template>
  <div class="markdown">
    <div>
     <h1>Bio</h1>
     <h2>Education</h2>
     <blockquote><i>Cardiff University (09/2021 - 09/2023)</i></blockquote>
     <p>Master of Science student in Software Engineering with a Professional Placement Year (full-time)</p>
     <blockquote><i>Shanghai Maritime University (09/2017 - 06/2021)</i></blockquote>
     <p>Bachelor of Engineering in Electronic Information Engineering (full-time)</p>
     <h2>Internship</h2>
     <blockquote><i>Qianjin Network Information Technology (Shanghai) Co., Ltd. (07/2020-09/2020)</i></blockquote>
     <p>Summer intern of front-end developer @ <a href="http://" target="_blank">51job</a>, Shanghai </p>
     <blockquote><i>Zyllion Data Technology (Shanghai) Co., Ltd. (02/2020-04/2020)</i></blockquote>
     <p>Intern of Data Product Group @ <a href="http://" target="_blank">Zyllion</a>, Shanghai</p>
     <h2>What's More About Me</h2>
     <blockquote><i>A football player</i></blockquote>
     <p>I used to be the captain of Shanghai Maritime University ladies football, and I'm a fan of @ <a href="https://www.liverpoolfc.com/" target="_blank">Liverpool fc</a>.</p>
     <blockquote><i>A musician</i></blockquote>
     <p>I play the guitar well and could play basic piano and drums. I'm a fan of Britpop, especially @ <a href="https://www.oasisinet.com/#!/home" target="_blank">Oasis</a>.</p>
     <p><a class="download" href="#" download=""><u>Download Resume</u></a></p>
     <!-- <p>I'm Yun Gu, a software engineer with passion for design. Currently I am doing my Master at Cardiff University.</p> -->
     <!-- <p>I like to learn new technologies and apply them in a creative way, with sense of simplicity, humour and naivity.</p> -->
     </div>
  </div>
</template>

<script>
// import Markdown from 'vue3-markdown-it'

export default {
  components: {
    // Markdown
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.markdown {
  text-align: left;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:30px auto;
  width: 50%;
}
blockquote::before{
  content: "";
  display: inline-block;
  vertical-align: middle;
  height: 1.5em;
  width: 4px;
  background-color: #999;
  position: relative;
  left: -10px;
}
blockquote{
  margin-left: 10px;
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
</style>
