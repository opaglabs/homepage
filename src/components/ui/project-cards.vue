<template>
  <Carousel class="py-12" :items-to-show="getScreenSize">
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
  mongo,
  mp,
  node,
  nuxt,
  pg,
  php,
  quasar,
  rails,
  react,
  sass,
  supabase,
  tailwind,
  ts,
  vite,
  vitest,
  vue,
  webpack
} from '@/data';
import { computed, ref } from 'vue';
import { Nullable } from '@/types';
import { useWindowSize } from '@vueuse/core';

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
        'Sistema proprietário da empresa DouraSoft do Brasil, que é dedicado para fazer controle financeiro de Casas Lotéricas e Sindicatos.',
      date: '2017 - 2019',
      url: 'https://dourasoft.com.br/',
      readMoreDescription: false,
      techList: [js, vue, quasar, sass, cy],
    },
    {
      title: 'Comandas APP Back-end',
      company: 'Comandas APP',
      job: 'Full-stack',
      description:
        'Comandas APP surgiu como uma proposta para popularizar a adoção de tecnologias para gestão de bares e restaurantes de maneira que até estabelecimentos das classes D e C poderão desfrutar de alta tecnologia e conseguir escalar seus negócios para patamares nunca antes vistos.',
      date: '2020',
      url: null,
      readMoreDescription: false,
      techList: [js, vue, quasar, sass, node, express, pg],
    },
    {
      title: 'Sistema para medir NPS®',
      company: 'DouraSoft do Brasil',
      job: 'Full-stack',
      description:
        'Com a proposta de realizar pesquisas de lealdade de clientes, esse sistema foi desenvolvido sob medida para um cliente com grande base de clientes, e que precisa acompanhar as métricas o tempo todo para melhorar as estratégias do seu negócio.',
      date: '2020',
      url: 'https://dourasoft.com.br/',
      readMoreDescription: false,
      techList: [js, vue, quasar, sass, node, express, pg],
    },
    {
      title: 'Kollabity',
      company: 'Kollabity',
      job: 'Full-stack',
      description:
        'Plataforma voltada para profissionais da Engenharia Mecânica e outras Engenharias correlatas, disponibilizando dados importantes sobre ferramentas e procedimentos, e também educa estes profissionais para o mercado.',
      date: '2020 - 2021',
      url: 'https://kollabity.com',
      readMoreDescription: false,
      techList: [js, vue, nuxt, sass, node, express, pg],
    },
    {
      title: 'Teach Learn',
      company: 'Teach Learn',
      job: 'Full-stack',
      description:
        'Criação de uma plataforma especializada em educação, nos moldes de Google Classroom e Moodle, porém, com algumas peculiaridades e regras de negócios únicos. O projeto foi desenhado do zero, sem depender de nenhum gerenciador de conteúdo e nenhum engessamento, proporcionando assim, uma vasta oportunidade de customização e adição de novas funcionalidades.',
      date: '2021',
      url: 'https://app.teachlearn.com.br',
      readMoreDescription: false,
      techList: [js, vue, quasar, sass, node, express, pg],
    },
    {
      title: 'Gerador de Certificados',
      company: 'Teach Learn',
      job: 'Full-stack',
      description:
        'Criação de uma plataforma focada em realizar geração de certificados, como por exemplo, certificados de conclusão de curso, certificados de participação em eventos, certificados de participação em projetos, etc.',
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
        'Manutenção e desenvolvimento de novas features no sistema interno da empresa, implementando novas funcionalidades, modernizando estruturas, melhorando experiência do usuário e interface.',
      date: '2021',
      url: 'https://i9tv.com.br/',
      readMoreDescription: false,
      techList: [js, vue, bootstrap, sass],
    },
    {
      title: 'Pré-Matrícula Digital',
      company: 'Portábilis',
      job: 'Front-end',
      description:
        'Manutenção e evolução tecnológica de uma plataforma para realizar pré-matrículas de alunos em escolas públicas, com o objetivo de facilitar o processo de matrícula e também de gerar dados para o governo.',
      date: '2021 - 2023',
      url: 'https://portabilis.com.br/',
      readMoreDescription: false,
      techList: [ts, vue, vite, vitest, cy, tailwind, sass],
    },
    {
      title: 'i-Educar',
      company: 'Portábilis',
      job: 'Front-end',
      description: 'Manutenção e evolução tecnológica de uma das principais plataformas de gestão escolar do país, sendo um software livre que descomplica e torna mais eficaz a gestão dos processos escolares, matrículas e dados de alunos.',
      date: '2021 - 2023',
      url: 'https://portabilis.com.br/',
      readMoreDescription: false,
      techList: [ts, vue, vite, vitest, cy, tailwind, sass, php],
    },
    {
      title: 'i-Diário',
      company: 'Portábilis',
      job: 'Front-end',
      description: 'Evolução tecnológica da plataforma que ajuda o professor a cuidar do aprendizado dos seus alunos ao invés de se preocupar com a burocracia.',
      date: '2022 - 2023',
      url: 'https://portabilis.com.br/',
      readMoreDescription: false,
      techList: [ts, vue, vite, vitest, cy, tailwind, sass, rails],
    },
    {
      title: 'Portábilis SAS',
      company: 'Portábilis',
      job: 'Front-end',
      description: 'Evolução tecnológica da plataforma para Assistência Social que unifica e integra dos serviços do Sistema Único de Assistência Social (SUAS), possibilitando uma gestão mais inteligente por meio de dados e tecnologia.',
      date: '2022 - 2023',
      url: 'https://portabilis.com.br/',
      readMoreDescription: false,
      techList: [ts, vue, vite, vitest, cy, tailwind, sass, rails],
    },
    {
      title: 'RifaIsso Back-end',
      company: 'RifaIsso',
      job: 'Back-end',
      description:
        'Criação de API que gerencia criação e vendas de rifas, assim como a integração API de pagamentos como Mercado Pago.',
      date: '2022',
      url: null,
      techList: [ts, node, adonis, pg, docker, mp],
      readMoreDescription: false,
    },
    {
      title: 'RifaIsso Front-end',
      company: 'RifaIsso',
      job: 'Front-end',
      description:
        'Recriação arquitetural do front-end da plataforma RifaIsso, utilizando a nova API criada. O projeto foi desenvolvido utilizando o framework Nuxt.js, e o design foi herdado de versões anteriores, utilizando o framework TailwindCSS.',
      date: '2022-2023',
      url: 'https://rifaisso.com.br/',
      techList: [ts, vue, nuxt, tailwind, sass],
      readMoreDescription: false,
    },
    {
      title: 'Gow Club',
      company: 'Gow',
      job: 'Full-stack',
      description:
        'Plataforma de Eventos, contendo uma vitrine virtual, que promove facilidade ao se encontrar eventos, e que permite a criação de eventos de maneira simples e rápida.',
      date: '2023',
      url: 'https://gowclub.com.br/',
      techList: [ts, vue, nuxt, tailwind, sass, supabase],
      readMoreDescription: false,
    },
    {
      title: 'Portal Oi Soluções',
      company: 'OI S/A',
      job: 'Full-stack',
      description: 'Portal de serviços da Oi Soluções, que permite a contratação de serviços, gerenciamento de serviços contratados, e acesso a informações de faturas.',
      date: '2023-presente',
      url: 'https://portaloisolucoes.oi.com.br/',
      techList: [js, webpack, react, node, express, mongo, docker],
      readMoreDescription: false,
    },
  ].reverse()
);

const { width } = useWindowSize();

const getScreenSize = computed(() => width.value > 768 ? 2.2 : 1.1);
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
