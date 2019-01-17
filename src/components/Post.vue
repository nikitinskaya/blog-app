<template>
  <div class="box post-box">
    <div class="media">
      <article class="post-text">
        <h2 class="title post-title is-4 is-inline-block">
          <router-link :to="`/posts/${id}`">{{ title }}</router-link>
        </h2>
        <b-taglist class="post-tags is-inline-block">
          <b-tag class="post-tag" v-for="tag in tags" :key="tag">{{ tag }}</b-tag>
        </b-taglist>
        <h3 class="subtitle is-6">
          <strong>{{ author }}</strong>
        </h3>
        <p>{{ text }}</p>
      </article>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id", "title", "author", "text", "tags"]
};
</script>

<style scoped lang="scss">
.post-box {
  position: relative;
  margin-bottom: 1.5em;
}

.tags.post-tags {
  margin-bottom: 0;
  margin-left: 2em;
}

.tag.post-tag {
  margin-bottom: 0;
}

.title.post-title {
  margin-bottom: 0;
}

.post-text {
  overflow: hidden;
  white-space: nowrap;
}

.post-box::after {
  content: "";
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(256, 256, 256, 1)
  );
  height: 4em;
  width: 6em;
  position: absolute;
  right: 0.8em;
  bottom: 5px;
}
</style>
