<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-white insta-nav">
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
            placeholder="Search Instagram ... "
            aria-label="Search"
          />
        </form>
        <div class="right-part options-list">
          <a
            class="icon"
            v-for="(feature, index) in features"
            :key="index"
            :href="feature.href"
            :title="feature.title"
          >
            <img :src="feature.imgSrc" :alt="feature.title" />
          </a>
          <div class="dropdown profile-options">
            <a
              class="dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img src="./../../assets/me.jpg" class="profile-img" alt="profile" />
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="/profile">
                <img src="./../../assets/svgs/avatar.svg" alt="avatar image" class="drop-icon" />
                Profile
              </a>
              <a class="dropdown-item" href="/profile/saved">
                <img src="./../../assets/svgs/unsaved.svg" alt="saved icon" class="drop-icon" />
                Saved
              </a>
              <a class="dropdown-item" href="/profile/settings">
                <img src="./../../assets/svgs/settings.svg" alt="settings icon" class="drop-icon" />
                Settings
              </a>
              <div class="logout">
                <a class="dropdown-item" href="/">
                  <img src="./../../assets/svgs/logout.svg" alt="logout icon" class="drop-icon" />
                  Log Out
                </a>
              </div>
            </div>
          </div>
          <!-- <a href="/profile" class="icon" title="Profile">
            <img src="./../../assets/me.jpg" class="profile-img" alt="profile" />
          </a> -->
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
@import './../../style/settings.scss';

.insta-nav {
  border-bottom: 1px solid #dbdbdb;
}

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
  display: flex;
  @media (max-width: 992px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-top: 1rem;
    margin-bottom: 1rem;
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

  &::-webkit-input-placeholder {
    text-align: center;
    font-size: 14px;
  }

  &:-moz-placeholder {
    text-align: center;
    font-size: 14px;
  }

  &::-moz-placeholder {
    text-align: center;
    font-size: 14px;
  }

  &:-ms-input-placeholder {
    text-align: center;
    font-size: 14px;
  }

  &:focus {
    outline: none;

    &::-webkit-input-placeholder {
      text-align: left;
    }

    &:-moz-placeholder {
      text-align: left;
    }

    &::-moz-placeholder {
      text-align: left;
    }

    &:-ms-input-placeholder {
      text-align: left;
    }
  }
}

.profile-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.profile-options {
  margin-left: 10px;
}

.dropdown-menu {
  min-width: 14rem;
  padding: 0.5rem 0 0;
  margin: 0.5rem 0 0;
}

.drop-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.dropdown-item {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}

.logout {
  display: flex;
  border-top: 1px solid #dbdbdb;
  & > a {
    justify-content: flex-start;
    align-items: center;
  }
}
</style>
