<template>
  <nav id="nav">
    <p class="logo">Getaways</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/"> Home </router-link>
      </li>
      <li
        v-for="destination in destinations"
        :key="destination.name"
        class="links"
      >
        <router-link
          :to="{
            name: 'DestinationDetails',
            params: { slug: destination.slug },
          }"
        >
          {{ destination.name }}
        </router-link>
      </li>
      <li class="links">
        <router-link to="/user">Login</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cherry+Swash:wght@400;700&display=swap");

#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 10;
  margin: -10px -10px;
  background-color: white;
  font-family: "Cherry Swash", cursive;
  font-weight: 700;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #8721d5;
}
.nav-links {
  display: flex;
}
.links {
  margin-right: 24px;
  padding-right: 16px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}

.logo {
  font-family: "Cherry Swash", cursive;
  font-weight: 700;
  font-size: 1.2rem;
  color: #8721d5;
  padding-left: 2.5rem;
  vertical-align: middle;
}
</style>
