<template>
  <form class="form" @submit.prevent="$emit('onSubmit')">
    <div class="form-header">
      <slot name="form-header"></slot>
    </div>
    <slot></slot>
    <div class="form-footer">
      <slot name="form-footer"></slot>
    </div>
  </form>
</template>

<script>
export default {

  name: "Form",

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.form {
  @apply p-6 rounded max-w-md w-full bg-slate-50 shadow;
}

.form-header,
.form-footer {
  @apply flex flex-col items-center justify-center p-4;
}
</style>
