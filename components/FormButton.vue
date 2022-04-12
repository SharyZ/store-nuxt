<template>
  <button class="form-button btn btn-primary" type="submit">
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
  @apply block w-full p-3 mb-2;
}
</style>
