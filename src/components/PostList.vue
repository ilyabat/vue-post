<template>
  <div v-if="posts.length > 0">
    <h3>Post List</h3>
    <post-item :post="post" v-for="post in posts" :key="post.id" @remove="$emit('remove',post)"/>
  </div>
  <div v-else>
    <h2>Post = 0</h2>
  </div>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
h3{
  margin-top: 10px;
}
</style>