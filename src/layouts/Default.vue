<template>
  <div>
    <div class="sticky top-0 z-50 grid grid-cols-1 gap-4 m-4 xl:m-0 overflow-x-hidden bg-[#F8F8F8]">
      <div>
        <div class="max-w-screen-xl mx-auto">
          <nav class="flex justify-between" aria-label="Global">
            <div class="flex items-center justify-between w-full md:w-auto py-4">
              <router-link v-ripple class="relative rounded-xl" @click="changeColor" to="/">
                <logo class="w-auto h-16 shadow-neobrutalism" />
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
                  class="relative px-2 py-1 xl:px-4 xl:py-2 font-medium border rounded-xl border-black shadow-neobrutalism-min mt-1"
                  :class="{
                    'text-red-600': color === 'red',
                    'text-yellow-600': color === 'yellow',
                    'text-green-600': color === 'green',
                    'text-blue-600': color === 'blue',
                    'text-indigo-600': color === 'indigo',
                    'text-purple-600': color === 'purple',
                    'text-pink-600': color === 'pink',
                  }"
                  v-ripple
                  :active-class="`rounded-xl text-white bg-${color}-600`"
                >
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div v-if="showButton" class="fixed z-50 bottom-4 right-4 xl:bottom-8 xl:right-8">
      <button v-ripple @click="handleClick" class="border border-black relative rounded-full w-10 h-10 shadow-neobrutalism-min flex justify-center items-center md:transition md:ease-in-out hover:-translate-y-1 hover:scale-110" :class="returnColor">
        <ChevronUpIcon class="text-white w-6" />
      </button>
    </div>
    <router-view class="mt-8" v-slot="{ Component }">
      <transition name="scale" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { MenuIcon, XIcon, ChevronUpIcon } from '@heroicons/vue/outline'
import { mapGetters } from 'vuex'
import Logo from '../components/logo.vue'

const navigation = [
  // { name: 'Sobre', href: '/sobre' },
  { name: 'Projetos', href: '/projetos' },
  { name: 'Contato', href: '/contato' },
]

export default {
  components: {
    MenuIcon,
    XIcon,
    ChevronUpIcon,
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
    lastColor: null,
    showButton: false,
  }),
  computed: {
    ...mapGetters(['color']),
    returnColor() {
      return {
        'bg-red-600': this.color === 'red',
        'bg-yellow-600': this.color === 'yellow',
        'bg-green-600': this.color === 'green',
        'bg-blue-600': this.color === 'blue',
        'bg-indigo-600': this.color === 'indigo',
        'bg-purple-600': this.color === 'purple',
        'bg-pink-600': this.color === 'pink',
      }
    }
  },
  methods: {
    changeColor () {
      const newColor = this.colors[Math.floor(Math.random() * this.colors.length)]

      if (newColor !== this.lastColor)
        this.$store.commit('color', this.colors[Math.floor(Math.random() * this.colors.length)])
      else this.changeColor()
    },
    handleScroll() {
      const scrollTop = window.scrollY;

      if (scrollTop > 200) {
        this.showButton = true;
      } else {
        this.showButton = false;
      }
    },
    handleClick() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

      this.changeColor();
    }
  },
  created () {
    this.changeColor()
  },
  mounted() {
    document.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
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
