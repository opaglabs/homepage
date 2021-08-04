<template>
  <div class="bg-white">
    <div class="max-w-7xl mx-auto">
      <div class="z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">

        <div class="pt-6 px-4 sm:px-6 lg:px-8">
          <nav class="flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
            <div class="flex items-center flex-grow flex-shrink-0">
              <div class="flex items-center justify-between w-full md:w-auto">
                <router-link to="/">
                  <span class="sr-only">Op.ag Logo</span>
                  <img src="../assets/logo-block.svg" class="cover h-20 w-auto sm:h-28 rounded-xl" :class="[`bg-${color}-600`]" />
                </router-link>
                <div class="-mr-2 flex items-center md:hidden">
                </div>
              </div>
            </div>
            <div class="ml-10 pr-4 space-x-3 md:space-x-8">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="item.href"
                class="px-4 py-1 font-medium text-gray-500 hover:text-gray-900"
                :active-class="[`rounded-xl text-${color}-600 bg-${color}-100 hover:bg-${color}-200 hover:text-${color}-600`]"
              >
                {{ item.name }}
              </router-link>
              <!-- <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">Log in</a> -->
            </div>
          </nav>
        </div>
        <router-view v-slot="{ Component }">
          <transition name="scale" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
        <!-- <router-view /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import { Popover, PopoverButton, PopoverPanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { mapGetters } from 'vuex'

const navigation = [
  // { name: 'Início', href: '/' },
  // { name: 'Sobre', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Contato', href: '/contato' },
]

export default {
  components: {
    // Popover: () => import.meta.env.SSR ? Popover : '<div>Loading...</div>',
    // PopoverButton,
    // PopoverPanel,
    MenuIcon,
    XIcon
  },
  // setup() {
  //   const colors = [
  //     'red',
  //     'yellow',
  //     'green',
  //     'blue',
  //     'indigo',
  //     'purple',
  //     'pink'
  //   ]
  //   const color = colors[Math.floor(Math.random() * colors.length)]
  //   return {
  //     navigation,
  //     color
  //   }
  // },
  data: () => ({
    navigation,
    colors: [
      'red',
      'yellow',
      'green',
      'blue',
      'indigo',
      'purple',
      'pink'
    ]
  }),
  computed: {
    ...mapGetters(['color'])
  },
  created () {
    this.$store.commit('color', this.colors[Math.floor(Math.random() * this.colors.length)])
  }
}
</script>

<style scoped>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.2s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(.97);
}
</style>
