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
  border-top: 2px dotted rgba(92, 32, 188, 0.5);
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
}

h2 {
  padding-top: 3rem;
  color: rgba(92, 32, 188, 1);
}

input {
  border: 1px solid rgba(92, 32, 188, 1);

  margin: 16px 0px;
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 8px;
  color: rgba(92, 32, 188, 1);
}
label {
  font-size: 1rem;
  font-weight: 900;
}
.btn {
  background-color: rgba(92, 32, 188, 1);
  border: none;
  margin-top: 16px;
  border-radius: 200px;
  font-size: 1rem;
  font-weight: 900;
}
</style>
