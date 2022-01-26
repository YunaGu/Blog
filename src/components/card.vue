<template>
  <div class="cards">
      <div class="card" v-for="work in works" :key="work.id">
            <router-link :to="{name: 'WorkDetails', params:{title: work.title}}">
              <h1 class="title" >{{work.title}}</h1>
              <h2 class="date" >{{work.date}}</h2>
              <p>{{work.discription}}</p>
            </router-link>
        </div>
      </div>
</template>

<script>
import works from '@/works.js'
export default {
  data () {
    return {
      works: works.works
      // id: works.id,
      // title: works.title,
      // link: works.link,
      // discription: works.discription
    //   post: {
    //     id: 1,
    //     title: 'title1',
    //     date: 'date1',
    //     discription: 'discription1'
    //   }
      // posts: [
      //   {
      //     id: 1,
      //     title: 'title 1',
      //     date: 'date 1',
      //     discription: 'discription 1'
      //   },
      //   {
      //     id: 2,
      //     title: 'title 2',
      //     date: 'date 2',
      //     discription: 'discription 2'
      //   },
      //   {
      //     id: 3,
      //     title: 'title 3',
      //     date: 'date 3',
      //     discription: 'discription 3'
      //   },
      //   {
      //     id: 4,
      //     title: 'title 4',
      //     date: 'date 4',
      //     discription: 'discription 4'
      //   }
      // ]
    }
  }
}
</script>

<style scoped>
.cards{
  width: 50%;
  text-align: left;
  margin: 0 auto;
  align-items: center;
  margin: 30px auto;
}
.card{
  width: 100%;
  border: 1px solid black;
  padding: 30px;
  margin: 10px;
}
.title{
  margin: 0;
  font-size: 2em;
  font-weight: 600;
}
.date{
  font-size: 1.5em;
  font-weight: 300;
  margin: 0;
}
a {
  cursor: pointer;
  text-decoration: none;
  color: black;
}
a:link{
  color: none;
}
a:hover{
  color:#888;
}
a:visited{
  color:none;
}
</style>
