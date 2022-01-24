<template>
  <div class="card" v-for="post in posts" :key="post.id">
      <h1 class="title" >{{post.title}}</h1>
      <h2 class="date" >{{post.date}}</h2>
      <p>{{post.discription}}</p>
  </div>
</template>

<script>
export default {
//   props: {
//     post: {
//     // eslint-disable-next-line no-undef
//       id: number,
//       // eslint-disable-next-line no-undef
//       title: string,
//       // eslint-disable-next-line no-undef
//       discription: string
//     }
//   }
  data () {
    return {
    //   post: {
    //     id: 1,
    //     title: 'title1',
    //     date: 'date1',
    //     discription: 'discription1'
    //   }
      posts: [
        {
          id: 1,
          title: 'title 1',
          date: 'date 1',
          discription: 'discription 1'
        },
        {
          id: 2,
          title: 'title 2',
          date: 'date 2',
          discription: 'discription 2'
        },
        {
          id: 3,
          title: 'title 3',
          date: 'date 3',
          discription: 'discription 3'
        },
        {
          id: 4,
          title: 'title 4',
          date: 'date 4',
          discription: 'discription 4'
        }
      ]
    }
  }
}
</script>

<style scoped>
.card{
  width: 50%;
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
</style>
