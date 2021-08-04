<template>
  <div class="min-h-screen p-10 md:p-0 md:px-8 md:mt-10">
    <div class="w-full space-y-16 md:space-y-32">
      <section>
        <div class="md:w-full z-50 sticky top-0 py-4 bg-white mb-5 md:mb-0">
          <h1
            class="
              text-4xl
              tracking-tight
              font-extrabold
              text-gray-900
              sm:text-5xl
              md:text-4xl
            "
          >
            Onde me encontrar?
          </h1>
        </div>
        <div class="py-4 bg-white mb-5 md:mb-0">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div
              class="
                bg-white
                mt-10
                py-8
                px-10
                text-center
                rounded-md
                shadow
                hover:shadow-lg
                transform
              "
            >
              <h2 class="font-semibold text-2xl mb-6">LinkedIn</h2>
              <svg class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path :class="`fill-current text-${color}-600`" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              <p class="text-xl mt-1">otavio-paganotti</p>
              <span
                class="
                  flex
                  items-center
                  rounded-full
                  w-24
                  pr-2
                  justify-center
                  mx-auto
                  mt-2
                  mb-12
                "
              >
              </span>
              <a
                class="px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                :class="`text-${color}-600 bg-${color}-100 hover:bg-${color}-200`"
                href="https://www.linkedin.com/in/otavio-paganotti/"
                target="_blank"
              >
                Visualizar Perfil
              </a>
            </div>
            <div
              class="
                bg-white
                mt-10
                py-8
                px-10
                text-center
                rounded-md
                shadow
                hover:shadow-lg
                transform
              "
            >
              <h2 class="font-semibold text-2xl mb-6">Instagram</h2>
              <svg class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path :class="`fill-current text-${color}-600`" d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/>
              </svg>
              <p class="text-xl mt-1">@opag.software</p>
              <span
                class="
                  flex
                  items-center
                  rounded-full
                  w-24
                  pr-2
                  justify-center
                  mx-auto
                  mt-2
                  mb-12
                "
              >
              </span>
              <a
                class="px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                :class="`text-${color}-600 bg-${color}-100 hover:bg-${color}-200`"
                href="https://www.instagram.com/opag.software/"
                target="_blank"
              >
                Visualizar Perfil
              </a>
            </div>
            <div
              class="
                bg-white
                mt-10
                py-8
                px-10
                text-center
                rounded-md
                shadow
                hover:shadow-lg
                transform
              "
            >
              <h2 class="font-semibold text-2xl mb-6">WhatsApp</h2>
              <svg class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path :class="`fill-current text-${color}-600`" d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              <p class="text-xl mt-1">Otávio Paganotti</p>
              <span
                class="
                  flex
                  items-center
                  rounded-full
                  w-24
                  pr-2
                  justify-center
                  mx-auto
                  mt-2
                  mb-12
                "
              >
              </span>
              <a
                class="px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                :class="`text-${color}-600 bg-${color}-100 hover:bg-${color}-200`"
                href="https://wa.me/5567996464719"
                target="_blank"
              >
                Entre em Contato
              </a>
            </div>
            <div
              class="
                bg-white
                mt-10
                py-8
                px-10
                text-center
                rounded-md
                shadow
                hover:shadow-lg
                transform
              "
            >
              <h2 class="font-semibold text-2xl mb-6">Github</h2>
              <svg class="w-20 h-20 object-cover rounded-full mx-auto shadow-lg" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path :class="`fill-current text-${color}-600`" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <p class="text-xl mt-1">otavio-paganotti</p>
              <span
                class="
                  flex
                  items-center
                  rounded-full
                  w-24
                  pr-2
                  justify-center
                  mx-auto
                  mt-2
                  mb-12
                "
              >
              </span>
              <a
                class="px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10"
                :class="`text-${color}-600 bg-${color}-100 hover:bg-${color}-200`"
                href="https://github.com/otavio-paganotti"
                target="_blank"
              >
                Visualizar Perfil
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    cardsProjetos: [
      {
        title: "AGIL Online",
        company: "DouraSoft do Brasil",
        job: "Desenvolvedor de Front-End",
        description:
          "Sistema proprietário da empresa DouraSoft do Brasil, que é dedicado para fazer controle financeiro de Casas Lotéricas e Sindicatos.",
        date: "2017 - 2019",
        url: "https://app.dourasoft.net",
      },
      {
        title: "Comandas APP",
        company: "Comandas APP",
        job: "Desenvolvedor Fullstack & Gestor",
        description:
          " Comandas APP surgiu como uma proposta para popularizar a adoção de tecnologias para gestão de bares e restaurantes de maneira que até estabelecimentos das classes D e C poderão desfrutar de alta tecnologia e conseguir escalar seus negócios para patamares nunca antes vistos.",
        date: "2020 - 2020",
        url: null,
      },
      {
        title: "Sistema para medir NPS®",
        company: "DouraSoft do Brasil",
        job: "Desenvolvedor Fullstack",
        description:
          "Com a proposta de realizar pesquisas de lealdade de clientes, esse sistema foi desenvolvido sob medida para um cliente com grande base de clientes, e que precisa acompanhar as métricas o tempo todo para melhorar as estratégias do seu negócio.",
        date: "2020 - 2020",
        url: "https://nps.dourasoft.com.br/",
      },
      {
        title: "Kollabity",
        company: "Kollabity",
        job: "Desenvolvedor Fullstack",
        description: "",
        date: "2020 - 2021",
        url: "https://kollabity.com",
      },
      {
        title: "Teach Learn",
        company: "Teach Learn",
        job: "Desenvolvedor Fullstack",
        description: "",
        date: "2021 - Presente",
        url: "https://app.teachlearn.com.br",
      },
      {
        title: "i9Central",
        company: "i9tv",
        job: "Desenvolvedor Front-end",
        description:
          "Responsável pela manutenção e dar continuidade no sistema interno da empresa, implementar novas funcionalidades, modernizar estruturas, melhorar experiência do usuário e interface.",
        date: "2021 - Presente",
        url: null,
      },
      {
        title: "Untitled Project",
        company: "Portabilis",
        job: "Desenvolvedor Front-end",
        description: "",
        date: "2021 - Presente",
        url: null,
      },
    ],
  }),
  computed: {
    ...mapGetters("system", ["color"]),
  },
};
</script>
