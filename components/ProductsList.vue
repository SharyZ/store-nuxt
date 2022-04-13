<template>
  <div class="products-list">
    <div class="products-list-header">
      <slot name="products-list-header"></slot>
    </div>
    <div class="products-list-grid">
      <slot></slot>
    </div>
    <div class="products-list-footer">
      <slot name="products-list-footer"></slot>
    </div>
  </div>
</template>

<script>
export default {

  name: "ProductsList",

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.products-list-header {}

.products-list-footer {
  @apply my-4 flex justify-center;
}

.products-list-grid {
  @apply grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
}
</style>
