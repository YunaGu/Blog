<template>
  <div>
      <goBack />
      <p>{{this.$route.params.title}}</p>
  </div>
</template>

<script>
import goBack from '../components/goBack.vue'
export default {
  components: { goBack }
}
</script>

<style>

</style>
