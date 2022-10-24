<template>
  <section id="contato" class="flex gap-2">
    <div class="w-2/12 relative hidden lg:block">
      <img src="@/assets/images/project_line_1.svg" class="absolute top-5" />
    </div>
    <div class="w-full lg:w-8/12 px-4 lg:px-0">
      <div class="w-full">
        <h2 class="text-4xl tracking-tight font-extrabold">Contato</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
        <div
          v-for="(item, i) in contactCards"
          :key="i"
          class="relative shadow-neobrutalism bg-white border-2 border-solid border-black transition ease-in-out delay-150 hover:scale-[102%] hover:z-10"
        >
          <div class="grid grid-cols-1 gap-4 p-4">
            <div class="flex gap-4">
              <img :src="item.icon" />
              <h1 class="font-semibold text-2xl">{{ item.title }}</h1>
            </div>
            <p class="text-xl mt-1">{{ item.description }}</p>
            <a
              class="px-8 py-3 border-2 border-black shadow-neobrutalism text-base font-medium md:py-4 md:text-lg md:px-10 flex justify-center"
              :href="item.link"
              target="_blank"
            >
              Visualizar Perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import gbIcon from '@/assets/images/icons/github.svg';
import igIcon from '@/assets/images/icons/instagram.svg';
import inIcon from '@/assets/images/icons/linkedin.svg';
import { ref } from 'vue';

const contactCards = ref([
  {
    icon: igIcon,
    title: 'Instagram',
    description: 'opag.software',
    link: 'https://www.instagram.com/opag.software/',
  },
  {
    icon: inIcon,
    title: 'LinkedIn',
    description: 'otavio-paganotti',
    link: 'https://www.linkedin.com/in/otavio-paganotti/',
  },
  {
    icon: gbIcon,
    title: 'Github',
    description: 'otavio-paganotti',
    link: 'https://github.com/otavio-paganotti',
  },
  {
    icon: gbIcon,
    title: 'Opag\'s Github Organization',
    description: 'opaglabs',
    link: 'https://github.com/opaglabs',
  },
]);
</script>
