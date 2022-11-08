<template>
  <TheNavigation />
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component
        :key="$route.params.slug"
        :is="slotProps.Component"
      ></component>
    </transition>
  </router-view>
</template>

<script>
import TheNavigation from "./components/TheNavigation.vue";

export default {
  components: {
    TheNavigation,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cherry+Swash:wght@400;700&display=swap");

#app {
  font-family: "Inter", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  font-family: "Cherry Swash", cursive;
  font-weight: 400;
  font-size: 10rem;
  text-align: center;
}
h2 {
  font-family: "Cherry Swash", cursive;
  font-weight: 400;
  text-align: center;
}
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}
.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-10);
}
.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.route-enter-active,
.route-leave-active {
  transition: all 0.3s ease;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.input {
  border: 1px solid green;
  padding: 10px;
  margin-bottom: 20px;
}

.btn {
  background-color: green;
  color: white;
  padding: 10px;
}
</style>
