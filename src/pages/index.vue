<template>
  <main class="relative flex items-start justify-between mt-10 px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
    <div class="sm:text-center lg:text-left">
      <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block xl:inline">{{color}} - Engenharia de Software,</span>
        {{ ' ' }}
        <span class="block xl:inline" :class="[`text-${color}-600`]">Plataformas & Negócios</span>
      </h1>
      <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
        "Acredito em uma nova forma de computação, onde os sistemas passam a deixar de serem engessados, para começarem a entender o contexto do que estão operacionalizando, tornando-se uma Computação Aconselhada."
        <span class="text-base">- Otávio Paganotti</span>
      </p>
      <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
        <div class="rounded-md shadow">
          <router-link to="/contato" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10" :class="[`bg-${color}-600 hover:bg-${color}-600`]">
            Contato
          </router-link>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <router-link to="/projetos" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10" :class="[`text-${color}-600 bg-${color}-100 hover:bg-${color}-200`]">
            Projetos Realizados
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden md:block w-2/3 h-48">
      <img class="object-cover w-auto shadow-md hover:shadow-xl rounded-3xl" src="../assets/hero-bg-2.jpg" alt="" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['color'])
  },
}
</script>
