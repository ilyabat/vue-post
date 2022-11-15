<template>
  <div>
    <div class="post"  v-for="post in posts"
    :key="post.id">
      <div><strong>Name:</strong>{{post.title}}</div>
      <div>
        <strong>Description:</strong>{{post.body}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "Description" },
        { id: 2, title: "JavaScript2", body: "Description 2" },
        { id: 3, title: "JavaScript 3", body: "Description 3" },
      ],
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  margin-top: 15px;
  padding: 15px;
  border: 2px solid teal;
}
</style>