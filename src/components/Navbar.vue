<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand brand-name" href="/">Instagram</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <form class="form-inline my-2 my-lg-0 mr-auto">
          <input
            class="search"
            type="search"
            placeholder=" Search for anything ... "
            aria-label="Search"
          />
        </form>
        <div class="right-part  options-list">
          <a
            class="icon"
            v-for="(feature, index) in features"
            :key="index"
            :href="feature.href"
            :title="feature.title"
          >
            <img :src="feature.imgSrc" :alt="feature.title" />
          </a>
          <a href="/profile" class="icon" title="Profile">
            <img src="./../assets/me.jpg" class="profile-img" alt="profile" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      features: [
        {
          href: '/',
          title: 'Home',
          imgSrc: 'https://img.icons8.com/ios/30/000000/home.png',
        },
        {
          href: '/liked',
          title: 'Liked posts',
          imgSrc: 'https://img.icons8.com/ios/30/000000/like.png',
        },
        {
          href: '/inbox',
          title: 'Chat',
          imgSrc: 'https://img.icons8.com/ios/30/000000/sent.png',
        },
        {
          href: '/explore',
          title: 'Explore',
          imgSrc: 'https://img.icons8.com/ios/30/000000/compass.png',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './.././style/settings.scss';

.brand-name {
  font-size: $brand-fz;
  color: $main-color;
  font-family: 'Pacifico', cursive;
  &:hover {
    color: $main-color;
  }

  &:active {
    color: #666;
  }
}

.icon {
  margin: 0 10px;
}

.options-list {
  @media (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 1rem;
  }
}

.search {
  background-color: rgba(var(--b3f, 250, 250, 250), 1);
  border: solid 1px rgba(var(--b6a, 219, 219, 219), 1);
  padding: 5px;
  border-radius: 3px;
  width: 215px;
  color: rgba(var(--f52, 142, 142, 142), 1);
  @media (max-width: 992px) {
    width: 100%;
  }

  &:placeholder {
    text-align: center;
  }

  &:focus {
    outline: none;
  }
}

.profile-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
</style>
