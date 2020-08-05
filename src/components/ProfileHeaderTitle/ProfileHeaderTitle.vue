<template>
  <div class="header">
    <div class="header-first">
      <div class="username">hellomayuko</div>
      <div class="header-actions">
        <button class="action-btn">Message</button>
        <button class="action-btn">
          <img src="./../../assets/svgs/following.svg" alt="following avatar" class="icon" />
        </button>
        <button class="action-btn">
          <img
            src="./../../assets/svgs/dropdown-arrow.svg"
            alt="dropdown-arrow image"
            class="icon arrow-icon"
          />
        </button>
        <button class="dots-menu" data-toggle="modal" data-target="#exampleModalCenter">
          <span class="dots">●●●</span>
        </button>
      </div>
    </div>
    <div class="profile-statistics">
      <div class="profile-posts statistics-item"><span class="bold">494</span> posts</div>
      <div class="profile-followers statistics-item" data-toggle="modal" data-target="#following">
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
      <div class="profile-following statistics-item" data-toggle="modal" data-target="#followers">
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
}

.header {
  padding-left: 0.5rem;

  @media (max-width: 768px) {
    padding-left: 1.5rem;
  }

  @media (max-width: 576px) {
    padding-left: 0;
    margin-top: 1rem;
  }
}

.header-first {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: 576px) {
    justify-content: center;
  }
  @media (max-width: 420px) {
    flex-direction: column;
  }

  .username {
    font-size: 28px;
    font-weight: 300;
    margin-right: 1rem;

    @media (max-width: 420px) {
      margin-right: 0;
      margin-bottom: 1rem;
    }
  }
}

.action-btn {
  border: 1px solid #dbdbdb;
  padding: 4px 16px;
  background-color: transparent;
  margin-right: 0.5rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 14px;

  @media (max-width: 768px) {
    padding: 4px 12px;
  }
}

.profile-statistics {
  display: flex;
  margin-top: 1rem;

  @media (max-width: 576px) {
    margin-top: 0.5rem;
    justify-content: center;
  }
}

.bold {
  font-weight: 600;
}

.statistics-item {
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 1rem;
  }

  @media (max-width: 420px) {
    margin-right: 0.5rem;
  }
}

.dots-menu {
  border: none;
  background-color: transparent;
}

.icon {
  width: 16px;
  height: 16px;
}

.arrow-icon {
  width: 10px;
  height: 10px;
}

.profile-followers {
  cursor: pointer;
}

.modal__header {
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 14px;
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

.profile-following {
  cursor: pointer;
}
</style>
