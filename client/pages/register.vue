<template>
  <section class="hero is-medium is-fullheight-with-navbar">
    <div class="hero-head has-text-centered pt-5 px-2">
      <h1 class="title">Zarejestruj się</h1>
    </div>
    <div class="hero-body has-text-centered">
      <form @submit="checkForm" class="form">
        <b-field
          custom-class="is-medium"
          label="Nazwa użytkownika"
          label-position="on-border"
          :type="errors.username.value ? 'is-danger' : ''"
          :message="errors.username.message"
          class="py-4"
        >
          <b-input
            name="username"
            autocomplete="tendan-username"
            size="is-large"
            icon-pack="fa"
            v-model="username"
            @input="() => { errors.username.value = false; errors.username.message = '' }"
            :disabled="clicked"
            rounded
          ></b-input>
        </b-field>

        <b-field
          custom-class="is-medium"
          label="E-mail"
          label-position="on-border"
          :type="errors.email.value ? 'is-danger' : ''"
          :message="errors.email.message"
          class="py-4"
        >
          <b-input
            name="email"
            autocomplete="tendan-email"
            size="is-large"
            icon-pack="fa"
            v-model="email"
            @input="() => { errors.email.value = false; errors.email.message = '' }"
            :disabled="clicked"
            rounded
          ></b-input>
        </b-field>

        <b-field
          custom-class="is-medium"
          label="Hasło"
          label-position="on-border"
          :type="errors.password.value ? 'is-danger' : ''"
          :message="errors.password.message"
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
            @input="() => { errors.password.value = false; errors.password.message = '' }"
            :disabled="clicked"
            rounded
          ></b-input>
        </b-field>
        <b-field
          custom-class="is-medium"
          label="Powtórz hasło"
          label-position="on-border"
          :type="errors.repeatPassword.value ? 'is-danger' : ''"
          :message="errors.repeatPassword.message"
          class="py-4"
        >
          <b-input
            autocomplete="off"
            size="is-large"
            icon-pack="fa"
            type="password"
            v-model="repeatPassword"
            @input="() => { errors.repeatPassword.value = false; errors.repeatPassword.message = '' }"
            :disabled="clicked"
            rounded
          ></b-input>
        </b-field>
        <b-field icon-pack="fa">
          <div class="control">
            <button
              @click="clickBtn"
              type="submit"
              class="button is-link is-primary is-fullwidth is-rounded"
              :class="clicked && 'is-loading'"
              :disabled="clicked"
            >Zarejestruj się</button>
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
      title: 'Zarejestruj się'
    }
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repeatPassword: '',
      errors: {
        username: {
          value: false,
          message: '',
        },
        email: { value: false, message: '' },
        password: { value: false, message: '' },
        repeatPassword: {
          value: false,
          message: '',
        },
      },
      clicked: false,
    };
  },
  methods: {
    async registerUser() {
      let data = {
        username: this.username,
        email: this.email,
        password: this.password,
      }
      try {
        await this.$axios.post("/register", data);
        this.$router.push("/login");
        this.$buefy.notification.open({
          type: "is-success",
          message: "Sukces! Pomyślnie utworzono konto. Teraz się zaloguj."
        });
      } catch (error) {
        console.log(error.response.data.message);
        error.response.data.message.map((message) => {
          this.errors.[message.property].value = true;
          this.errors.[message.property].message = Object.values(message.constraints);
        })
        this.$buefy.notification.open({
          type: "is-danger",
          message: "Błąd! Sprawdź formularz, aby dowiedzieć się więcej.",
        })
      }
    },
    checkForm: function(e) {
      if (this.username && this.email && this.password) {
        this.registerUser();
      }
      if (!this.username) {
        this.errors.username.value = true;
        this.errors.username.message = 'Nazwa użytkownika jest wymagana';
      }
      if (!this.email) {
        this.errors.email.value = true;
        this.errors.email.message = 'Adres email jest wymagany';
      }
      if (!this.password) {
        this.errors.password.value = true;
        this.errors.password.message = 'Hasło jest wymagane';
      }
      if (this.password !== this.repeatPassword) {
        this.errors.repeatPassword.value = true;
        this.errors.repeatPassword.message = 'Hasła nie są identyczne';
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
      this.$nuxt.$loading.start();

      setTimeout(() => this.$nuxt.$loading.finish(), 1000);
    });
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