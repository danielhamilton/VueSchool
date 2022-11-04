<template>
  <div class="home">
    <h1>🏝 Destinations 🏝</h1>

    <div class="destinations">
      <div v-for="destination in destinations" :key="destination.name">
        <router-link :to="destination.slug">
          <h2>{{ destination.name }}</h2>
        </router-link>
        <figure>
          <router-link :to="destination.name">
            <img
              :src="require(`@/assets/${destination.image}`)"
              :alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      destinations: store.destinations,
    };
  },
};
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
img {
  max-width: 200px;
  border-radius: 8px;
}
.destinations {
  display: flex;
  justify-content: space-between;
}
</style>
