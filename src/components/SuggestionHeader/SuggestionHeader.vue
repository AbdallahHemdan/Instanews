<template>
  <div class="suggestions-header">
    <div class="suggestions-header__title">Suggestions For You</div>
    <a href="/all-suggestions" class="suggestions-header__see-all">See All</a>
  </div>
</template>

<script>
export default {
  name: 'SuggestionsHeader',
};
</script>

<style lang="scss" scoped>
.suggestions-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1rem;

  &__title {
    color: $dark-gray;
    font-weight: 600;
    margin-right: 5rem;
  }

  &__see-all {
    text-decoration: none;
    color: $black;
  }
}
</style>
