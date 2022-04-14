<template>
  <header class="header">
    <div class="header-inner">
      <NuxtLink to="/">
        <img src="~/assets/img/logo.svg" alt="Company" width="52" />
      </NuxtLink>
      <TheHeaderNavigation :categories="categories" :class="{ hidden: menuIsOpen }" />
      <div class="flex items-center space-x-2">
        <div class="header-dropdown group">
          <button class="header-dropdown-button">
            <img class="w-12 h-12 rounded-full" src="https://fakeimg.pl/64x64/282828/eae0d0/" alt="user" />
          </button>
          <div class="header-dropdown-content group-hover:block">
            <NuxtLink to="/">Profile</NuxtLink>
            <NuxtLink to="" @click.native="logout">Logout</NuxtLink>
          </div>
        </div>
        <button @click="toggleMenu" class="lg:hidden">
          <TheMenuIcon />
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {

  name: "TheHeader",

  data () {
    return {
      menuIsOpen: false,
      categories: [
        {
          id: 1,
          name: "Dishes",
          slug: "dishes",
        },
        {
          id: 2,
          name: "Sides",
          slug: "sides",
        },
        {
          id: 3,
          name: "Drinks",
          slug: "drinks",
        },
        {
          id: 4,
          name: "Entrees",
          slug: "entrees",
        },
      ],
    }
  },
  methods: {
    toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
    },
    async logout() {
      await this.$auth.logout();
    },
  },
}
</script>

<style lang="css" scoped>
.header {
  @apply py-4 px-8 bg-slate-50 mb-4 shadow;
  @apply md:py-6 md:px-12;
}

.header-inner {
  @apply p-1 flex items-center justify-between relative;
}

.header-dropdown {
  @apply relative;
}

.header-dropdown-button {}

.header-dropdown-content {
  @apply hidden absolute top-12 right-0 bg-slate-200 w-24 rounded shadow;
}

.header-dropdown-content a {
  @apply block p-2 hover:bg-slate-50;
}
</style>
