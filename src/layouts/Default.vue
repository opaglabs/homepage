<template>
  <div>
    <div class="sticky flex top-0 z-50 gap-2 xl:m-0 overflow-x-hidden">
      <div class="w-2/12 hidden lg:block"></div>
      <div class="w-full lg:w-8/12">
        <nav class="flex justify-start">
          <img src="@/assets/images/logo.svg" />
        </nav>
      </div>
    </div>
    <div v-if="showButton" class="fixed z-50 bottom-4 right-4 xl:bottom-8 xl:right-8">
      <button v-ripple @click="handleClick" class="bg-base-5 border-2 border-black relative w-10 h-10 shadow-neobrutalism-min flex justify-center items-center md:transition md:ease-in-out hover:-translate-y-1 hover:scale-110">
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
    lastColor: null,
    showButton: false,
  }),
  methods: {
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
