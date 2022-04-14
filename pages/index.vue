<template>
  <div>
    <section class="my-2">
      <ProductsList>
        <template #products-list-header>
          <h1>Last Products</h1>
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

  data() {
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
      ]
    }
  }
}
</script>
