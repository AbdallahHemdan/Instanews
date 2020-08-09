<template>
  <div class="profile-stories row">
    <div class="story" v-for="(story, index) in stories" :key="index">
      <img :src="story.storyImg" :alt="story.storyType" class="story__img" />
      <div class="story__title">{{ story.storyType }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileStories',
  data: function() {
    return {
      stories: [
        {
          storyImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/s150x150/71707560_143278756997187_4954273971273726619_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=9enQ_--0NiEAX-PrSWg&oh=b52ae838299ad24b24f8a32084d72dd1&oe=5F505948',
          storyType: 'Tunes',
        },
        {
          storyImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/s150x150/73372120_205078993821310_2769530515492845343_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=fMGWzkMucqsAX8IAWVS&oh=e167fec9c92851284e90f72ab5bcb98a&oe=5F512C02',
          storyType: 'Tech Things',
        },
        {
          storyImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/s150x150/72486838_139345537366386_2211609228713571660_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=Jnmt_xcKNzgAX92U1TU&oh=3410e7b4e1da0e574da43caade4fa510&oe=5F51069F',
          storyType: 'Pets and Pats',
        },
        {
          storyImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/s150x150/91987627_202824527805182_6378536052041441788_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=rOqREZLVg8AAX_QB0aG&oh=e17870c95ae8d27671722bd75e610ead&oe=5F510CFC',
          storyType: 'Fooood',
        },
        {
          storyImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/s150x150/75443204_150603682858933_1559794405085010385_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=mPy0JMY0LrAAX-TGVWI&oh=3e8ca1c0029a48c82f77130f5e1e1487&oe=5F4F88FF',
          storyType: 'OOTD',
        },
        {
          storyImg:
            'https://instagram.fcai19-2.fna.fbcdn.net/v/t51.2885-15/s150x150/72760401_1180474338818724_660695432915614834_n.jpg?_nc_ht=instagram.fcai19-2.fna.fbcdn.net&_nc_ohc=wA7pQnteh8QAX-26pWb&oh=ec8844788df43cf6cb2de273898df945&oe=5F51A957',
          storyType: 'Slice of Life',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.profile-stories {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  .story {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    @media (max-width: 576px) {
      margin-left: 0;
    }

    &__img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-color: transparent;
      border: 2px solid $light-gray;
      margin-bottom: 0.5rem;
      padding: 2px;
    }

    &__title {
      color: $main-color;
      font-weight: 400;
    }
  }
}
</style>
