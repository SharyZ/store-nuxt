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

  data () {
    return {
      products: [
        {
          id: 1,
          imageUrl: "https://fakeimg.pl/720x400/282828/eae0d0",
          category: "Dishes",
          name: "Pasta",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque facilis corporis!",
          price: 25,
        },
        {
          id: 2,
          imageUrl: "https://fakeimg.pl/720x400/282828/eae0d0",
          category: "Dishes",
          name: "Pasta",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque facilis corporis!",
          price: 25,
        },
        {
          id: 3,
          imageUrl: "https://fakeimg.pl/720x400/282828/eae0d0",
          category: "Dishes",
          name: "Pasta",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque facilis corporis!",
          price: 25,
        },
        {
          id: 4,
          imageUrl: "https://fakeimg.pl/720x400/282828/eae0d0",
          category: "Dishes",
          name: "Pasta",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque facilis corporis!",
          price: 25,
        },
        {
          id: 1,
          imageUrl: "https://fakeimg.pl/720x400/282828/eae0d0",
          category: "Dishes",
          name: "Pasta",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque facilis corporis!",
          price: 25,
        },
        {
          id: 2,
          imageUrl: "https://fakeimg.pl/720x400/282828/eae0d0",
          category: "Dishes",
          name: "Pasta",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque facilis corporis!",
          price: 25,
        },
        {
          id: 3,
          imageUrl: "https://fakeimg.pl/720x400/282828/eae0d0",
          category: "Dishes",
          name: "Pasta",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque facilis corporis!",
          price: 25,
        },
        {
          id: 4,
          imageUrl: "https://fakeimg.pl/720x400/282828/eae0d0",
          category: "Dishes",
          name: "Pasta",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloremque facilis corporis!",
          price: 25,
        },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
