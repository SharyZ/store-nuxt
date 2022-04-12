<template>
  <div class="forgot-password-page">
    <Form @submit.prevent="userForgotPassword">
      <template #form-header>
        <ForgotPasswordFormIcon class="mb-4" />
        <h2>Refresh password</h2>
      </template>
        <FormControl>
        <FormLabel for="email">Email address</FormLabel>
        <FormInput v-model="email" type="email" id="email" name="email" placeholder="Email" />
        <FormInputError>
          <p>Email is not correct.</p>
        </FormInputError>
      </FormControl>
      <FormButton>Refresh</FormButton>
      <template #form-footer>
        <p>Go back to <NuxtLink to="/login">Login</NuxtLink></p>
      </template>
    </Form>
  </div>
</template>

<script>
export default {

  name: "ForgotPasswordPage",

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.forgot-password-page {
  @apply min-h-screen flex items-center justify-center;
}
</style>
