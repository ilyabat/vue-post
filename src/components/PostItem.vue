<template>
  <div>
    <div class="post">
      <div>
        <div><strong>Name:</strong>{{ post.title }}</div>
        <div><strong>Description:</strong>{{ post.body }}</div>
      </div>
      <div class="post__btn">
        <my-button>Delete</my-button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}
.post__btn {
}
</style>