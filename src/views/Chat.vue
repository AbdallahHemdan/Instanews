<template>
  <div class="chat-container">
    <div class="row">
      <div class="my-messages">
        <messages-container></messages-container>
      </div>
      <div class="actual-chat">
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

.chat-container {
  background-color: #fff;
  height: 87vh;
  border: 1px solid #ccc;
  border-radius: 4px;

  .my-messages {
    width: 34%;
  }

  .actual-chat {
    width: 66%;
  }

  @media (max-width: 992px) {
    .my-messages {
      width: 20%;
    }

    .actual-chat {
      width: 80%;
    }
  }
}
</style>
