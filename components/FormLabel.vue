<template>
  <label class="form-label">
    <slot></slot>
  </label>
</template>

<script>
export default {

  name: "FormLabel",

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.form-label {
  @apply block mb-2 text-lg font-medium;
}
</style>
