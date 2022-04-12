<template>
  <button class="form-button" type="submit">
    <slot></slot>
  </button>
</template>

<script>
export default {

  name: "FormButton",

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.form-button {
  @apply block w-full bg-primary-500 text-white text-lg font-medium rounded p-3 mb-2;
}
</style>
