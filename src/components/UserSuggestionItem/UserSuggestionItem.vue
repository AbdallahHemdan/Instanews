<template>
  <div class="suggestions-item">
    <div class="suggestions-item__header">
      <div class="suggestions-item__remove">&times;</div>
    </div>

    <div class="suggestions-item__body">
      <div class="suggestions-item__img-container">
        <img
          :src="suggestion.img"
          :alt="suggestion.name"
          draggable="false"
          class="suggestions-item__img"
        />
      </div>

      <div class="suggestions-item__name">
        {{ suggestion.name }}
      </div>

      <div class="suggestions-item__subname">
        {{ suggestion.nickName }}
      </div>

      <button class="suggestions-item__follow-cta">Follow</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserSuggestionItem',
  props: {
    suggestion: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.suggestions-item {
  height: 200px;
  min-width: 180px;
  border: 1px solid $lighter-gray;
  padding: 10px;
  border-radius: 4px;
  margin-right: 20px;
  margin-bottom: 25px;

  &__header {
    display: flex;
    justify-content: flex-end;
  }

  &__remove {
    color: $dark-gray;
    font-weight: 500;
    cursor: pointer;
  }

  &__img-container {
    margin-bottom: 10px;
  }

  &__img {
    width: 54px;
    height: 54px;
    border-radius: 50%;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: $font-size-2x;
  }

  &__name {
    font-weight: 600;
  }

  &__subname {
    color: $dark-gray;
  }

  &__follow-cta {
    border: 1px solid transparent;
    background-color: $main-color;
    margin-top: $font-size-3x;
    border-radius: 4px;
    color: $white;
    padding: 3px 40px;
    text-align: center;
  }
}
</style>
