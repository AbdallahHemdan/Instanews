<template>
  <div class="suggestions__item">
    <div class="suggestions__item__header">
      <div class="remove__suggestion">&times;</div>
    </div>
    <div class="suggestions__item__body">
      <div class="suggestion__item__img">
        <img
          :src="suggestion.img"
          :alt="suggestion.name"
          draggable="false"
          class="suggestion__img"
        />
      </div>
      <div class="suggestion__item__name">
        {{ suggestion.name }}
      </div>
      <div class="suggestion__item__subname">
        {{ suggestion.nickName }}
      </div>

      <button class="follow__cta">Follow</button>
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
.suggestions__item {
  height: 200px;
  min-width: 180px;
  border: 1px solid #dbdbdb;
  padding: 10px;
  border-radius: 4px;
  margin-right: 20px;
  margin-bottom: 25px;

  .suggestions__item__header {
    display: flex;
    justify-content: flex-end;

    .remove__suggestion {
      color: #999;
      font-weight: 500;
      cursor: pointer;
    }
  }

  .suggestions__item__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;

    .suggestion__item__img {
      margin-bottom: 10px;
      .suggestion__img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
      }
    }

    .suggestion__item__name {
      font-weight: 600;
    }

    .suggestion__item__subname {
      color: #8e8e8e;
    }

    .follow__cta {
      border: 1px solid transparent;
      background-color: #0095f6;
      margin-top: 16px;
      border-radius: 4px;
      color: #fff;
      padding: 3px 40px;
      text-align: center;
    }
  }
}
</style>
