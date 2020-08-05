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
  border: 1px solid #dbdbdb;
  background-color: #fff;
  margin-bottom: 24px;
  padding: 16px;
  position: relative;

  .arrow {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    z-index: 1500;
    background-color: #fff;
  }

  .direc {
    top: 36%;
    position: absolute;
    cursor: pointer;
  }

  .direc--left {
    left: 16px;
  }

  .direc--right {
    right: 16px;
  }

  .home__stories-wrapper {
    display: flex;
    overflow-x: hidden;
  }

  .home__story {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-right: 16px;
    max-width: 80px;

    .home__story-img {
      margin-bottom: 7px;

      .story__img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        background-color: #fff;
        padding: 2px;
        border: 2px solid #e60c7b;
      }
    }

    .home__storyOwner- {
      color: #8e8e8e;
      font-size: 14px;
    }
  }
}
</style>
