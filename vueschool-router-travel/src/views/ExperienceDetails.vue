<template>
  <section>
    <div class="experience-details">
      <img
        :src="require(`@/assets/${experience.image}`)"
        :alt="experience.name"
      />
      <p>{{ experience.description }}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store";
export default {
  props: {
    slug: {
      type: String,
      required: true,
    },
    experienceSlug: {
      type: String,
      required: true,
    },
  },
  computed: {
    destination() {
      return store.destinations.find(
        (destination) => destination.slug === this.slug
      );
    },
    experience() {
      return this.destination.experiences.find(
        (experience) => experience.slug === this.experienceSlug
      );
    },
  },
};
</script>

<style scoped>
img {
  max-width: 400px;
  height: auto;
  width: 100%;
  max-height: 400px;
  border-radius: 8px;
}
.experience-details {
  /*border: 5px dotted brown;*/
  display: flex;
  justify-content: space-between;
  padding: 24px 16px;
}

p {
  /*border: 5px dotted darkgoldenrod;*/
  margin: 0 40px;
  font-size: 1rem;
  line-height: 1.6rem;
  text-align: left;
}
</style>
