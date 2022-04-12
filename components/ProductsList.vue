<template>
  <div class="products-list">
    <ProductsListItem
      v-for="product in products"
      :key="product.id"
      :imageUrl="product.imageUrl"
      :category="product.category"
      :name="product.name"
      :description="product.description"
      :price="product.price"
    />
  </div>
</template>

<script>
export default {

  name: "ProductsList",

  props: {
    products: {
      type: Array,
      required: true,
      default() {
        return []
      }
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.products-list {
  @apply grid gap-1 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4;
}
</style>
