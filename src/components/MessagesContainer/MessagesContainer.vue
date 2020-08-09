<template>
  <div class="messages">
    <div class="messages__header">
      <div class="messages__title">
        Direct
      </div>

      <div class="messages__edit">
        <img src="./../../assets/svgs/edit.svg" alt="edit icon" class="messages__icon" />
      </div>
    </div>

    <div class="messages__list">
      <message-item v-for="(message, index) in messages" :key="index" :message="message">
      </message-item>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessagesContainer',
  data: function() {
    return {
      messages: require('./../../mock/Messages/Messages').default,
    };
  },
  components: {
    'message-item': () => import('./../MessageItem/MessageItem'),
  },
};
</script>

<style lang="scss" scoped>
.messages {
  height: 87vh;
  border-right: 1px solid $light-gray;

  &__header {
    position: relative;

    @media (max-width: 992px) {
      display: none;
    }
  }

  &__title {
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid $light-gray;
    text-align: center;
    font-weight: 600;
  }

  &__edit {
    position: absolute;
    top: 30%;
    right: 5%;
  }

  &__list {
    padding: 8px;
    padding-left: $font-size-3x;

    @media (max-width: 992px) {
      padding-top: 2rem;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
}
</style>
