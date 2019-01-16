<template>
  <div class="container">
    <div class="box">
      <div class="media">
        <article class="post-text">
          <h2 class="title is-4 is-inline-block">
            <router-link to="/post/1">A post</router-link>
          </h2>
          <h3 class="subtitle is-6">
            <strong>John Smith</strong>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. </p>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .post-text {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
  }

  .post-text::after {
    content: "";
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(256,256,256,1));
    height: 1.5em;
    width: 3em;
    position: absolute;
    right: 0;
    bottom: 0;

  }
</style>