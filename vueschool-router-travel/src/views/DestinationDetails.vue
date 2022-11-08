<template>
  <div>
    <GoBack />
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="require(`@/assets/${destination.image}`)" />
      <p>{{ destination.description }}</p>
    </div>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards" id="experience">
        <div
          v-for="experience in destination.experiences"
          :key="experience.slug"
          class="card"
        >
          <router-link
            :to="{
              name: 'experienceDetails',
              params: { experienceSlug: experience.slug },
              hash: '#experience',
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
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.experiences {
  border: 1px solid rgb(92, 32, 188);
  padding: 16px 24px;
  margin-top: 16px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 40px;
  font-size: 1.25remx;
  text-align: left;
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

.cards img {
  max-height: 200px;
  border-radius: 8px;
}
.card {
  padding: 16px 16px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 34px;
  font-weight: 900;
  text-decoration: none;
}
</style>
