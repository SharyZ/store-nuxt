<template>
  <NuxtLink class="products-list-item" :to="`/products/${id}`">
    <img :src="imageUrl" alt="product" />
    <div class="products-list-item-body">
      <h3>
        <NuxtLink :to="'/categories/' + category.slug">{{ category.name }}</NuxtLink>
      </h3>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </div>
    <div class="products-list-item-footer">
      <button class="btn btn-outline" @click.prevent="">Add to Cart</button>
      <h4>${{ price }}</h4>
    </div>
  </NuxtLink>
</template>

<script>
export default {

  name: "ProductsListItem",

  props: {
    id: {
      type: Number,
      required: true,
    },
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
      type: Object,
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
  @apply font-medium text-gray-900 mb-3;
}

.products-list-item-body h3 {
  @apply tracking-widest text-xs font-medium mb-1 bg-secondary-100 text-secondary-400 inline-block py-1 px-2 rounded-sm;
}

.products-list-item-body p {
  @apply leading-relaxed mb-3 line-clamp-2 text-slate-700;
}

.products-list-item-footer {
  @apply p-4 bg-slate-50 border-t border-slate-300 flex items-center flex-wrap justify-between;
}
.products-list-item-footer h4 {
  @apply text-lg;
}
</style>
