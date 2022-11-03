<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <page-home />
</template>

<script>
import PageHome from "@/components/PageHome.vue";

export default {
  name: "App",
  components: {
    PageHome,
  },
};
</script>

<style>
#app {
  font-family: Inter, Helvetica-Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  width: 50%;
  margin: 0 auto;
}
</style>
