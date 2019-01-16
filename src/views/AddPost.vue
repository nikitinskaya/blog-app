<template>
  <div class="container">
    <form class="box">
      <div class="field">
        <label class="label">Title</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g My Awesome Adventure">
        </div>
      </div>

      <div class="field">
        <label class="label">Author</label>
        <div class="control">
          <input class="input" type="text" placeholder="e.g Alex Smith">
        </div>
      </div>

      <div class="field">
        <label class="label">Post text</label>
        <div class="control">
          <textarea class="textarea" placeholder="Write your post here" rows="8"></textarea>
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
        <div class="control">
          <button class="button is-text">Cancel</button>
        </div>
      </div>
    </form>
  </div>
</template>
