<template>
  <div class="home__stories">
    <div class="direc direc--left" @click="scroll_left">
      <img src="./../../assets/left-arrow.png" alt="left arrow" class="arrow" />
    </div>

    <div class="direc direc--right" @click="scroll_right">
      <img src="./../../assets/right-arrow.png" alt="right arrow" class="arrow" />
    </div>

    <div class="home__stories-wrapper">
      <div class="home__story" v-for="(story, index) in stories" :key="index">
        <div class="home__story-img">
          <img :src="story.img" :alt="story.name" class="story__img" />
        </div>

        <div class="home__story-owner">{{ story.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeStories',
  data: function() {
    return {
      stories: require('./../../mock/Profile/ProfileSuggestions').default,
    };
  },
  methods: {
    scroll_left() {
      let content = document.querySelector('.home__stories-wrapper');
      content.scrollLeft -= 75;
    },

    scroll_right() {
      let content = document.querySelector('.home__stories-wrapper');
      content.scrollLeft += 75;
    },
  },
};
</script>

<style lang="scss" scoped>
.home__stories {
  border: 1px solid $lighter-gray;
  background-color: $white;
  margin-bottom: 24px;
  padding: $font-size-3x;
  position: relative;

  .arrow {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    z-index: 1500;
    background-color: $white;
  }

  .direc {
    top: 36%;
    position: absolute;
    cursor: pointer;
  }

  .direc--left {
    left: $font-size-3x;
  }

  .direc--right {
    right: $font-size-3x;
  }

  .home__stories-wrapper {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  .home__story {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-right: $font-size-3x;
    max-width: 80px;

    .home__story-img {
      margin-bottom: 7px;

      .story__img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: $white;
        padding: 2px;
        border: 2px solid $purple;
      }
    }

    .home__storyOwner- {
      color: $dark-gray;
      font-size: $font-size-2x;
    }
  }
}
</style>
