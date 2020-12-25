<template>
  <div class="register-page">
    <b-container>
      <h5 class="auth-logo">
        <i class="fa fa-circle text-primary"></i>
        Platform Online School
        <i class="fa fa-circle text-danger"></i>
      </h5>
      <div class="d-flex justify-content-center align-items-center container">
        <img src="../../assets/logo-black.png" alt="image" width="50 px">
      </div>
      <Widget class="widget-auth mx-auto" title="<h3 class='mt-0'>Register</h3>" customHeader>
        <p class="widget-auth-info">
            Use your email to sign up.
        </p>
        <form class="mt" @submit.prevent="register">
          <b-alert class="alert-sm" variant="danger" :show="!!errorMessage">
            {{errorMessage}}
          </b-alert>
          <div class="form-group">
            <input class="form-control no-border" v-model="name" required type="text" name="name" placeholder="Name" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" v-model="address" required type="text" name="address" placeholder="Address" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" v-model="birthdate" required type="date" name="birthdate" placeholder="Birthdate" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" v-model="email" required type="email" name="email" placeholder="Email" />
          </div>
          <div class="form-group">
            <input class="form-control no-border" v-model="password" required type="password" name="password" placeholder="Password" />
          </div>
          <b-button type="submit" size="sm" class="auth-btn mb-3" variant="inverse">Register</b-button>
        </form>
        <p class="widget-auth-info">
          Do you have an account? Sign in now!
        </p>
        <router-link class="d-block text-center" to="login">Sign In</router-link>
      </Widget>
    </b-container>
    <footer class="auth-footer">
      &copy; 2020 - Made by <a href="https://github.com/rungKelas" rel="nofollow noopener noreferrer" target="_blank">Ruang Kelas</a>
    </footer>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'RegisterPage',
  components: { Widget },
  data() {
    return {
      errorMessage: null,
      name: '',
      address: '',
      birthdate: '',
      email: '',
      password: ''
    };
  },
  methods: {
    register () {
      const { name, address, birthdate, email, password } = this
      const payload = {
        name,
        address,
        birthdate,
        email,
        password
      }
      this.$store.dispatch('register', payload)
        .then(() => {
          this.$router.push({ name: 'LoginPage' })
        })
        .catch(err => {
          throw err.response
        })
    }
  },
};
</script>
<style>
.register-page {
  background-image: url('../../assets/background_1.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>