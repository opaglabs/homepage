<template>
  <div class="grid grid-cols-1 gap-4">
    <main class="max-w-7xl xl:mx-auto h-screen p-4 xl:p-0">
      <div
        class="relative flex items-start justify-between lg:mt-10 sm:mt-12 md:mt-16"
      >
        <div class="sm:text-center lg:text-left">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">Engenharia de Software,</span>
            {{ " " }}
            <span
              class="block xl:inline"
              :class="returnColor"
              >Plataformas & Negócios</span
            >
          </h1>
          <p
            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
          >
            Acreditamos em uma nova forma de computação, onde os sistemas deixam
            de ser engessados. Dessa forma, nosso desenvolvimento é aplicado
            100% ao contexto do seu negócio. Bem-vindo à Computação Aconselhada.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <router-link
                to="/contato"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white md:py-4 md:text-lg md:px-10 relative"
                v-ripple
                :class="{
                  'bg-red-600 hover:bg-red-600': color === 'red',
                  'bg-yellow-600 hover:bg-yellow-600': color === 'yellow',
                  'bg-green-600 hover:bg-green-600': color === 'green',
                  'bg-blue-600 hover:bg-blue-600': color === 'blue',
                  'bg-indigo-600 hover:bg-indigo-600': color === 'indigo',
                  'bg-purple-600 hover:bg-purple-600': color === 'purple',
                  'bg-pink-600 hover:bg-pink-600': color === 'pink',
                }"
              >
                Contato
              </router-link>
            </div>
            <div class="mt-3 sm:mt-0 sm:ml-3">
              <router-link
                to="/projetos"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 relative"
                v-ripple
                :class="{
                  'text-red-600 bg-red-100 hover:bg-red-200': color === 'red',
                  'text-yellow-600 bg-yellow-100 hover:bg-yellow-200':
                    color === 'yellow',
                  'text-green-600 bg-green-100 hover:bg-green-200':
                    color === 'green',
                  'text-blue-600 bg-blue-100 hover:bg-blue-200':
                    color === 'blue',
                  'text-indigo-600 bg-indigo-100 hover:bg-indigo-200':
                    color === 'indigo',
                  'text-purple-600 bg-purple-100 hover:bg-purple-200':
                    color === 'purple',
                  'text-pink-600 bg-pink-100 hover:bg-pink-200':
                    color === 'pink',
                }"
              >
                Projetos Realizados
              </router-link>
            </div>
          </div>
        </div>
        <!-- <div id="bubbles">
          <div class="bubble x1">
            <img src="https://via.placeholder.com/120x60/ffb200/000" />
          </div>
          <div class="bubble x2">
            <img src="https://via.placeholder.com/120x60/ffb200/000" />
          </div>
          <div class="bubble x3">
            <img src="https://via.placeholder.com/120x60/ffb200/000" />
          </div>
          <div class="bubble x4">
            <img src="https://via.placeholder.com/120x60/ffb200/000" />
          </div>
          <div class="bubble x5">
            <img src="https://via.placeholder.com/120x60/ffb200/000" />
          </div>
        </div> -->
        <div class="hidden md:block w-2/3 h-48">
          <hero :color="color" class="object-cover w-5/5 rounded-3xl p-5" />
        </div>
      </div>
      <!-- <div class="w-full mt-4 xl:mt-12">
        <div class="grid grid-cols-2 xl:grid-cols-4 gap-4">
          <div
            v-for="i in logos"
            :key="i"
            class="relative shadow hover:shadow-lg bg-white rounded-md p-4 flex justify-center content-center"
          >
            <img :src="i" :alt="i" class="w-16" />
          </div>
        </div>
      </div> -->
    </main>
    <div class="w-full absolute bottom-14" v-if="showButton">
      <div class="w-full grid grid-cols-1 justify-items-center">
        <div
          @click="handleClick"
          class="mt-6 font-bold lg:hidden absolute top-1 animate-bounce bg-white px-2 py-1 rounded shadow-2xl"
          :class="returnColor"
        >
          Deslize para baixo
        </div>
        <div
          class="hidden lg:block cursor-pointer absolute bottom-12"
          @click="handleClick"
        >
          <div class="relative mt-4">
            <ChevronDownIcon
              class="absolute -left-9 w-12 lg:w-16 flex items-start animate-arrow"
              style="animation-delay: -1s; -webkit-animation-delay: -1s"
              :class="returnColor"
            />
            <ChevronDownIcon
              class="absolute top-6 -left-9 w-12 lg:w-16 flex items-start animate-arrow"
              style="animation-delay: -0.5s; -webkit-animation-delay: -0.5s"
              :class="returnColor"
            />
            <ChevronDownIcon
              class="absolute top-12 -left-9 w-12 lg:w-16 flex items-start animate-arrow"
              style="animation-delay: 0s; -webkit-animation-delay: 0s"
              :class="returnColor"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="snap-center lg:h-screen w-full" id="o-que-fazemos">
      <section-title title="O que fazemos?" />
      <div class="max-w-7xl mx-auto lg:mt-14 p-4 xl:p-0">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(step, i) in steps"
            :key="i"
            class="w-full h-80 flex justify-around items-stretch"
          >
            <div class="grid grid-row text-center p-4">
              <div class="text-2xl font-bold mb-8">
                {{  (i + 1) + "º Passo" }}
              </div>
              <div class="flex justify-center h-28 mb-8">
                <component :is="step.image" :class="step.class" />
              </div>
              <div class="font-bold">
                {{ step.title }}
              </div>
              <div class="text-gray-600 text-xs max-w-xs">
                {{ step.description }}
              </div>
            </div>
            <ChevronDoubleRightIcon
              v-if="i < steps.length - 1"
              class="hidden md:block w-8 lg:w-8"
              :class="returnColor"
            />
          </div>
        </div>
      </div>
    </div>
    <WorkTogether />
  </div>
</template>

<script>
import Hero from "@/components/hero.vue";
import XInput from "@/components/XInput.vue";
import { ChevronDownIcon, ChevronDoubleRightIcon } from "@heroicons/vue/outline";
import { useStore } from "vuex";
import SectionTitle from '@/components/section-title.vue';
import step1 from "@/components/step1.vue";
import step2 from "@/components/step2.vue";
import step3 from "@/components/step3.vue";
import step4 from "@/components/step4.vue";
import step5 from "@/components/step5.vue";
import step6 from "@/components/step6.vue";
import WorkTogether from "../components/work-together.vue";
import { computed, onBeforeUnmount, onMounted, ref } from "vue";

export default {
  components: {
    Hero,
    ChevronDownIcon,
    ChevronDoubleRightIcon,
    SectionTitle,
    XInput,
    WorkTogether
  },
  setup() {
    const store = useStore();

    const color = computed(() => store.getters.color);

    const steps = computed(() => [
        {
          title: 'Levantamento de Requisitos',
          description: 'Vamos entender seu problema e definir os requisitos necessários para o seu negócio.',
          image: step1,
          class: [
            returnColor.value,
            'w-32'
          ]
        },
        {
          title: 'Organização do Projeto',
          description: 'Vamos definir o cenário de negócio e definir o fluxo de trabalho.',
          image: step2,
          class: [
            returnColor.value,
            'w-32'
          ]
        },
        {
          title: 'Proposta',
          description: 'Proposta de negócio é apresentada para o cliente e aprovação do mesmo.',
          image: step3,
          class: [
            returnColor.value,
            'w-32'
          ]
        },
        {
          title: 'Desenvolvimento e Testes',
          description: 'Vamos implementar sua solução nos moldes daquilo que foi definido.',
          image: step4,
          class: [
            returnColor.value,
            'w-32'
          ]
        },
        {
          title: 'Alinhamentos e Ajustes Finais',
          description: 'Nesta etapa, realizamos os últimos alinhamentos e ajustes da sua aplicação, antes da entrega.',
          image: step5,
          class: [
            returnColor.value,
            'w-42'
          ]
        },
        {
          title: 'Entrega',
          description: 'Você sairá feliz com a solução e poderá usá-la da maneira que desejar',
          image: step6,
          class: [
            returnColor.value,
            'w-20'
          ]
        },
      ])

    const returnColor = computed(() => ({
      'text-red-600': color.value === 'red',
      'text-yellow-600': color.value === 'yellow',
      'text-green-600': color.value === 'green',
      'text-blue-600': color.value === 'blue',
      'text-indigo-600': color.value === 'indigo',
      'text-purple-600': color.value === 'purple',
      'text-pink-600': color.value === 'pink',
    }));

    const showButton = ref(true);

    const handleClick = () => {
      document.getElementById('o-que-fazemos').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    };

    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 100) {
        showButton.value = false;
      } else {
        showButton.value = true;
      }
    };

    onMounted(() => document.addEventListener('scroll', handleScroll));

    onBeforeUnmount(() => document.removeEventListener('scroll', handleScroll));

    const logos = ref([
      '../../src/assets/dourasoft.png',
      '../../src/assets/i9tv.png',
      '../../src/assets/portabilis.jpg',
      '../../src/assets/TeachLearn.png',
    ]);

    return {
      handleClick,
      color,
      steps,
      returnColor,
      showButton,
      logos
    }
  },
};
</script>

<style>
#bubbles {
  height: 100%;
}
#bubbles {
  padding: 100px 0;
}
.bubble {
  width: 180px;
  height: 180px;
  background: #ffb200;
  border-radius: 200px;
  -moz-border-radius: 200px;
  -webkit-border-radius: 200px;
  position: absolute;
}

.bubble img {
  position: absolute;
  top: 30%;
  left: 15%;
}

.x1 {
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  transform: scale(0.9);
  opacity: 0.2;
  -webkit-animation: moveclouds 15s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: moveclouds 15s linear infinite;
  -o-animation: moveclouds 15s linear infinite;
}

.x2 {
  left: 200px;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 0.5;
  -webkit-animation: moveclouds 25s linear infinite,
    sideWays 5s ease-in-out infinite alternate;
  -moz-animation: moveclouds 25s linear infinite;
  -o-animation: moveclouds 25s linear infinite;
}
.x3 {
  left: 350px;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.3;
  -webkit-animation: moveclouds 20s linear infinite,
    sideWays 4s ease-in-out infinite alternate;
  -moz-animation: moveclouds 20s linear infinite;
  -o-animation: moveclouds 20s linear infinite;
}
.x4 {
  left: 470px;
  -webkit-transform: scale(0.75);
  -moz-transform: scale(0.75);
  transform: scale(0.75);
  opacity: 0.35;
  -webkit-animation: moveclouds 18s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
  -moz-animation: moveclouds 18s linear infinite;
  -o-animation: moveclouds 18s linear infinite;
}
.x5 {
  left: 150px;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 0.3;
  -webkit-animation: moveclouds 7s linear infinite,
    sideWays 1s ease-in-out infinite alternate;
  -moz-animation: moveclouds 7s linear infinite;
  -o-animation: moveclouds 7s linear infinite;
}
@-webkit-keyframes moveclouds {
  0% {
    top: 500px;
  }
  100% {
    top: -500px;
  }
}

@-webkit-keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

@-moz-keyframes moveclouds {
  0% {
    top: 500px;
  }

  100% {
    top: -500px;
  }
}
@-o-keyframes moveclouds {
  0% {
    top: 500px;
  }
  100% {
    top: -500px;
  }
}
</style>
