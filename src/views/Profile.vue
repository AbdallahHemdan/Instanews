<template>
  <div class="profile-container">
    <profile-header></profile-header>
    <profile-stories></profile-stories>
    <div class="suggestions">
      <div class="suggestions__header">
        <div class="suggestions__title">Suggested</div>
        <div class="suggestions__seeall">
          <a href="">See All</a>
        </div>
      </div>
      <div class="suggestions__items">
        <user-suggestion
          v-for="(suggestion, index) in suggestions"
          :key="index"
          :suggestion="suggestion"
        >
        </user-suggestion>
      </div>
    </div>
    <hr />
    <profile-gallery></profile-gallery>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data: function() {
    return {
      suggestions: require('./../mock/Profile/ProfileSuggestions').default,
    };
  },
  components: {
    'profile-header': () => import('./../components/ProfileHeader/ProfileHeader'),
    'profile-stories': () => import('./../components/ProfileStories/ProfileStories'),
    'profile-gallery': () => import('./../components/ProfileGallery/ProfileGallery'),
    'user-suggestion': () => import('./../components/UserSuggestionItem/UserSuggestionItem'),
  },
};
</script>

<style lang="scss" scoped>
.suggestions {
  width: 100%;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  padding: 20px 25px;
  border-radius: 4px;

  .suggestions__header {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 1rem;

    .suggestions__title {
      color: #8e8e8e;
    }

    .suggestions__seeall {
      color: #0095f6;
    }
  }

  .suggestions__items {
    display: flex;
    overflow-x: auto;
  }
}
</style>
