<template>
  <form class="box">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input
          v-model="title"
          :class="{ 'is-danger': emptyTitle}"
          class="input"
          type="text"
          placeholder="e.g My Awesome Adventure"
          @blur="touchTitle"
        >
      </div>
      <p class="help is-danger" v-show="emptyTitle">Please give me a name</p>
    </div>

    <b-field label="Tags">
      <b-taginput
        v-model="tags"
        :data="filteredTags"
        autocomplete
        :open-on-focus="openOnFocus"
        :allow-new="allowNew"
        field="user.first_name"
        icon="label"
        placeholder="Add a tag"
        @typing="getFilteredTags"
      ></b-taginput>
    </b-field>

    <div class="field">
      <label class="label">Author</label>
      <div class="control">
        <input v-model="author" class="input" type="text" placeholder="e.g Alex Smith">
      </div>
    </div>

    <div class="field">
      <label class="label">Post text</label>
      <div class="control">
        <textarea
          v-model="text"
          :class="{ 'is-danger': emptyText}"
          class="textarea"
          placeholder="Write your post here"
          rows="8"
          @blur="touchText"
        ></textarea>
      </div>
      <p class="help is-danger" v-show="emptyText">Please don't just leave me blank</p>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button :disabled="formInvalid" @click.prevent="addPost" class="button is-link">Submit</button>
      </div>
      <div class="control">
        <router-link to="/" class="button is-text">Cancel</router-link>
      </div>
    </div>
  </form>
</template>

<script>
import PostsService from "@/services/PostsService";

const data = ["Books", "Cheesecakes", "Tea", "JS frameworks"];

export default {
  data() {
    return {
      filteredTags: data,
      isSelectOnly: false,
      openOnFocus: true,
      tags: [],
      allowNew: false,
      title: "",
      author: "",
      text: "",
      titleTouched: false,
      textTouched: false,
    };
  },
  computed: {
    emptyTitle: function() {
      return this.titleTouched && this.title === "";
    },
    emptyText: function() {
      return this.textTouched && this.text === "";
    },
    formInvalid: function() {
      return this.emptyTitle || this.emptyText || !this.titleTouched;
    }
  },
  methods: {
    getFilteredTags(text) {
      this.filteredTags = data.filter(option => {
        return (
          option.user.first_name
            .toString()
            .toLowerCase()
            .indexOf(text.toLowerCase()) >= 0
        );
      });
    },
    async addPost() {
      await PostsService.addPost({
        title: this.title,
        author: this.author,
        tags: this.tags,
        text: this.text
      });
      this.$router.push({ name: "posts" });
    },
    touchTitle() {
      this.titleTouched = true;
    },
    touchText() {
      this.textTouched = true;
    }
  }
};
</script>
