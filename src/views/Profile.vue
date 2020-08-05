<template>
  <div class="profile-container">
    <profile-header></profile-header>
    <profile-stories></profile-stories>
    <div class="suggestions">
      <div class="suggestions__header">
        <div class="suggestions__title">Suggested</div>
        <div class="suggestions__seeall" data-toggle="modal" data-target="#seeall">
          See All
        </div>
        <div
          class="modal fade"
          id="seeall"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal__header">
                <div class="modal__title">Similar Accounts</div>
                <div class="modal__close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </div>
              </div>
              <div class="modal-body">
                <follow-item
                  v-for="(suggestion, index) in suggestions"
                  :key="index"
                  :following="suggestion"
                ></follow-item>
              </div>
            </div>
          </div>
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
    'follow-item': () => import('./../components/FollowItem/FollowItem'),
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
      cursor: pointer;
    }
  }

  .suggestions__items {
    display: flex;
    overflow-x: auto;
  }
}

.modal__header {
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 14px;
}

.modal-content {
  border-radius: 12px;
  width: 400px;
  height: 400px;
  margin: auto;
}

.modal__close {
  position: absolute;
  right: 24px;
  font-size: 2rem;
  cursor: pointer;
}

.modal__title {
  font-weight: 600;
}

.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  overflow-y: auto;
}
</style>
