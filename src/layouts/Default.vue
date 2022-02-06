<template>
  <div class="bg-white">
    <div class="grid grid-cols-1 gap-4 m-4 lg:m-0 overflow-x-hidden">
      <div class="bg-white">
        <div class="max-w-7xl mx-auto">
          <nav class="flex justify-between" aria-label="Global">
            <div class="flex items-center justify-between w-full md:w-auto">
              <router-link v-ripple class="relative rounded-xl" @click="changeColor" to="/">
                <logo class="lg:-mt-4 h-14 w-auto sm:h-28" />
              </router-link>
              <div class="-mr-2 flex items-center md:hidden">
              </div>
            </div>
            <div class="flex items-center">
              <div class="ml-10 pr-4 space-x-3 md:space-x-8">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.href"
                  class="px-2 py-1 lg:px-4 lg:py-2 font-medium relative border rounded-xl"
                  :class="{
                    'border-red-600 text-red-600': color === 'red',
                    'border-yellow-600 text-yellow-600': color === 'yellow',
                    'border-green-600 text-green-600': color === 'green',
                    'border-blue-600 text-blue-600': color === 'blue',
                    'border-indigo-600 text-indigo-600': color === 'indigo',
                    'border-purple-600 text-purple-600': color === 'purple',
                    'border-pink-600 text-pink-600': color === 'pink',
                  }"
                  v-ripple
                  :active-class="`rounded-xl text-${color}-600 bg-${color}-100 hover:bg-${color}-200 hover:text-${color}-600`"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import { mapGetters } from 'vuex'
import Logo from '../components/logo.vue'

const navigation = [
  // { name: 'Início', href: '/' },
  // { name: 'Sobre', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Contato', href: '/contato' },
]

export default {
  components: {
    MenuIcon,
    XIcon,
    Logo
},
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
    ],
    lastColor: null
  }),
  computed: {
    ...mapGetters(['color'])
  },
  methods: {
    changeColor () {
      const newColor = this.colors[Math.floor(Math.random() * this.colors.length)]

      if (newColor !== this.lastColor)
        this.$store.commit('color', this.colors[Math.floor(Math.random() * this.colors.length)])
      else this.changeColor()
    },
    handleScroll(el) {
      console.log(el.scrollTop);
    }
  },
  created () {
    this.changeColor()
  },
  mounted() {
    const content = document.getElementById('content');
    document.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    const content = document.getElementById('content');
    document.removeEventListener('scroll', this.handleScroll);
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
