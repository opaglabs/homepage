<template>
  <div class="flex gap-2 h-screen">
    <div class="w-2/12 relative hidden lg:block">
      <img src="@/assets/images/hero_arrow.svg" class="absolute top-80 hidden lg:block" />
    </div>
    <div class="w-full lg:w-8/12 py-4 p-4 lg:px-0 grid grid-cols-1 gap-36">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div class="flex flex-col gap-12 self-center">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-center lg:text-left"
          >
            <span class="block xl:inline">Engenheiro de Software, especialista em</span>
            {{ " " }}
            <span
              class="block text-[#4E49F2]"
              >Plataformas para seu Negócio
            </span>
          </h1>
          <div class="hidden lg:block">
            <contact-button />
          </div>
        </div>
        <div class="flex lg:justify-end justify-center">
          <img src="@/assets/images/hero_2.png" class="h-[400px] lg:h-5/6" />
        </div>
        <div class="lg:hidden flex justify-center">
          <contact-button />
        </div>
      </div>
      
    </div>
  </div>
  <div class="relative flex gap-2">
    <div class="w-2/12 hidden lg:block"></div>
    <div class="w-full lg:w-8/12 grid grid-cols-1 lg:grid-cols-3 gap-12 px-4 lg:px-0">
      <h2 class="col-span-3 flex justify-center text-4xl tracking-tight font-extrabold text-gray-900">O que fazemos?</h2>
      <div
        v-for="(item, index) in whatWeDo"
        class="flex flex-col gap-4 items-center col-span-3 lg:col-span-1"
      >
        <div class="shadow-neobrutalism h-full border border-black">
          <div
            class="flex gap-2 p-2"
            :class="[item.color]"
          >
            <div v-for="(i) in index + 1" class="h-4 w-4 rounded-full bg-white"></div>
          </div>
          <div class="p-4 flex flex-col content-between gap-4">
            <div class="flex justify-center font-extrabold tracking-tight">
              {{ item.title }}
            </div>
            <div class="">
              {{ item.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-2/12 hidden lg:block">
      <img src="@/assets/images/section_arrow.svg" class="absolute top-1/3 right-0 max-w-[240px] hidden lg:block" />
    </div>
  </div>
  <div class="relative mt-12">
    <div class="bg-base-4 relative flex gap-2">
      <div class="w-2/12 relative">
        <img src="@/assets/images/project_line_1.svg" class="absolute top-9">
      </div>
      <div class="w-8/12">
        <div class="py-4">
          <div class="w-full">
            <h2 class="text-4xl tracking-tight font-extrabold text-white">Projetos</h2>
          </div>
        </div>
        <project-cards />
      </div>
    </div>
    <div class="bg-base-3 relative flex gap-2">
      <div class="w-2/12 relative">
        <img src="@/assets/images/project_line_1.svg" class="absolute top-9">
      </div>
      <div class="w-8/12">
        <div class="py-4">
          <div class="w-full">
            <h2 class="text-4xl tracking-tight font-extrabold text-white">Projetos</h2>
          </div>
        </div>
        <project-cards />
      </div>
    </div>
    <div class="relative mt-8">
      <contact-section />
    </div>
    <div class="relative mt-12">
      <plan-section />
    </div>
    <div class="relative mt-12">
      <footer-section />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ProjectCards from '@/components/ui/project-cards.vue';
import ContactButton from '@/components/ui/contact-button.vue';
import ContactSection from '@/components/ui/contact-section.vue';
import PlanSection from '@/components/ui/plan-section.vue';
import FooterSection from '@/components/ui/footer-section.vue';

const whatWeDo = ref([
  {
    color: 'bg-base-1',
    title: 'Levantamento de Requisitos',
    content: 'Vamos entender seu problema e definir os requisitos necessários para o seu negócio.',
  },
  {
    color: 'bg-base-2',
    title: 'Organização do Projeto',
    content: 'Vamos definir o cenário de negócio e definir o fluxo de trabalho.',
  },
  {
    color: 'bg-base-3',
    title: 'Proposta',
    content: 'Proposta de negócio é apresentada para o cliente e aprovação do mesmo.',
  },
  {
    color: 'bg-base-4',
    title: 'Desenvolvimento e Testes',
    content: 'Vamos implementar sua solução nos moldes daquilo que foi definido.',
  },
  {
    color: 'bg-base-5',
    title: 'Alinhamentos e Ajustes Finais',
    content: 'Nesta etapa, realizamos os últimos alinhamentos e ajustes da sua aplicação, antes da entrega.',
  },
  {
    color: 'bg-base-6',
    title: 'Entrega',
    content: 'Você sairá feliz com a solução e poderá usá-la da maneira que desejar',
  }
]);
</script>