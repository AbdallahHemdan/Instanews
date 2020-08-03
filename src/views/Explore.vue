<template>
  <div class="profile-gallery gallery-container">
    <div class="gallery" v-if="items">
      <gallery-item v-for="(item, index) in items" :key="index" :item="item"></gallery-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileGallery',
  data: function() {
    return {
      items: require('./../mock/Explore/Explore').default,
    };
  },
  components: {
    'gallery-item': () => import('./../components/ProfileGalleryItem/ProfileGalleryItem'),
  },
};
</script>

<style lang="scss" scoped>
@import './../components/ProfileGallery/ProfileGallery.scss';
</style>
