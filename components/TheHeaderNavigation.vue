<template>
  <nav class="navigation">
    <NuxtLink
      v-for="category in categories"
      :key="category.id"
      :to="{ to: 'CategoryPage', params: { slug: category.slug } }
    ">
      {{ category.name }}
    </NuxtLink>
  </nav>
</template>

<script>
export default {

  name: "TheHeaderNavigation",

  props: {
    categories: {
      type: Array,
      required: true,
    }
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.navigation {
  @apply rounded text-lg absolute w-full top-24 bg-slate-50 lg:flex lg:items-center lg:space-x-6 lg:relative lg:top-0 lg:w-auto;
}

.navigation a {
  @apply hover:bg-slate-200 lg:rounded px-6 py-2 block lg:inline-block;
}
</style>
