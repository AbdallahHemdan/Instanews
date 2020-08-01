<template>
  <div class="suggestions-header">
    <div class="title">Suggestions For You</div>
    <a href="/all-suggestions" class="see-all">See All</a>
  </div>
</template>

<script>
export default {
  name: 'SuggestionHeader',
};
</script>

<style lang="scss" scoped>
.suggestions-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 2rem;

  .title {
    color: #8e8e8e;
    font-weight: 600;
    margin-right: 5rem;
  }

  .see-all {
    text-decoration: none;
  }
}
</style>
