<template>
  <div class="posts container">
    <div v-for="post in posts" :key="post._id">
      <Post
        :title="post.title"
        :author="post.author"
        :text="post.text"
        :id="post._id"
        :tags="post.tags"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";
import PostsService from "@/services/PostsService";

export default {
  components: {
    Post
  },
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data;
    }
  }
};
</script>
