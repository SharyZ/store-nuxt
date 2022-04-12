<template>
  <input class="form-input" type="text" >
</template>

<script>
export default {

  name: "FormInput",

  props: {
    type: {
      type: String,
      default() {
        return "text";
      },
    },
  },
}
</script>

<style lang="css" scoped>
.form-input {
  @apply w-full bg-white rounded shadow-md p-3 mb-2 border-none placeholder:text-slate-400 focus:ring-primary-500 focus:ring-2;
}
</style>
