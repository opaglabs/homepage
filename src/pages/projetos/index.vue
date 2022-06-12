<template>
  <div class="max-w-screen-xl mx-auto">
    <div>
        <SectionTitle title="Portifólio de Projetos" no-logo />
        <section class="md:flex md:space-x-10 items-start mb-12 p-4 xl:p-0">
          <div class="leading-snug">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 px-4 lg:px-2">
              <div
                v-for="projeto in cardsProjetos"
                :key="projeto.title"
                class="relative shadow-neobrutalism bg-white border border-solid border-black rounded-md transition ease-in-out delay-150 hover:scale-[102%] hover:z-10"
              >
                <div
                  v-if="projeto.readMoreDescription"
                  class="absolute z-10 top-24 bg-white m-2 p-2 border border-solid rounded shadow-neobrutalism-min"
                  :class="[
                    {
                      'border-red-600': color === 'red',
                      'border-yellow-600': color === 'yellow',
                      'border-green-600': color === 'green',
                      'border-blue-600': color === 'blue',
                      'border-indigo-600': color === 'indigo',
                      'border-purple-600': color === 'purple',
                      'border-pink-600': color === 'pink',
                    }
                  ]"
                >
                  {{ projeto.description }}
                  &nbsp;<span class="text-blue-700 hover:underline cursor-pointer" @click="projeto.readMoreDescription = !projeto.readMoreDescription">{{ projeto.readMoreDescription ? 'Ler menos' : 'Leia mais' }}</span>
                </div>
                <div class="grid grid-cols-1 gap-2 content-between p-4">
                  <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl" :class="{
                    'text-red-700': color === 'red',
                    'text-yellow-700': color === 'yellow',
                    'text-green-700': color === 'green',
                    'text-blue-700': color === 'blue',
                    'text-indigo-700': color === 'indigo',
                    'text-purple-700': color === 'purple',
                    'text-pink-700': color === 'pink',
                  }">
                    {{ projeto.title }}
                  </h1>
                  <small class="text-gray-500 text-xs font-semibold">
                    {{ projeto.company }}
                  </small>
                  <p class="text-gray-800 text-md font-semibold">
                    {{ projeto.job }}
                  </p>
                  <div v-show="projeto.description.length > 0" class="text-md">
                    {{ projeto.description.substring(0, 100) + '...' }}
                    &nbsp;<span class="text-blue-700 hover:underline cursor-pointer" @click="projeto.readMoreDescription = !projeto.readMoreDescription">{{ projeto.readMoreDescription ? 'Ler menos' : 'Leia mais' }}</span>
                  </div>
                  <div v-if="projeto.techList" class="py-2 grid grid-cols-1 gap-4">
                    <p class="text-gray-500 text-xs font-semibold">Principais tecnologias utilizadas</p>
                    <div class="flex gap-2 h-7">
                      <a
                        v-for="tech in projeto.techList"
                        :href="tech.url"
                        target="_blank"
                      >
                        <span class="text-gray-500 text-xs font-semibold">
                          <!-- {{ tech.name }} -->
                          <img v-if="tech.image" class="w-1/2" :src="tech.image" :alt="tech.name" />
                          <span v-else>
                            {{ tech.name }}
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                  <div class="flex justify-between">
                    <small class="text-gray-500 text-xs font-semibold">
                      {{ projeto.date }}
                    </small>
                    <small class="right-5 text-gray-500 text-xs font-semibold">
                      <a v-if="!!projeto.url" :href="projeto.url" target="_blank">Acessar Website</a>
                    </small>
                  </div>
                </div>
              </div>
              <div
                class="relative shadow-neobrutalism border-black border cursor-pointer rounded-md transition ease-in-out delay-150 hover:scale-110 hover:z-10"
                :class="{
                  'bg-red-50': color === 'red',
                  'bg-yellow-50': color === 'yellow',
                  'bg-green-50': color === 'green',
                  'bg-blue-50': color === 'blue',
                  'bg-indigo-50': color === 'indigo',
                  'bg-purple-50': color === 'purple',
                  'bg-pink-50': color === 'pink',
                }"
                @click="$router.push('/contato')"
              >
                <div class="grid grid-cols-1 gap-2 p-4">
                  <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl" :class="{
                    'text-red-700': color === 'red',
                    'text-yellow-700': color === 'yellow',
                    'text-green-700': color === 'green',
                    'text-blue-700': color === 'blue',
                    'text-indigo-700': color === 'indigo',
                    'text-purple-700': color === 'purple',
                    'text-pink-700': color === 'pink',
                  }">
                    Seu Projeto
                  </h1>
                  <small class="text-gray-500 text-xs font-semibold">
                    Sua Empresa
                  </small>
                  <p class="text-gray-800 text-md font-semibold">
                    Desenvolvemos sua Plataforma com as tecnologias mais recentes e modernas, além de utilizarmos as melhores práticas do mercado. Tudo isso construído em cima de uma arquitetura sólida, que será linda aos olhos dos seus clientes, e que seja a melhor solução para que você consiga gerar receita no seu negócio.
                  </p>
                  <div class="rounded-md">
                    <router-link to="/contato" class="px-3 py-0 border border-transparent text-base font-medium rounded-md text-white pb-1" :class="{
                      'bg-red-600 hover:bg-red-600': color === 'red',
                      'bg-yellow-600 hover:bg-yellow-600': color === 'yellow',
                      'bg-green-600 hover:bg-green-600': color === 'green',
                      'bg-blue-600 hover:bg-blue-600': color === 'blue',
                      'bg-indigo-600 hover:bg-indigo-600': color === 'indigo',
                      'bg-purple-600 hover:bg-purple-600': color === 'purple',
                      'bg-pink-600 hover:bg-pink-600': color === 'pink',
                    }">
                      Entre em contato hoje mesmo
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>

    <div>
      <SectionTitle title="Cursos Ministrados" no-logo />
      <section class="md:flex md:space-x-10 items-start mb-12 p-4 xl:p-0">
        <div class="leading-snug">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 px-4 lg:px-2">
            <div
              v-for="projeto in cardsCursos"
              :key="projeto.title"
              class="relative shadow-neobrutalism bg-white border border-solid border-black rounded-md transition ease-in-out delay-150 hover:scale-[102%] hover:z-10"
            >
              <div class="grid grid-cols-1 gap-4 p-4">
                <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl" :class="{
                  'text-red-700': color === 'red',
                  'text-yellow-700': color === 'yellow',
                  'text-green-700': color === 'green',
                  'text-blue-700': color === 'blue',
                  'text-indigo-700': color === 'indigo',
                  'text-purple-700': color === 'purple',
                  'text-pink-700': color === 'pink',
                }">
                  {{ projeto.title }}
                </h1>
                <small class="text-gray-500 text-xs font-semibold">
                  {{ projeto.date }}
                </small>
                <p class="text-md">
                  {{ projeto.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div>
      <SectionTitle title="Projetos Públicos" no-logo />
      <section class="mb-12 p-4 lg:p-0">
        <div class="leading-snug">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 pt-8 px-4 lg:px-">
            <div
              v-for="projeto in cardsProjetosPublicos"
              :key="projeto.title"
              class="relative shadow-neobrutalism bg-white border border-solid border-black rounded-md transition ease-in-out delay-150 hover:scale-[102%] hover:z-10"
            >
              <div class="grid grid-cols-1 gap-4 p-4" >
                <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl" :class="{
                  'text-red-700': color === 'red',
                  'text-yellow-700': color === 'yellow',
                  'text-green-700': color === 'green',
                  'text-blue-700': color === 'blue',
                  'text-indigo-700': color === 'indigo',
                  'text-purple-700': color === 'purple',
                  'text-pink-700': color === 'pink',
                }">
                  {{ projeto.title }}
                </h1>
                <p class="text-md">
                  {{ projeto.description }}
                </p>
                <small class="text-gray-500 text-xs font-semibold">
                  <a v-if="!!projeto.url" :href="projeto.url" target="_blank">Acessar Repositório</a>
                </small>
              </div>
            </div>
          </div>
          <p class="text-md mt-5">
            Veja mais projetos <a class="hover:underline" :class="{
              'text-red-700': color === 'red',
                'text-yellow-700': color === 'yellow',
                'text-green-700': color === 'green',
                'text-blue-700': color === 'blue',
                'text-indigo-700': color === 'indigo',
                'text-purple-700': color === 'purple',
                'text-pink-700': color === 'pink',
            }" href="https://github.com/otavio-paganotti" target="_blank">clicando aqui</a>.
          </p>
        </div>
      </section>
    </div>

    <!-- <WorkTogether /> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import SectionTitle from '../../components/section-title.vue'
import WorkTogether from '../../components/work-together.vue'
import imgJs from '@/assets/icons/javascript.svg';
import imgTs from '@/assets/icons/typescript.svg';
import imgVue from '@/assets/icons/vue-js-48.png';
import imgQuasar from '@/assets/icons/Quasar_Logo.png';
import imgSass from '@/assets/icons/sass.svg';
import imgNode from '@/assets/icons/nodejs.svg';
import imgCypress from '@/assets/icons/cypress.png';
import imgExpress from '@/assets/icons/express.png';
import imgPg from '@/assets/icons/postgresql.svg';
import imgReact from '@/assets/icons/react.png';
import imgNuxt from '@/assets/icons/Nuxt_logo.png';
import imgVite from '@/assets/icons/vite.svg';
import imgVitest from '@/assets/icons/vitest.svg';
import imgDocker from '@/assets/icons/docker.svg';
import imgBootstrap from '@/assets/icons/bootstrap.svg';
import imgAdonis from '@/assets/icons/adonis.png';
import imgTailwind from '@/assets/icons/tailwindcss.png';

  export default {
    data: () => ({
        cardsProjetos: [
            {
                title: "AGIL Online",
                company: "DouraSoft do Brasil",
                job: "Front-End",
                description: "Sistema proprietário da empresa DouraSoft do Brasil, que é dedicado para fazer controle financeiro de Casas Lotéricas e Sindicatos.",
                date: "2017 - 2019",
                url: "https://dourasoft.com.br/",
                readMoreDescription: false,
                techList: [
                  // {
                  //   url: 'https://www.w3schools.com/html/',
                  //   name: 'HTML 5',
                  //   image: '/assets/icons/html5.svg'
                  // },
                  // {
                  //   url: 'https://www.w3schools.com/css/',
                  //   name: 'CSS 3',
                  //   image: '/assets/icons/css3-48.png'
                  // },
                  {
                    url: 'https://www.javascript.com/',
                    name: 'Javascript',
                    image: imgJs
                  },
                  {
                    url: 'https://vuejs.org/',
                    name: 'Vue.Js',
                    image: imgVue
                  },
                  {
                    url: 'https://quasar.dev/',
                    name: 'Quasar Framework',
                    image: imgQuasar
                  },
                  {
                    url: 'https://sass-lang.com/',
                    name: 'Sass',
                    image: imgSass
                  },
                  {
                    url: 'https://www.cypress.io/',
                    name: 'Cypress',
                    image: imgCypress
                  },
                ],
            },
            {
                title: "Comandas APP",
                company: "Comandas APP",
                job: "Fullstack & Gestão",
                description: " Comandas APP surgiu como uma proposta para popularizar a adoção de tecnologias para gestão de bares e restaurantes de maneira que até estabelecimentos das classes D e C poderão desfrutar de alta tecnologia e conseguir escalar seus negócios para patamares nunca antes vistos.",
                date: "2020",
                url: null,
                readMoreDescription: false,
                techList: [
                  // {
                  //   url: 'https://www.w3schools.com/html/',
                  //   name: 'HTML 5',
                  //   image: '/assets/icons/html5.svg'
                  // },
                  // {
                  //   url: 'https://www.w3schools.com/css/',
                  //   name: 'CSS 3',
                  //   image: '/assets/icons/css3-48.png'
                  // },
                  {
                    url: 'https://www.javascript.com/',
                    name: 'Javascript',
                    image: imgJs
                  },
                  {
                    url: 'https://vuejs.org/',
                    name: 'Vue.Js',
                    image: imgVue
                  },
                  {
                    url: 'https://quasar.dev/',
                    name: 'Quasar Framework',
                    image: imgQuasar
                  },
                  {
                    url: 'https://sass-lang.com/',
                    name: 'Sass',
                    image: imgSass
                  },
                  {
                    url: 'https://nodejs.org/',
                    name: 'Node.Js',
                    image: imgNode
                  },
                  {
                    url: 'https://expressjs.com/',
                    name: 'Express .Js',
                    image: imgExpress
                  },
                  {
                    url: 'https://www.postgresql.org/',
                    name: 'PostgreSQL',
                    image: imgPg
                  },
                ],
            },
            {
                title: "Sistema para medir NPS®",
                company: "DouraSoft do Brasil",
                job: "Fullstack",
                description: "Com a proposta de realizar pesquisas de lealdade de clientes, esse sistema foi desenvolvido sob medida para um cliente com grande base de clientes, e que precisa acompanhar as métricas o tempo todo para melhorar as estratégias do seu negócio.",
                date: "2020",
                url: "https://dourasoft.com.br/",
                readMoreDescription: false,
                techList: [
                  // {
                  //   url: 'https://www.w3schools.com/html/',
                  //   name: 'HTML 5',
                  //   image: '/assets/icons/html5.svg'
                  // },
                  // {
                  //   url: 'https://www.w3schools.com/css/',
                  //   name: 'CSS 3',
                  //   image: '/assets/icons/css3-48.png'
                  // },
                  {
                    url: 'https://www.javascript.com/',
                    name: 'Javascript',
                    image: imgJs
                  },
                  {
                    url: 'https://vuejs.org/',
                    name: 'Vue.Js',
                    image: imgVue
                  },
                  {
                    url: 'https://quasar.dev/',
                    name: 'Quasar Framework',
                    image: imgQuasar
                  },
                  {
                    url: 'https://sass-lang.com/',
                    name: 'Sass',
                    image: imgSass
                  },
                  {
                    url: 'https://nodejs.org/',
                    name: 'Node.Js',
                    image: imgNode
                  },
                  {
                    url: 'https://expressjs.com/',
                    name: 'Express .Js',
                    image: imgExpress
                  },
                  {
                    url: 'https://www.postgresql.org/',
                    name: 'PostgreSQL',
                    image: imgPg
                  },
                ],
            },
            {
                title: "Kollabity",
                company: "Kollabity",
                job: "Fullstack",
                description: "Plataforma voltada para profissionais da Engenharia Mecânica e outras Engenharias correlatas, disponibilizando dados importantes sobre ferramentas e procedimentos, e também educa estes profissionais para o mercado.",
                date: "2020 - 2021",
                url: "https://kollabity.com",
                readMoreDescription: false,
                techList: [
                  // {
                  //   url: 'https://www.w3schools.com/html/',
                  //   name: 'HTML 5',
                  //   image: '/assets/icons/html5.svg'
                  // },
                  // {
                  //   url: 'https://www.w3schools.com/css/',
                  //   name: 'CSS 3',
                  //   image: '/assets/icons/css3-48.png'
                  // },
                  {
                    url: 'https://www.javascript.com/',
                    name: 'Javascipt',
                    image: imgJs
                  },
                  {
                    url: 'https://vuejs.org/',
                    name: 'Vue.Js',
                    image: imgVue
                  },
                  {
                    url: 'https://nuxtjs.org/',
                    name: 'Nuxt Framework',
                    image: imgNuxt
                  },
                  {
                    url: 'https://sass-lang.com/',
                    name: 'Sass',
                    image: imgSass
                  },
                  {
                    url: 'https://nodejs.org/',
                    name: 'Node.Js',
                    image: imgNode
                  },
                  {
                    url: 'https://expressjs.com/',
                    name: 'Express .Js',
                    image: imgExpress
                  },
                  {
                    url: 'https://www.postgresql.org/',
                    name: 'PostgreSQL',
                    image: imgPg
                  },
                ],
            },
            {
                title: "Teach Learn",
                company: "Teach Learn",
                job: "Fullstack",
                description: "Criação de uma plataforma especializada em educação, nos moldes de Google Classroom e Moodle, porém, com algumas peculiaridades e regras de negócios únicos. O projeto foi desenhado do zero, sem depender de nenhum gerenciador de conteúdo e nenhum engessamento, proporcionando assim, uma vasta oportunidade de customização e adição de novas funcionalidades.",
                date: "2021",
                url: "https://app.teachlearn.com.br",
                readMoreDescription: false,
                techList: [
                  // {
                  //   url: 'https://www.w3schools.com/html/',
                  //   name: 'HTML 5',
                  //   image: '/assets/icons/html5.svg'
                  // },
                  // {
                  //   url: 'https://www.w3schools.com/css/',
                  //   name: 'CSS 3',
                  //   image: '/assets/icons/css3-48.png'
                  // },
                  {
                    url: 'https://www.javascript.com/',
                    name: 'Javascript',
                    image: imgJs
                  },
                  {
                    url: 'https://vuejs.org/',
                    name: 'Vue.Js',
                    image: imgVue
                  },
                  {
                    url: 'https://quasar.dev/',
                    name: 'Quasar Framework',
                    image: imgQuasar
                  },
                  {
                    url: 'https://sass-lang.com/',
                    name: 'Sass',
                    image: imgSass
                  },
                  {
                    url: 'https://nodejs.org/',
                    name: 'Node.Js',
                    image: imgNode
                  },
                  {
                    url: 'https://expressjs.com/',
                    name: 'Express .Js',
                    image: imgExpress
                  },
                  {
                    url: 'https://www.postgresql.org/',
                    name: 'PostgreSQL',
                    image: imgPg
                  },
                ],
            },
            {
                title: "Gerador de Certificados",
                company: "Teach Learn",
                job: "Fullstack",
                description: "Criação de uma plataforma focada em realizar geração de certificados, como por exemplo, certificados de conclusão de curso, certificados de participação em eventos, certificados de participação em projetos, etc.",
                date: "2021",
                url: "https://certificados.teachlearn.com.br/",
                readMoreDescription: false,
                techList: [
                  // {
                  //   url: 'https://www.w3schools.com/html/',
                  //   name: 'HTML 5',
                  //   image: '/assets/icons/html5.svg'
                  // },
                  // {
                  //   url: 'https://www.w3schools.com/css/',
                  //   name: 'CSS 3',
                  //   image: '/assets/icons/css3-48.png'
                  // },
                  {
                    url: 'https://www.javascript.com/',
                    name: 'Javascript',
                    image: imgJs
                  },
                  {
                    url: 'https://reactjs.org/',
                    name: 'React.Js',
                    image: imgReact
                  },
                  {
                    url: 'https://sass-lang.com/',
                    name: 'Sass',
                    image: imgSass
                  },
                  {
                    url: 'https://nodejs.org/',
                    name: 'Node.Js',
                    image: imgNode
                  },
                  {
                    url: 'https://expressjs.com/',
                    name: 'Express .Js',
                    image: imgExpress
                  },
                  {
                    url: 'https://www.postgresql.org/',
                    name: 'PostgreSQL',
                    image: imgPg
                  },
                ],
            },
            {
                title: "i9Central",
                company: "i9tv",
                job: "Front-end",
                description: "Manutenção e desenvolvimento de novas features no sistema interno da empresa, implementando novas funcionalidades, modernizando estruturas, melhorando experiência do usuário e interface.",
                date: "2021",
                url: "https://i9tv.com.br/",
                readMoreDescription: false,
                techList: [
                  // {
                  //   url: 'https://www.w3schools.com/html/',
                  //   name: 'HTML 5',
                  //   image: '/assets/icons/html5.svg'
                  // },
                  // {
                  //   url: 'https://www.w3schools.com/css/',
                  //   name: 'CSS 3',
                  //   image: '/assets/icons/css3-48.png'
                  // },
                  {
                    url: 'https://www.javascript.com/',
                    name: 'Javacript',
                    image: imgJs
                  },
                  {
                    url: 'https://vuejs.org/',
                    name: 'Vue.Js',
                    image: imgVue
                  },
                  {
                    url: 'https://getbootstrap.com/',
                    name: 'Bootstrap Framework',
                    image: imgBootstrap
                  },
                  {
                    url: 'https://sass-lang.com/',
                    name: 'Sass',
                    image: imgSass
                  },
                ],
            },
            {
                title: "Engenheiro de Software Front-end",
                company: "Portabilis",
                job: "Front-end",
                description: "Desenvolvimento de plataforma voltada para atender escolas públicas, diminuir desigualdades e promover equidade social no Brasil.",
                date: "2021 - Presente",
                url: "https://portabilis.com.br/",
                readMoreDescription: false,
                techList: [
                  {
                    url: 'https://www.typescriptlang.org/',
                    name: 'Typescript',
                    image: imgTs
                  },
                  {
                    url: 'https://vuejs.org/',
                    name: 'Vue.Js',
                    image: imgVue
                  },
                  {
                    url: 'https://vitejs.dev/',
                    name: 'Vite.Js',
                    image: imgVite
                  },
                  {
                    url: 'https://vitest.dev/',
                    name: 'Vitest',
                    image: imgVitest
                  },
                  {
                    url: 'https://www.cypress.io/',
                    name: 'Cypress',
                    image: imgCypress
                  },
                  {
                    url: 'https://tailwindcss.com/',
                    name: 'Tailwind CSS',
                    image: imgTailwind
                  },
                  {
                    url: 'https://sass-lang.com/',
                    name: 'Sass',
                    image: imgSass
                  },
                ],
            },
            {
                title: "RifaIsso Back-end",
                company: "RifaIsso",
                job: "Back-end",
                description: "Criação de API que gerencia criação e vendas de rifas, assim como a integração API de pagamentos como Mercado Pago.",
                date: "2022",
                techList: [
                  {
                    url: 'https://www.typescriptlang.org/',
                    name: 'Typescript',
                    image: imgTs
                  },
                  {
                    url: 'https://nodejs.org/',
                    name: 'Node.Js',
                    image: imgNode
                  },
                  {
                    url: 'https://adonisjs.com/',
                    name: 'Adonis.Js',
                    image: imgAdonis
                  },
                  {
                    url: 'https://www.docker.com/',
                    name: 'Docker',
                    image: imgDocker
                  },
                  {
                    url: 'https://www.postgresql.org/',
                    name: 'PostgreSQL',
                    image: imgPg
                  },
                ],
                readMoreDescription: false
            },
        ],
        cardsCursos: [
            {
                title: "Bootstrap: Pré-Processadores na prática",
                description: "Evento Jornada da Tecnlogia (JTI-MS), que abordou conceitos de pré-processadores CSS utilizando a ferramenta SASS e o Framework Bootstrap.",
                date: "2017"
            },
            {
                title: "SPA - Single Page Application com framework Vue.js",
                description: "Evento Semana Acadêmica da Computação (SECOM), que abordou conceitos iniciais de SPAs, e a utilização da ferramenta VUE CLI, e Framework CSS Materialize.",
                date: "2018"
            },
            {
                title: "Como o Netflix Revolucionou o Mercado de Software",
                description: "Evento Semana Integrada da Computação (SIC), que abordou conceitos de pós-venda, Customer Success, métricas importantes e também modalidades como o SaaS que vem crescendo muito nos últimos anos.",
                date: "2019"
            }
        ],
        cardsProjetosPublicos: [
            {
                title: "Wpp Sender",
                description: "Vue.js",
                url: "https://github.com/otavio-paganotti/whatsapp-sender"
            },
            {
                title: "Chat Socket",
                description: "Vue.js + Express",
                url: "https://github.com/otavio-paganotti/chat-socket-vuejs"
            },
            {
                title: "Battle Robot",
                description: "Java",
                url: "https://github.com/otavio-paganotti/robot-battle-java"
            },
            {
                title: "Locadora",
                description: "Java",
                url: "https://github.com/otavio-paganotti/locadora-java-faculdade"
            }
        ]
    }),
    computed: {
      ...mapGetters(["color"])
    },
    methods: {
      getImage(item) {
        return item;
      }
    },
    components: { SectionTitle, WorkTogether }
}
</script>
