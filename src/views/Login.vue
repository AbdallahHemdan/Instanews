<template>
  <div class="container auth-container">
    <div class="row">
      <left-auth></left-auth>

      <div class="right-col text-center">
        <div class="header">
          <a href="/" class="header__link">
            <h2 class="header__title">Instanews</h2>
          </a>

          <p class="header__info">
            Log In into Instanews to see photos and videos from your friends.
          </p>
        </div>

        <div class="social">
          <button
            type="button"
            class="btn btn-primary btn-block social__btn"
            @click="authWithFacebook"
          >
            <span class="fa fa-facebook social__logo"></span>
            Login with facebook
          </button>

          <button type="button" class="btn btn-dark btn-block social__btn" @click="authWithGithub">
            <span class="fa fa-github social__logo"></span>
            Login with github
          </button>

          <button
            type="button"
            class="btn btn-danger btn-block social__btn"
            @click="authWithGoogle"
          >
            <span class="fa fa-google social__logo"></span>
            Login with google
          </button>
        </div>

        <or-divider></or-divider>

        <div class="alert alert-danger err-msg" role="alert" v-show="this.errMessage">
          {{ this.errMessage }}
        </div>

        <form>
          <div class="form-label-group">
            <input
              type="email"
              name="email"
              id="email"
              class="form-control"
              placeholder="Email address"
              v-model="email"
            />
          </div>

          <div class="form-label-group">
            <input
              type="password"
              name="password"
              id="password"
              class="form-control"
              placeholder="Password"
              v-model="password"
            />
          </div>

          <div class="options">
            <div class="options__first">
              <button
                type="submit"
                class="btn btn-primary btn-block auth-btn"
                @click.prevent="login"
              >
                Log In
              </button>
            </div>

            <div class="options__second">
              <div class="forgot">
                <a href="./forget" class="forgot__link">
                  Forgot password?
                </a>
              </div>

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
  name: 'Login',
  data: function() {
    return {
      email: '',
      password: '',
      errMessage: '',
    };
  },
  components: {
    'left-auth': () => import('./../components/LeftAuth/LeftAuth'),
    'or-divider': () => import('./../components/OrDivider/OrDivider'),
  },
  methods: {
    login: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            window.location = '/';
          },
          err => {
            if (err.code === 'auth/invalid-email') {
              this.errMessage = err.message;
            } else if (err.code === 'auth/wrong-password') {
              this.errMessage = 'The password is invalid';
            }
          },
        );
    },
    authWithGoogle: function() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
          window.location = '/';
        })
        .catch(err => {
          alert('Oops. ' + err.message);
        });
    },
    authWithGithub: function() {
      const provider = new firebase.auth.GithubAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // redirect to home page
          window.location = '/';
        })
        .catch(function(error) {
          alert('Oops. ' + error.message);
        });
    },
    authWithFacebook: function() {
      const provider = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // redirect to home page
          window.location = '/';
        })
        .catch(function(error) {
          alert('Oops. ' + error.message);
        });
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

  &__info {
    font-size: 17px;
    line-height: 25px;
    color: $dark-gray;
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
}

.social {
  &__btn {
    padding: 5px;
  }
  &__logo {
    margin-right: 10px;
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
    .auth-btn {
      margin-top: 30px;
      margin-bottom: 30px;
      padding: 6px;
    }
  }
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

.err-msg {
  margin-bottom: 1rem;
  padding: 5px 10px;
}
</style>
