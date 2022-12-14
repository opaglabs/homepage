<template>
  <Carousel class="py-12" :items-to-show="2.2">
    <Slide v-for="project in projectCards" :key="project.title">
      <div class="carousel__item">
        <div
          class="relative shadow-neobrutalism border-black border-2 bg-white"
        >
          <div
            v-if="project.readMoreDescription"
            class="absolute z-10 top-24 bg-white m-2 p-2 border-2 border-solid border-black shadow-neobrutalism"
          >
            {{ project.description }}
            &nbsp;<span
              class="text-blue-700 hover:underline cursor-pointer"
              @click="() => handleClick(project)"
              >{{
                project.readMoreDescription ? 'Ler menos' : 'Leia mais'
              }}</span
            >
          </div>
          <div class="grid grid-cols-1 gap-2 p-4">
            <h1
              class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl text-base-2"
            >
              {{ project.title }}
            </h1>
            <small class="text-gray-500 text-xs font-semibold">
              {{ project.company }}
            </small>
            <p class="text-gray-800 text-md font-semibold">
              {{ project.job }}
            </p>
            <div v-show="project.description.length > 0" class="text-md">
              {{ project.description.substring(0, 100) + '...' }}
              &nbsp;<span
                class="text-blue-700 hover:underline cursor-pointer"
                @click="() => handleClick(project)"
                >{{
                  project.readMoreDescription ? 'Ler menos' : 'Leia mais'
                }}</span
              >
            </div>
            <div v-if="project.techList" class="py-2 grid grid-cols-1 gap-4">
              <p class="text-gray-500 text-xs font-semibold">
                Principais tecnologias utilizadas
              </p>
              <div class="flex gap-2 h-7">
                <a
                  v-for="(tech, i) in project.techList"
                  :key="i"
                  :href="tech.url"
                  target="_blank"
                >
                  <span class="text-gray-500 text-xs font-semibold">
                    <img
                      v-if="tech.image"
                      class="w-1/2"
                      :src="tech.image"
                      :alt="tech.name"
                    />
                    <span v-else>
                      {{ tech.name }}
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div class="flex justify-between">
              <small class="text-gray-500 text-xs font-semibold">
                {{ project.date }}
              </small>
              <small class="right-5 text-gray-500 text-xs font-semibold">
                <a v-if="!!project.url" :href="project.url" target="_blank"
                  >Acessar Website</a
                >
              </small>
            </div>
          </div>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Navigation, Slide } from 'vue3-carousel';
import {
  adonis,
  bootstrap,
  cy,
  docker,
  express,
  js,
  mp,
  node,
  nuxt,
  pg,
  quasar,
  react,
  sass,
  tailwind,
  ts,
  vite,
  vitest,
  vue,
} from '@/data';
import { Nullable } from '@/types';
import { ref } from 'vue';

interface Tech {
  name: string;
  url: string;
  image: string;
}; 

interface ProjectCard {
  title: string;
  company: string;
  job: string;
  description: string;
  readMoreDescription: boolean;
  techList: Tech[];
  date: string;
  url: Nullable<string>;
}

const handleClick = (project: ProjectCard): MouseEvent | undefined => {
  project.readMoreDescription = !project.readMoreDescription;

  return undefined;
}

const projectCards = ref<ProjectCard[]>(
  [
    {
      title: 'AGIL Online',
      company: 'DouraSoft do Brasil',
      job: 'Front-End',
      description:
        'Sistema propriet??rio da empresa DouraSoft do Brasil, que ?? dedicado para fazer controle financeiro de Casas Lot??ricas e Sindicatos.',
      date: '2017 - 2019',
      url: 'https://dourasoft.com.br/',
      readMoreDescription: false,
      techList: [js, vue, quasar, sass, cy],
    },
    {
      title: 'Comandas APP',
      company: 'Comandas APP',
      job: 'Fullstack & Gest??o',
      description:
        ' Comandas APP surgiu como uma proposta para popularizar a ado????o de tecnologias para gest??o de bares e restaurantes de maneira que at?? estabelecimentos das classes D e C poder??o desfrutar de alta tecnologia e conseguir escalar seus neg??cios para patamares nunca antes vistos.',
      date: '2020',
      url: null,
      readMoreDescription: false,
      techList: [js, vue, quasar, sass, node, express, pg],
    },
    {
      title: 'Sistema para medir NPS??',
      company: 'DouraSoft do Brasil',
      job: 'Fullstack',
      description:
        'Com a proposta de realizar pesquisas de lealdade de clientes, esse sistema foi desenvolvido sob medida para um cliente com grande base de clientes, e que precisa acompanhar as m??tricas o tempo todo para melhorar as estrat??gias do seu neg??cio.',
      date: '2020',
      url: 'https://dourasoft.com.br/',
      readMoreDescription: false,
      techList: [js, vue, quasar, sass, node, express, pg],
    },
    {
      title: 'Kollabity',
      company: 'Kollabity',
      job: 'Fullstack',
      description:
        'Plataforma voltada para profissionais da Engenharia Mec??nica e outras Engenharias correlatas, disponibilizando dados importantes sobre ferramentas e procedimentos, e tamb??m educa estes profissionais para o mercado.',
      date: '2020 - 2021',
      url: 'https://kollabity.com',
      readMoreDescription: false,
      techList: [js, vue, nuxt, sass, node, express, pg],
    },
    {
      title: 'Teach Learn',
      company: 'Teach Learn',
      job: 'Fullstack',
      description:
        'Cria????o de uma plataforma especializada em educa????o, nos moldes de Google Classroom e Moodle, por??m, com algumas peculiaridades e regras de neg??cios ??nicos. O projeto foi desenhado do zero, sem depender de nenhum gerenciador de conte??do e nenhum engessamento, proporcionando assim, uma vasta oportunidade de customiza????o e adi????o de novas funcionalidades.',
      date: '2021',
      url: 'https://app.teachlearn.com.br',
      readMoreDescription: false,
      techList: [js, vue, quasar, sass, node, express, pg],
    },
    {
      title: 'Gerador de Certificados',
      company: 'Teach Learn',
      job: 'Fullstack',
      description:
        'Cria????o de uma plataforma focada em realizar gera????o de certificados, como por exemplo, certificados de conclus??o de curso, certificados de participa????o em eventos, certificados de participa????o em projetos, etc.',
      date: '2021',
      url: 'https://certificados.teachlearn.com.br/',
      readMoreDescription: false,
      techList: [js, react, sass, node, express, pg],
    },
    {
      title: 'i9Central',
      company: 'i9tv',
      job: 'Front-end',
      description:
        'Manuten????o e desenvolvimento de novas features no sistema interno da empresa, implementando novas funcionalidades, modernizando estruturas, melhorando experi??ncia do usu??rio e interface.',
      date: '2021',
      url: 'https://i9tv.com.br/',
      readMoreDescription: false,
      techList: [js, vue, bootstrap, sass],
    },
    {
      title: 'Engenheiro de Software Front-end',
      company: 'Portabilis',
      job: 'Front-end',
      description:
        'Desenvolvimento de plataforma voltada para atender escolas p??blicas, diminuir desigualdades e promover equidade social no Brasil.',
      date: '2021 - Presente',
      url: 'https://portabilis.com.br/',
      readMoreDescription: false,
      techList: [ts, vue, vite, vitest, cy, tailwind, sass],
    },
    {
      title: 'RifaIsso Back-end',
      company: 'RifaIsso',
      job: 'Back-end',
      description:
        'Cria????o de API que gerencia cria????o e vendas de rifas, assim como a integra????o API de pagamentos como Mercado Pago.',
      date: '2022',
      url: null,
      techList: [ts, node, adonis, pg, docker, mp],
      readMoreDescription: false,
    },
  ].reverse()
);
</script>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  @apply hidden;
}

.carousel__prev,
.carousel__next {
  @apply w-6 h-6 bg-base-2 shadow-neobrutalism-min rounded-none border border-solid border-black;
}

.carousel__item {
  @apply mx-4;
}
</style>
