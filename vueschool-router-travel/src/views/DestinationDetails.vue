<template>
  <div>
    <GoBack />
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="require(`@/assets/${destination.image}`)" />
      <p>{{ destination.description }}</p>
    </div>
    <section class="experiences">
      <h1>Top Experiences in {{ destination.name }}</h1>
      <div class="cards">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
            }"
          >
            <img
              :src="require(`@/assets/${experience.image}`)"
              :alt="experience.name"
            />
            <span class="card__text">{{ experience.name }}</span>
          </router-link>
        </div>
      </div>

      <router-view :key="$route.path" />
    </section>
  </div>
</template>

<script>
import store from "@/store";
import GoBack from "@/components/GoBack";
export default {
  components: {
    GoBack,
  },
  data() {
    return {};
  },
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug == this.slug
      );
    },
  },
};
</script>

<style scoped>
.destination-details {
  display: flex;
  justify-content: space-between;
}

.cards {
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  height: auto;
  width: 100%;
  max-height: 400px;
  text-align: center;
}

p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}

.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
  border-radius: 8px;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 36px;
  font-weight: 900;
  text-decoration: none;
}
</style>
