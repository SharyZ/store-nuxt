<template>
  <div>
    <section class="my-2">
      <h1>Last Products</h1>
      <ProductsList :products="products" />
      <div class="my-4 flex justify-center">
        <NuxtLink class="inline-block bg-primary-500 text-white text-lg font-medium rounded px-4 py-2" to="products">See all</NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",

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
