<template>
  <div><h1>Hello from PageHome</h1></div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
    <div v-for="postId in thread.posts" :key="postId">
      <p>
        {{
          users.find((u) => u.id === posts.find((p) => p.id === postId).userId)
            .name
        }}
      </p>
      <p>{{ posts.find((p) => p.id === postId).text }}</p>
    </div>
  </div>
</template>

<script>
import sourceData from "@/data.json";
export default {
  data() {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users,
    };
  },
};
</script>

<style lang="css" scoped>
h1 {
  font-size: 2rem;
  font-weight: 900;
}
h2 {
  font-size: 1.25rem;
  font-weight: 900;
  color: #8d1bd3;
}
p {
  font-size: 1rem;
  line-height: 1.5rem;
  text-align: left;
}
</style>
