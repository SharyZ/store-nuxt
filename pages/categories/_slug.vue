<template>
  <div class="category-page">
    {{ category }}
  </div>
</template>

<script>
export default {

  name: "CategoryPage",

  async asyncData({ params, $axios }) {
    const { slug } = params;
    const category = await $axios.$get(`categories/${slug}`);

    return {
      category
    }
  }
}
</script>

<style lang="css" scoped>
</style>
