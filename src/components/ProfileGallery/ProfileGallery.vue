<template>
  <div class="profile-gallery gallery-container">
    <div class="gallery" v-if="items">
      <gallery-item v-for="(item, index) in items" :key="index" :item="item"></gallery-item>
    </div>
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: 'ProfileGallery',
  data: function() {
    return {
      items: require('./../../mock/Profile/ProfileGallery').default,
    };
  },
  components: {
    'gallery-item': () => import('./../ProfileGalleryItem/ProfileGalleryItem'),
  },
};
</script>

<style lang="scss" scoped>
@import './ProfileGallery.scss';
</style>
