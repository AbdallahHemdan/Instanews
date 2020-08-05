<template>
  <div class="gallery-item" tabindex="0">
    <img :src="item.img" class="gallery-image" :alt="item.alt" />

    <div class="gallery-item-type" v-if="item.hasType">
      <span class="visually-hidden">{{ item.type }}</span>
      <i :class="item.typeIcon" aria-hidden="true"></i>
    </div>

    <div class="gallery-item-info">
      <ul>
        <li class="gallery-item-likes">
          <span class="visually-hidden">Likes:</span><i class="fa fa-heart" aria-hidden="true"></i>
          {{ item.likes }}
        </li>

        <li class="gallery-item-comments">
          <span class="visually-hidden">Comments:</span
          ><i class="fa fa-comment" aria-hidden="true"></i> {{ item.comments }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileGalleryItem',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../ProfileGallery/ProfileGallery.scss';
</style>
