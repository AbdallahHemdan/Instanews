<template>
  <div class="container auth-container">
    <div class="row">
      <left-auth></left-auth>
      <div class="right-col text-center">
        <a href="/" class="header-link">
          <h2 class="header">Instanews</h2>
        </a>
        <p class="info">
          Log In into Instanews to see photos and videos from your friends.
        </p>
        <button
          type="button"
          class="btn btn-primary btn-block social-btn"
          @click="authWithFacebook"
        >
          <span class="fa fa-facebook brand-logo"></span>
          Login with facebook
        </button>
        <button type="button" class="btn btn-dark btn-block social-btn" @click="authWithGithub">
          <span class="fa fa-github brand-logo"></span>
          Login with github
        </button>
        <button type="button" class="btn btn-danger btn-block social-btn" @click="authWithGoogle">
          <span class="fa fa-google brand-logo"></span>
          Login with google
        </button>
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
              placeholder="Phone number, username, or email"
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
          <div class="ctas">
            <button
              type="submit"
              class="btn btn-primary btn-block login-btn"
              @click.prevent="login"
            >
              Log In
            </button>
            <div class="alts">
              <div class="forgot">
                <a href="./forget" class="forgot">
                  Forgot password?
                </a>
              </div>
              <div className="have-account">
                <span>Don't have an account? </span>
                <a href="./signup">Sign up</a>
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
}
.right-col {
  background-color: #fff;
  border: 1px solid #ddd;
  width: 400px;
  float: right;
  margin: 20px 10px 0px 10px;
  padding: 40px;
}
.header {
  font-family: 'Pacifico', cursive;
  font-weight: 300;
}

.header-link:hover {
  text-decoration: none;
  color: #007bff;
}

.info {
  font-size: 17px;
  line-height: 25px;
  color: #999;
  margin-bottom: 2rem;
  margin-top: 1rem;
}
.brand-logo {
  margin-right: 10px;
}

.divider {
  border-top: 1px solid #d9dadc;
  display: block;
  line-height: 1px;
  margin: 25px 0;
  position: relative;
  text-align: center;
}

.divider .divider-title {
  background: #fff;
  font-size: 12px;
  letter-spacing: 1px;
  padding: 0 15px;
  text-transform: uppercase;
  color: #999;
}

.email::placeholder,
.password::placeholder {
  color: #555;
  font-size: 18px;
  font-weight: 200;
  opacity: 0.1;
}
.field {
  margin-bottom: 10px;
}

.have-account {
  margin-top: 15px;
}
.have-account a {
  padding: 5px;
}

@media (max-width: 992px) {
  .right-col {
    margin: 20px auto;
  }
}

.login-btn {
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 6px;
}
.err-message {
  color: red;
  font-weight: 400;
  margin-bottom: -15px;
}

.alert-dismissible {
  padding-right: 2rem !important;
}

.social-btn {
  padding: 5px;
}

.form-control {
  background: #fafafa;
  padding: 8px 0 8px 10px;
  color: #444;
  font-size: 14px;
  line-height: 18px;
  min-height: 40px;
  margin-bottom: 1rem;
}

.err-msg {
  margin-bottom: 1rem;
  padding: 5px 10px;
}
</style>
