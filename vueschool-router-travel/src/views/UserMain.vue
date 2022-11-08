<template>
  <div class="form">
    <h2>Welcome {{ user }}</h2>
    <button @click="logOut" class="btn">Log Out</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      user: store.user,
    };
  },
  methods: {
    logOut() {
      store.user = null;
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
.form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}
</style>
