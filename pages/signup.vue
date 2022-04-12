<template>
  <div class="signup-page">
    <Form @submit.prevent="userSignup">
      <template #form-header>
        <SignupFormIcon class="mb-4" />
        <h2>Create new account</h2>
      </template>
      <FormControl>
        <FormLabel for="username">Username</FormLabel>
        <FormInput v-model="username" type="text" id="username" name="username" placeholder="Username" />
        <FormInputError>
          <p>Username is not correct.</p>
        </FormInputError>
      </FormControl>
      <FormControl>
        <FormLabel for="email">Email address</FormLabel>
        <FormInput v-model="email" type="email" id="email" name="email" placeholder="Email" />
        <FormInputError>
          <p>Email is not correct.</p>
        </FormInputError>
      </FormControl>
      <FormControl>
        <FormLabel for="password">Password</FormLabel>
        <FormInput v-model="password" type="password" id="password" name="password" placeholder="Password" />
        <FormInputError>
          <p>Password must be more than 6 characters.</p>
        </FormInputError>
      </FormControl>
      <FormButton>Signup</FormButton>
      <template #form-footer>
        <p>Already have an account? <NuxtLink to="/login">Login now</NuxtLink></p>
      </template>
    </Form>
  </div>
</template>

<script>
export default {

  name: "SignupPage",

  layout: "fullscreen",

  data () {
    return {
      username: "",
      email: "",
      password: "",
    }
  },
  methods: {
    async userSignup() {
      const { username, email, password } = this;

      alert(`Signup on process...`)
    }
  }
}
</script>

<style lang="css" scoped>
.signup-page {
  @apply min-h-screen flex items-center justify-center;
}
</style>
