<template>
  <div class="flex gap-4 justify-start w-full flex-wrap p-4">
    <div
      v-for="company in companies"
      :key="company.title"
      class="flex-[1_0_100%] md:flex-[1_0_40%] lg:flex-[1_0_30%] p-4 filter grayscale hover:grayscale-0 transition-all duration-200 hover:bg-neutral-200 hover:rounded-2xl"
    >
      <a :href="company.link" target="_blank">
        <img
          :src="company.image"
          class="w-28 mx-auto"
        />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import dourasoftLogo from '@/assets/images/companies/dourasoft.png';
import i9tvLogo from '@/assets/images/companies/i9tv.png';
import oiLogo from '@/assets/images/companies/oi.png';
import portabilisLogo from '@/assets/images/companies/portabilis.png';
import { ref } from 'vue';
import teachLearnLogo from '@/assets/images/companies/teachlearn.png';

const companies = ref([
  {
    title: 'DouraSoft do Brasil',
    image: dourasoftLogo,
    link: 'https://www.dourasoft.com.br/'
  },
  {
    title: 'Teach Learn',
    image: teachLearnLogo,
    link: 'https://www.teachlearn.com.br/'
  },
  {
    title: 'i9tv',
    image: i9tvLogo,
    link: 'https://www.i9tv.com.br/'
  },
  {
    title: 'Portábilis',
    image: portabilisLogo,
    link: 'https://www.portabilis.com.br/'
  },
  {
    title: 'OI S/A',
    image: oiLogo,
    link: 'https://www.oi.com.br/'
  }
]);
</script>
