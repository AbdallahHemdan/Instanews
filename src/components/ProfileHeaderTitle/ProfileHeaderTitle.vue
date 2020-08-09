<template>
  <div class="header">
    <div class="header__first">
      <div class="header__username">hellomayuko</div>

      <div class="header__actions">
        <button class="header__action-btn">Message</button>

        <button class="header__action-btn">
          <img src="./../../assets/svgs/following.svg" alt="following avatar" class="icon" />
        </button>

        <button class="header__action-btn">
          <img
            src="./../../assets/svgs/dropdown-arrow.svg"
            alt="dropdown-arrow image"
            class="header__arrow-icon"
          />
        </button>

        <button class="header__options-menu" data-toggle="modal" data-target="#exampleModalCenter">
          <span class="dots">●●●</span>
        </button>
      </div>
    </div>

    <div class="header__second">
      <div class="profile-posts header__statistics-item"><span class="bold">494</span> posts</div>

      <div
        class="profile-followers header__statistics-item"
        data-toggle="modal"
        data-target="#following"
      >
        <span class="bold">40.8k</span> followers
      </div>

      <div
        class="modal fade"
        id="following"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal__header">
              <div class="modal__title">Followers</div>
              <div class="modal__close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </div>
            </div>

            <div class="modal-body">
              <follow-item
                v-for="(following, index) in listOfFollowers"
                :key="index"
                :following="following"
              ></follow-item>
            </div>
          </div>
        </div>
      </div>

      <div
        class="profile-following header__statistics-item"
        data-toggle="modal"
        data-target="#followers"
      >
        <span class="bold">1,708</span> following
      </div>

      <div
        class="modal fade"
        id="followers"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal__header">
              <div class="modal__title">Following</div>

              <div class="modal__close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </div>
            </div>

            <div class="modal-body">
              <follow-item
                v-for="(following, index) in listOfFollowing"
                :key="index"
                :following="following"
              ></follow-item>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileHeaderTitle',
  data: function() {
    return {
      listOfFollowers: require('./../../mock/Profile/ListOfFollowers').default,
      listOfFollowing: require('./../../mock/Profile/ListOfFollowers').default,
    };
  },
  components: {
    'follow-item': () => import('./../FollowItem/FollowItem'),
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-left: 0.5rem;

  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }

  @media (max-width: 576px) {
    padding-left: 0;
    margin-top: 1rem;
  }

  &__first {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 576px) {
      justify-content: center;
    }
    @media (max-width: 420px) {
      flex-direction: column;
    }
  }

  &__username {
    font-size: 28px;
    font-weight: 300;
    margin-right: 1rem;

    @media (max-width: 420px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }

  &__action-btn {
    border: 1px solid $lighter-gray;
    padding: 4px $font-size-3x;
    background-color: transparent;
    margin-right: 0.5rem;
    border-radius: 4px;
    font-weight: 600;
    font-size: $font-size-2x;

    @media (max-width: 768px) {
      padding: 4px 12px;
    }
  }

  &__second {
    display: flex;
    margin-top: 1rem;

    @media (max-width: 576px) {
      margin-top: 0.5rem;
      justify-content: center;
    }
  }

  &__arrow-icon {
    width: 10px;
    height: 10px;
  }

  &__options-menu {
    border: none;
    background-color: transparent;
  }

  &__statistics-item {
    margin-right: 2rem;

    @media (max-width: 768px) {
      margin-right: 1rem;
    }

    @media (max-width: 420px) {
      margin-right: 0.5rem;
    }
  }
}

.bold {
  font-weight: 600;
}

.icon {
  width: $font-size-3x;
  height: $font-size-3x;
}

.profile-following,
.profile-followers {
  cursor: pointer;
}

.modal__header {
  display: flex;
  border-bottom: 1px solid $lighter-gray;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: $font-size-2x;
}

.modal-content {
  border-radius: 12px;
  width: 400px;
  height: 400px;
  margin: auto;
}

.modal__close {
  position: absolute;
  right: 24px;
  font-size: 2rem;
  cursor: pointer;
}

.modal__title {
  font-weight: 600;
}

.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
  overflow-y: auto;
}
</style>
