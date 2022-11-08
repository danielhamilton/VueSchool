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
  top: 0;
  border-bottom: 1px solid #8721d5;
  z-index: 1;
  background-color: white;
  font-family: "Cherry Swash", cursive;
  font-weight: 700;
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
  padding-right: 24px;
  list-style: none;
}
.links:hover {
  text-decoration: underline;
}

.logo {
  font-family: "Cherry Swash", cursive;
  font-weight: 700;
  font-size: 2rem;
  color: #8721d5;
}
</style>
