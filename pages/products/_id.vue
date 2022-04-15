<template>
  <div class="product-page">
    <div class="flex px-5 py-24 md:flex-row flex-col">
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <img
          class="object-cover object-center rounded w-full"
          :src="product.image"
          :alt="product.name"
        />
      </div>
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <div class="mb-4">
          <h1>{{ product.name }}</h1>
          <h2>Price: <span class="text-primary-500">${{product.price}}</span></h2>
          <h3>Category: <NuxtLink :to="'/categories/' + product.category.slug">{{ product.category.name }}</NuxtLink></h3>
          <p v-html="product.description"></p>
        </div>
        <div>
          <button class="btn btn-primary px-12 py-4 text-xl">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "ProductPage",

  async asyncData({ params, $axios }) {
    const { id } = params;
    const product = await $axios.$get(`products/${id}`);

    return {
      product
    }
  }
}
</script>

<style lang="css" scoped>
</style>
