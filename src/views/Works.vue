<template>
  <div class="cards">
    <card />
  </div>
</template>

<script>
import card from '../components/card.vue'

export default {
  components: { card },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.cards{
  text-align: left;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin:30px 0;
}
</style>
