<template>
  <div class="container">
    <div class="box">
      <button class="delete is-pulled-right"></button>
      <div class="media">
        <article class="post-text">
          <h2 class="title is-4 is-inline-block">A post</h2>
          <h3 class="subtitle is-6">
            <strong>John Smith</strong>
          </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.</p>
          <button class="delete-post button is-outlined is-link">Delete</button>
        </article>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .delete-post {
      margin-top: 2em;
  }
</style>