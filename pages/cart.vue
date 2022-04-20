<template>
  <div>
    <h1>Cart</h1>
    <div class="overflow-x-auto shadow-md sm:rounded-lg">
      <div class="inline-block min-w-full align-middle">
        <table class="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>
                <div class="flex items-center space-x-2">
                  <img class="w-20" :src="item.product.image" alt="" />
                  <h3>{{ item.product.name }}</h3>
                </div>
              </td>
              <td>
                <h3>{{ item.product.price }}</h3>
              </td>
              <td>
                <div class="flex items-center justify-center space-x-4">
                  <button
                    class="btn btn-primary rounded-full px-3 py-1"
                  >
                    -
                  </button>
                  <span class="text-lg font-medium">
                    {{ item.quantity }}
                  </span>
                  <button
                    class="btn btn-primary rounded-full px-3 py-1"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <span class="text-lg font-bold text-primary-500">$238</span>
              </td>
              <td>
                <button class="btn">
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: "CartPage",

  middleware: ["auth"],

  async asyncData ({ $axios }) {
    const cart = await $axios.$get(`cart/`)

    return {
      cart
    }
  }
}
</script>

<style lang="css" scoped>
.cart-table {
  @apply min-w-full table-fixed bg-slate-100;
}

.cart-table thead {
  @apply border-b border-primary-500 bg-slate-50;
}

.cart-table th {
  @apply py-3 px-6 text-center text-xs font-medium uppercase tracking-wider;
}

.cart-table tbody {
  @apply divide-y divide-primary-200;
}

.cart-table tr {
  @apply text-center;
}

.cart-table td {
  @apply w-4 p-4;
}
</style>
