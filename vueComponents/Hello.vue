<template>
<h2 @click="clk">{{ message }}</h2>
</template>

<script>
export default {
  name: "Hello",
  data() {
    return {
      message: "!!! Hello Vue 3 !!!"
    }
  },
  methods: {
    clk() {
      alert('Hello');
    }
  }
}
</script>

<style scoped>
h2 {
  cursor: pointer;
}
</style>