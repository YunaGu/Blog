<template>
  <div>
      <button @click="goBack" class="goback">go back</button>
  </div>
</template>

<script>

export default {
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
