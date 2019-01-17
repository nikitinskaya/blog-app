<template>
  <form class="box">
    <div class="field">
      <label class="label">Title</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g My Awesome Adventure">
      </div>
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
</template>

<script>
const data = ["Books", "Cheesecakes", "Tea", "JS frameworks"];

export default {
  data() {
    return {
      filteredTags: data,
      isSelectOnly: false,
      openOnFocus: true,
      tags: [],
      allowNew: false
    };
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
    }
  }
};
</script>
