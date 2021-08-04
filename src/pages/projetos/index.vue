<template>
  <div class="min-h-screen p-10 md:p-0 md:px-8 md:mt-10">
    <div class="w-full space-y-16 md:space-y-32">

      <section class="md:flex md:space-x-10 items-start">
        <div class="md:w-2/6 z-50 sticky top-0 py-4 bg-white mb-5 md:mb-0">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">Portifólio de Projetos</h1>
        </div>
        <div class="md:w-4/6 leading-snug">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="projeto in cardsProjetos"
              :key="projeto.title"
              class="relative shadow hover:shadow-lg bg-white rounded-md p-4"
            >
              <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl" :class="[`text-${color}-700`]">
                {{ projeto.title }}
              </h1>
              <small class="text-gray-500 text-xs font-semibold">
                {{ projeto.company }}
              </small>
              <p class="text-gray-800 text-md font-semibold mb-5">
                {{ projeto.job }}
              </p>
              <p class="text-md mb-10">
                {{ projeto.description }}
              </p>
              <small class="absolute bottom-3 text-gray-500 text-xs font-semibold">
                {{ projeto.date }}
              </small>
              <small class="absolute bottom-3 right-5 text-gray-500 text-xs font-semibold">
                <a v-if="!!projeto.url" :href="projeto.url" target="_blank">Acessar Website</a>
              </small>
            </div>
            <div
              class="relative shadow hover:shadow-lg cursor-pointer bg-gray-100 rounded-md p-4"
            >
              <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl" :class="[`text-${color}-700`]">
                Seu Projeto
              </h1>
              <small class="text-gray-500 text-xs font-semibold">
                Sua Empresa
              </small>
              <p class="text-gray-800 text-md font-semibold mb-5">
                Desenvolvemos sua Plataforma
              </p>
              
              <p class="text-md mb-10">
              </p>
              <div class="rounded-md shadow absolute bottom-3">
                <router-link to="/contato" class="w-full flex items-center justify-center px-3 py-0 border border-transparent text-base font-medium rounded-md text-white pb-1" :class="[`bg-${color}-600 hover:bg-${color}-600`]">
                  Entre em contato hoje mesmo
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="md:flex md:space-x-10 items-start">
        <div class="md:w-2/6 sticky top-0 py-4 bg-white mb-5 md:mb-0">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">Cursos Ministrados</h1>
        </div>
        <div class="md:w-4/6 leading-snug">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="projeto in cardsCursos"
              :key="projeto.title"
              class="shadow hover:shadow-lg bg-white rounded-md p-4"
            >
              <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl" :class="[`text-${color}-700`]">
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
      </section>

      <section class="md:flex md:space-x-10 items-start">
        <div class="md:w-2/6 sticky top-0 py-4 bg-white mb-5 md:mb-0">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-4xl">Projetos Públicos</h1>
        </div>
        <div class="md:w-4/6 leading-snug">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              v-for="projeto in cardsProjetosPublicos"
              :key="projeto.title"
              class="relative shadow hover:shadow-lg bg-white rounded-md p-4"
            >
              <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-2xl" :class="[`text-${color}-700`]">
                {{ projeto.title }}
              </h1>
              <p class="text-md">
                {{ projeto.description }}
              </p>
              <small class="absolute bottom-3 right-5 text-gray-500 text-xs font-semibold">
                <a v-if="!!projeto.url" :href="projeto.url" target="_blank">Acessar Repositório</a>
              </small>
            </div>
          </div>
          <p class="text-md mt-5">
            Veja mais projetos <a class="hover:underline" :class="[`text-${color}-700`]" href="https://github.com/otavio-paganotti" target="_blank">clicando aqui</a>.
          </p>
        </div>
      </section>

    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
   data: () => ({
      cardsProjetos: [
        {
          title: 'AGIL Online',
          company: 'DouraSoft do Brasil',
          job: 'Front-End',
          description: 'Sistema proprietário da empresa DouraSoft do Brasil, que é dedicado para fazer controle financeiro de Casas Lotéricas e Sindicatos.',
          date: '2017 - 2019',
          url: 'https://dourasoft.com.br/'
        },
        {
          title: 'Comandas APP',
          company: 'Comandas APP',
          job: 'Fullstack & Gestão',
          description: ' Comandas APP surgiu como uma proposta para popularizar a adoção de tecnologias para gestão de bares e restaurantes de maneira que até estabelecimentos das classes D e C poderão desfrutar de alta tecnologia e conseguir escalar seus negócios para patamares nunca antes vistos.',
          date: '2020 - 2020',
          url: null
        },
        {
          title: 'Sistema para medir NPS®',
          company: 'DouraSoft do Brasil',
          job: 'Fullstack',
          description: 'Com a proposta de realizar pesquisas de lealdade de clientes, esse sistema foi desenvolvido sob medida para um cliente com grande base de clientes, e que precisa acompanhar as métricas o tempo todo para melhorar as estratégias do seu negócio.',
          date: '2020 - 2020',
          url: 'https://dourasoft.com.br/'
        },
        {
          title: 'Kollabity',
          company: 'Kollabity',
          job: 'Fullstack',
          description: 'Plataforma voltada para profissionais da Engenharia Mecânica e outras Engenharias correlatas, disponibilizando dados importantes sobre ferramentas e procedimentos, e também educa estes profissionais para o mercado.',
          date: '2020 - 2021',
          url: 'https://kollabity.com'
        },
        {
          title: 'Teach Learn',
          company: 'Teach Learn',
          job: 'Fullstack',
          description: 'Criação de uma plataforma especializada em educação, nos moldes de Google Classroom e Moodle, porém, com algumas peculiaridades e regras de negócios únicos. O projeto foi desenhado do zero, sem depender de nenhum gerenciador de conteúdo e nenhum engessamento, proporcionando assim, uma vasta oportunidade de customização e adição de novas funcionalidades.',
          date: '2021 - Presente',
          url: 'https://app.teachlearn.com.br'
        },
        {
          title: 'i9Central',
          company: 'i9tv',
          job: 'Front-end',
          description: 'Manutenção e desenvolvimento de novas features no sistema interno da empresa, implementando novas funcionalidades, modernizando estruturas, melhorando experiência do usuário e interface.',
          date: '2021 - Presente',
          url: 'https://i9tv.com.br/'
        },
        {
          title: 'Projeto sem Título',
          company: 'Portabilis',
          job: 'Front-end',
          description: '',
          date: '2021 - Presente',
          url: 'https://portabilis.com.br/'
        }
      ],

      cardsCursos: [
        {
          title: 'Bootstrap: Pré-Processadores na prática',
          description: 'Evento Jornada da Tecnlogia (JTI-MS), que abordou conceitos de pré-processadores CSS utilizando a ferramenta SASS e o Framework Bootstrap.',
          date: '2017'
        },
        {
          title: 'SPA - Single Page Application com framework Vue.js',
          description: 'Evento Semana Acadêmica da Computação (SECOM), que abordou conceitos iniciais de SPAs, e a utilização da ferramenta VUE CLI, e Framework CSS Materialize.',
          date: '2018'
        },
        {
          title: 'Como o Netflix Revolucionou o Mercado de Software',
          description: 'Evento Semana Integrada da Computação (SIC), que abordou conceitos de pós-venda, Customer Success, métricas importantes e também modalidades como o SaaS que vem crescendo muito nos últimos anos.',
          date: '2019'
        }
      ],

      cardsProjetosPublicos: [
        {
          title: 'Wpp Sender',
          description: 'Vue.js',
          url: 'https://github.com/otavio-paganotti/whatsapp-sender'
        },
        {
          title: 'Chat Socket',
          description: 'Vue.js + Express',
          url: 'https://github.com/otavio-paganotti/chat-socket-vuejs'
        },
        {
          title: 'Battle Robot',
          description: 'Java',
          url: 'https://github.com/otavio-paganotti/robot-battle-java'
        },
        {
          title: 'Locadora',
          description: 'Java',
          url: 'https://github.com/otavio-paganotti/locadora-java-faculdade'
        }
      ]
    }),
    computed: {
      ...mapGetters(['color'])
    },
  }
</script>
