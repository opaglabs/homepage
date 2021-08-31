<template>
  <main class="relative flex items-start justify-between mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div class="sm:text-center lg:text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block xl:inline">Engenharia de Software,</span>
        {{ ' ' }}
        <span class="block xl:inline" :class="{
          'text-red-600': color === 'red',
          'text-yellow-600': color === 'yellow',
          'text-green-600': color === 'green',
          'text-blue-600': color === 'blue',
          'text-indigo-600': color === 'indigo',
          'text-purple-600': color === 'purple',
          'text-pink-600': color === 'pink',
        }">Plataformas & Negócios</span>
      </h1>
      <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        "Acredito em uma nova forma de computação, onde os sistemas deixam de serem engessados, para começarem a entender o contexto do que estão operacionalizando, tornando-se uma Computação Aconselhada."
        <span class="text-base">- Otávio Paganotti</span>
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <router-link to="/contato" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 relative" v-ripple :class="{
            'bg-red-600 hover:bg-red-600': color === 'red',
            'bg-yellow-600 hover:bg-yellow-600': color === 'yellow',
            'bg-green-600 hover:bg-green-600': color === 'green',
            'bg-blue-600 hover:bg-blue-600': color === 'blue',
            'bg-indigo-600 hover:bg-indigo-600': color === 'indigo',
            'bg-purple-600 hover:bg-purple-600': color === 'purple',
            'bg-pink-600 hover:bg-pink-600': color === 'pink',
          }">
            Contato
          </router-link>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <router-link to="/projetos" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 relative" v-ripple :class="{
            'text-red-600 bg-red-100 hover:bg-red-200': color === 'red',
            'text-yellow-600 bg-yellow-100 hover:bg-yellow-200': color === 'yellow',
            'text-green-600 bg-green-100 hover:bg-green-200': color === 'green',
            'text-blue-600 bg-blue-100 hover:bg-blue-200': color === 'blue',
            'text-indigo-600 bg-indigo-100 hover:bg-indigo-200': color === 'indigo',
            'text-purple-600 bg-purple-100 hover:bg-purple-200': color === 'purple',
            'text-pink-600 bg-pink-100 hover:bg-pink-200': color === 'pink',
          }">
            Projetos Realizados
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden md:block w-2/3 h-48">
      <hero :color="color" class="object-cover w-5/5 rounded-3xl p-5" />
      <!-- <img class="object-cover w-auto shadow-md hover:shadow-xl rounded-3xl" src="../assets/hero-bg-2.jpg" alt="" /> -->
    </div>
  </main>
</template>

<script>
import Hero from '@/components/hero.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Hero
  },
  computed: {
    ...mapGetters(['color'])
  },
}
</script>
