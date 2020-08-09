<template>
  <div class="container auth-container">
    <div class="row">
      <left-auth></left-auth>

      <div class="right-col text-center">
        <div class="header">
          <a href="/" class="header__link">
            <h2 class="header__title">Instanews</h2>
          </a>

          <img src="./../assets/lock.png" alt="lock" class="header__icon" draggable="false" />

          <p class="header__info">
            Log In into Instanews to see photos and videos from your friends.
          </p>
        </div>

        <div
          :class="{
            alert: true,
            'alert-danger': !success,
            'alert-success': success,
            'err-msg': true,
          }"
          role="alert"
          v-show="this.errMessage"
        >
          {{ this.errMessage }}
        </div>

        <form>
          <div class="form-label-group">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Enter your email address"
              v-model="email"
            />
          </div>

          <div class="options">
            <div class="options__first">
              <button
                type="button"
                class="btn btn-primary btn-block auth-btn"
                @click="forgetPassword"
              >
                Send Login Link
              </button>

              <button
                type="button"
                class="btn btn-secondary btn-block auth-btn"
                @click="handleBackToLogin"
              >
                <span class="fa fa-angle-double-left"></span>
                Back to Log In
              </button>
            </div>

            <or-divider></or-divider>

            <div class="options__second">
              <div class="have-account">
                <span>Don't have an account? </span>
                <a href="./signup" class="have-account__link">Sign up</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'ForgetPassword',
  data: function() {
    return {
      email: '',
      errMessage: '',
      success: false,
    };
  },
  components: {
    'left-auth': () => import('./../components/LeftAuth/LeftAuth'),
    'or-divider': () => import('./../components/OrDivider/OrDivider'),
  },
  methods: {
    forgetPassword: function() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(user => {
          this.errMessage = 'Please check your email to reset your password';
          this.success = true;
        })
        .catch(err => {
          this.errMessage = err.message;
          this.success = false;
        });
    },
    handleBackToLogin: function() {
      window.location = '/login';
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.auth-container {
  margin-top: 20px;

  .right-col {
    background-color: $white;
    border: 1px solid $lighter-gray;
    width: 400px;
    float: right;
    margin: 20px 10px 0px 10px;
    padding: 40px;

    @media (max-width: 992px) {
      margin: 20px auto;
    }
  }
}

.header {
  &__title {
    font-family: 'Pacifico', cursive;
    font-weight: 300;
  }

  &__link:hover {
    text-decoration: none;
    color: $main-color;
  }

  &__icon {
    height: 70px;
    margin: 15px auto 0;
  }

  &__info {
    font-size: 17px;
    line-height: 25px;
    color: $dark-gray;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
}

.have-account {
  margin-top: 15px;

  &__link {
    padding: 5px;
  }
}

.options {
  &__first {
    margin-top: 2rem;
    margin-bottom: 2rem;

    .auth-btn {
      padding: 6px;
    }
  }
}

.err-msg {
  margin-bottom: 1rem;
  padding: 5px 10px;
}

.form-control {
  background: $white-smoke;
  padding: 8px 0 8px 10px;
  color: $darker-gray;
  font-size: $font-size-2x;
  line-height: 18px;
  min-height: 40px;
  margin-bottom: 1rem;
}
</style>
