<template>
  <ProductsList>
    <template #products-list-header>
      <h1>All Products</h1>
    </template>
    <ProductsListItem
      v-for="product in products"
      :key="product.id"
      :id="product.id"
      :imageUrl="product.imageUrl"
      :category="product.category"
      :name="product.name"
      :description="product.description"
      :price="product.price"
    />
    <template #products-list-footer>
      <NuxtLink class="btn btn-primary btn-icon px-6 py-2" to="/">
        <ArrowLeftIcon class="w-4 h-4" />
        <span>Prev</span>
      </NuxtLink>
      <NuxtLink class="btn btn-primary btn-icon px-6 py-2" to="/">
        <ArrowRightIcon class="w-4 h-4" />
        <span>Next</span>
      </NuxtLink>
    </template>
  </ProductsList>
</template>

<script>
export default {

  name: "ProductsPage",

  middleware: ["auth"],

  async asyncData({ $axios }) {
    const products = await $axios.$get(`products/`);

    return {
      products,
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
