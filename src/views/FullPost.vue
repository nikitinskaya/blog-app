<template>
  <div class="container">
    <div class="box post-box">
      <router-link to="/" class="delete is-pulled-right"></router-link>
      <div class="media">
        <article class="post-text">
          <h2 class="title is-4 is-inline-block">{{ post.title }}</h2>
          <b-taglist class="post-tags is-inline-block">
            <b-tag class="post-tag" v-for="tag in post.tags" :key="tag">{{ tag }}</b-tag>
          </b-taglist>
          <h3 class="subtitle is-6">
            <strong>{{ post.author }}</strong>
          </h3>
          <p>{{ post.text }}</p>
          <button class="delete-post button is-outlined is-link">Delete</button>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "post",
  data() {
    return {
      post: {}
    };
  },
  mounted() {
    this.getPost();
  },
  methods: {
    async getPosts() {
      const response = await PostsService.fetchPosts();
      this.posts = response.data.posts;
    },
    async getPost() {
      const response = await PostsService.getPost({
        id: this.$route.params.id
      });
      this.post = response.data;
      console.log(this.post);
    }
  }
};
</script>

<style scoped lang="scss">
.delete-post {
  margin-top: 2em;
}
.post-box {
  @media (max-width: 1087px) {
    margin-left: 1.5em;
    margin-right: 1.5em;
  }
}
.post-tags {
  margin-bottom: 0;
  margin-left: 2em;
}

.post-tag {
  margin-bottom: 0;
}

.title {
  margin-bottom: 0;
}
</style>
