<template>
  <div class="wrapper">
    <GoBack />
    <div class="hero">
      <div class="destination">
        <h1 class="textOverlay">{{ destination.name }}</h1>
      </div>
      <div class="heroImageContainer">
        <img
          :class="heroImage"
          :src="require(`@/assets/${destination.image}`)"
        />
      </div>
    </div>

    <div class="destination-details">
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
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
.heroImageContainer {
}

.heroImageContainer > img {
  /*border: 10px solid orange;*/
  z-index: 1;
  width: 100%;
  position: relative;
}
.textOverlay {
  z-index: 9;
  display: flex;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.7);
}

.destination-details {
  /* border: 10px solid royalblue;*/
  display: flex;
  justify-content: space-between;
}
p {
  /*border: 5px solid blue; */
  margin: 40px;
  font-size: 1.25rem;
  line-height: 2rem;
  text-align: left;
}

.experiences {
  width: 100%;
  border-top: 2px dotted rgba(92, 32, 188, 0.5);
  padding: 16px 24px;
  margin-top: 16px;
}
.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-height: 400px;
  text-align: center;
  margin: 36px 0px;
}
.cards img {
  max-height: 150px;
  width: 250px;
  border-radius: 8px;
}
.card {
  /*border: 10px solid green;*/
  padding: 8px 16px;
  position: relative;
}
.card__text {
  /*border: 10px solid rgb(163, 20, 203);*/
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: rgba(255, 255, 255, 0.9);
  font-size: 36px;
  font-weight: 900;
  text-decoration: none;
}
</style>
