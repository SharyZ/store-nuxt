<template>
  <div>
    <section class="my-2">
      <ProductsList>
        <template #products-list-header>
          <h1>Last Products</h1>
        </template>
        <ProductsListItem
          v-for="product in lastProducts"
          :key="product.id"
          :id="product.id"
          :imageUrl="product.imageUrl"
          :category="product.category"
          :name="product.name"
          :description="product.description"
          :price="product.price"
        />
        <template #products-list-footer>
          <NuxtLink class="btn btn-primary px-6 py-2" to="/products">See all</NuxtLink>
        </template>
      </ProductsList>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  middleware: ["auth"],

  async asyncData({ $axios }) {
    const limit = 4;
    const lastProducts = await $axios.$get(`products/?limit=${limit}`);

    return {
      lastProducts,
    }
  },

  data() {
    return {

    }
  }

}
</script>
