<template>
  <div class="product-page">
    {{ product }}
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
