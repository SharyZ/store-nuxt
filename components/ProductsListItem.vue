<template>
  <div class="products-list-item">
    <img :src="imageUrl" alt="product" />
    <div class="products-list-item-body">
      <h3>{{ category }}</h3>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="products-list-item-footer">
      <button class="border border-primary-500 text-primary-500 font-medium rounded py-1 px-2 hover:bg-primary-500 hover:text-white transition">Add to Cart</button>
      <h4>${{ price }}</h4>
    </div>
  </div>
</template>

<script>
export default {

  name: "ProductsListItem",

  props: {
    imageUrl: {
      type: String,
    },
    category: {
      type: String,
    },
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    price: {
      type: Number,
    },
  },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.products-list-item {
  @apply p-4 h-full rounded overflow-hidden;
}

.products-list-item img {
  @apply lg:h-48 md:h-36 w-full object-cover object-center;
}

.products-list-item-body {
  @apply p-4 bg-slate-50;
}

.products-list-item-body h2 {
  @apply text-lg font-medium text-gray-900 mb-3;
}

.products-list-item-body h3 {
  @apply tracking-widest text-xs font-medium text-gray-400 mb-1;
}

.products-list-item-body p {
  @apply leading-relaxed mb-3 line-clamp-2;
}

.products-list-item-footer {
  @apply p-4 bg-slate-50 border-t border-slate-300 flex items-center flex-wrap justify-between;
}
.products-list-item-footer h4 {
  @apply text-lg;
}
</style>
