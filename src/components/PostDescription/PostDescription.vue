<template>
  <div class="post-description">
    <span>{{ writer }}</span> {{ description }}
    <hr />
  </div>
</template>

<script>
export default {
  name: 'PostDescription',
  props: {
    description: {
      type: String,
      required: true,
    },
    writer: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.post-description {
  padding-left: 1rem;
  padding-right: 1rem;

  & > span {
    font-weight: 700;
  }

  hr {
    width: 80%;
  }
}
</style>
