<template>
  <div>
    <h3>List Post</h3>
    <post-item :post="post" v-for="post in posts" :key="post.id" />
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

</style>