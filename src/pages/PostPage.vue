<template>
  <div>
    <my-input v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <my-button @click="showDialog">Create Post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>

    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
    <div class="page__wrapper">
      <div
        v-for="pageNum in totalPages"
        :key="pageNum"
        class="page__number"
        :class="{
          page__current: page === pageNum,
        }"
        @click="changePage(pageNum)"
      >
        {{ pageNum }}
      </div>
    </div>
  </div>
</template>



<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
      selectedSort: "",
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        { value: "title", name: "Name" },
        { value: "body", name: "Desc" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    changePage(pageNum){
      this.page = pageNum;
      this.fetchPosts();
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Error: " + e);
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style>
.page__wrapper {
  display: flex;
  margin-top: 10px;
  justify-content: center;
}
.page__number {
  border: 1px solid black;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
}
.page__current {
  border: 2px solid teal;
}

.app__btns {
  display: flex;
  justify-content: space-between;
}
</style>