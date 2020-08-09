<template>
  <div class="chat">
    <div class="row">
      <div class="chat__messages-list">
        <messages-container></messages-container>
      </div>

      <div class="chat__message">
        <inbox-container></inbox-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  components: {
    'messages-container': () => import('./../components/MessagesContainer/MessagesContainer'),
    'inbox-container': () => import('./../components/InboxContainer/InboxContainer'),
  },
};
</script>

<style lang="scss" scoped>
body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.row {
  margin: 0;
  padding: 0;
}

.chat {
  background-color: $white;
  height: 87vh;
  border: 1px solid $light-gray;
  border-radius: 4px;

  &__messages-list {
    width: 34%;
  }

  &__message {
    width: 66%;
  }

  @media (max-width: 992px) {
    &__messages-list {
      width: 20%;
    }

    &__message {
      width: 80%;
    }
  }
}
</style>
