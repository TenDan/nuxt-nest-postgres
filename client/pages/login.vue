<template>
  <section class="hero is-medium is-fullheight-with-navbar">
    <div class="hero-head has-text-centered pt-5 px-2">
      <h1 class="title">Zaloguj się</h1>
    </div>
    <div class="hero-body has-text-centered">
      <form @submit="checkForm" class="form" method="POST" action="/login">
        <b-field
          :type="errors.name.value ? 'is-danger' : ''"
          :message="errors.name.message"
          custom-class="is-medium"
          label="Nazwa użytkownika"
          label-position="on-border"
          class="py-4"
        >
          <b-input
            name="username"
            autocomplete="tendan-username"
            size="is-large"
            icon-pack="fa"
            v-model="name"
            rounded
          ></b-input>
        </b-field>

        <b-field
          :type="errors.password.value ? 'is-danger': ''"
          :message="errors.password.message"
          custom-class="is-medium"
          label="Hasło"
          label-position="on-border"
          class="py-4"
        >
          <b-input
            name="password"
            autocomplete="tendan-password"
            size="is-large"
            icon-pack="fa"
            type="password"
            v-model="password"
            :password-reveal="true"
            rounded
          ></b-input>
        </b-field>
        <b-field>
          <div class="control">
            <button
              @click="clickBtn"
              type="submit"
              class="button is-link is-primary is-fullwidth is-rounded"
              :class="clicked ? 'is-loading' : ''"
              :disabled="clicked"
            >Zaloguj się</button>
          </div>
        </b-field>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Zaloguj się'
    }
  },
  data() {
    return {
      name: '',
      password: '',
      clicked: false,
      errors: {
        name: {
          value: false,
          message: '',
        },
        password: {
          value: false,
          message: '',
        },
      },
    };
  },
  methods: {
    async loginUser() {
      let data = {
        username: this.name,
        password: this.password,
      };
      try {
        let response = await this.$auth.loginWith('local', { data });
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    },
    checkForm: function(e) {
      if (this.name && this.password) {
        return true;
      }
      if (!this.name) {
        this.errors.name.value = true;
        this.errors.name.message = 'Brak nazwy użytkownika';
      }
      if (!this.password) {
        this.errors.password.value = true;
        this.errors.password.message = 'Brak hasła';
      }
      e.preventDefault();
    },
    clickBtn: function() {
      this.clicked = true;
      setTimeout(() => {
        this.clicked = false;
      }, 3000);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()

      setTimeout(() => this.$nuxt.$loading.finish(), 1000)
    })
  },
};
</script>

<style scoped>
.hero-body {
  justify-content: center;
}
.form {
  text-align: left;
}
</style>