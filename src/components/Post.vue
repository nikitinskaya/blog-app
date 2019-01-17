<template>
  <div class="box post-box">
    <div class="media">
      <article class="post-text">
        <h2 class="title is-4 is-inline-block">
          <router-link :to="`/posts/${id}`">{{ title }}</router-link>
        </h2>
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
  props: ["id", "title", "author", "text"]
};
</script>

<style scoped>
.post-box {
  position: relative;
  margin-bottom: 1.5em;
}

.post-text {
  overflow: hidden;
  white-space: nowrap;
}

.post-text::after {
  content: "";
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(256, 256, 256, 1)
  );
  height: 1.5em;
  width: 3em;
  position: absolute;
  right: 0;
  bottom: 0;
}
</style>
