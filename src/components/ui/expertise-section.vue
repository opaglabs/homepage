<template>
  <div class="relative flex gap-2">
    <div class="w-2/12 hidden lg:block"></div>
    <div
      class="w-full lg:w-8/12 grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-0"
    >
      <h2
        class="col-span-3 mb-8 flex justify-center text-4xl tracking-tight font-extrabold text-gray-900"
      >
        Minhas especialidades
      </h2>
      <div class="col-span-3"
        :class="[
          {
            'h-[21rem] overflow-hidden': !showAll,
          }
        ]"
      >
        <div class="flex gap-4 flex-wrap justify-start">
          <div
            v-for="(item, index) in whatWeDo"
            class="shadow-neobrutalism border border-black flex-[1_0_100%] md:flex-[1_0_40%] lg:flex-[1_0_30%]"
          >
            <div class="flex gap-2 p-2" :class="[item.color]">
              <div
                v-for="i in index + 1"
                class="h-4 w-4 rounded-full bg-white"
              ></div>
            </div>
            <div class="p-4 flex flex-col content-between gap-4">
              <div class="flex justify-center">
                <img :src="item.icon" class="h-8 w-8" />
              </div>
              <div class="text-center font-extrabold tracking-tight">
                {{ item.title }}
              </div>
              <div>
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="col-span-3 flex justify-center cursor-pointer bg-base-6 shadow-neobrutalism-min text-white font-bold" @click="showAll = !showAll">
        {{ !showAll ? 'Ver mais' : 'Ver menos' }}
      </button>
    </div>
    <div class="w-2/12 hidden lg:block">
      <img
        src="@/assets/images/section_arrow.svg"
        class="absolute top-1/3 right-0 max-w-[240px] hidden lg:block"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import DirectionCenterImg from '@/assets/images/expertise/direction-center.png';
import GrowUpImg from '@/assets/images/expertise/grow-up.png';
import Performance1Img from '@/assets/images/expertise/performance-1.png';
import Performance2Img from '@/assets/images/expertise/performance-2.png';
import TypescriptImg from '@/assets/images/expertise/typescript.png';
import MulticastImg from '@/assets/images/expertise/multicast.png';
import DashboardLayoutImg from '@/assets/images/expertise/dashboard-layout.png';
import KanbanImg from '@/assets/images/expertise/kanban.png';
import SolutionImg from '@/assets/images/expertise/solution.png';
import CloudComputingImg from '@/assets/images/expertise/cloud-computing.png';
import AnalysisImg from '@/assets/images/expertise/analysis.png';
import SourceCodeImg from '@/assets/images/expertise/source-code.png';
import WebAccessibilityImg from '@/assets/images/expertise/web-accessibility.png';
import DiagramImg from '@/assets/images/expertise/diagram.png';

const showAll = ref(false);

const whatWeDo = ref([
  {
    icon: MulticastImg,
    color: 'bg-base-1',
    title: 'Arquitetura Front-end',
    content: '',
  },
  {
    icon: DirectionCenterImg,
    color: 'bg-base-3',
    title: 'Testes de unidade (TDD)',
    content: '',
  },
  {
    icon: Performance1Img,
    color: 'bg-base-2',
    title: 'Testes de integração (E2E)',
    content: '',
  },
  {
    icon: TypescriptImg,
    color: 'bg-base-1',
    title: 'TypeScript',
    content: '',
  },
  {
    icon: GrowUpImg,
    color: 'bg-base-6',
    title: 'Escalabilidade',
    content: '',
  },
  {
    icon: Performance2Img,
    color: 'bg-base-3',
    title: 'Performance',
    content: '',
  },
  {
    icon: DashboardLayoutImg,
    color: 'bg-base-2',
    title: 'Layout Responsivo',
    content: '',
  },
  {
    icon: SourceCodeImg,
    color: 'bg-base-4',
    title: 'Elementos Semânticos',
    content: '',
  },
  {
    icon: WebAccessibilityImg,
    color: 'bg-base-2',
    title: 'Acessibilidade Web',
    content: '',
  },
  {
    icon: DiagramImg,
    color: 'bg-base-3',
    title: 'Diagramação e Algoritmos',
    content: '',
  },
  {
    icon: KanbanImg,
    color: 'bg-base-5',
    title: 'Organização e Gestão de Projetos',
    content: '',
  },
  {
    icon: SolutionImg,
    color: 'bg-base-4',
    title: 'Integração Contínua e Entrega Contínua (CI/CD)',
    content: '',
  },
  {
    icon: CloudComputingImg,
    color: 'bg-base-6',
    title: 'Configuração de Servidores e Infraestrutura',
    content: '',
  },
  {
    icon: AnalysisImg,
    color: 'bg-base-1',
    title: 'Análise e Monitoramento da Aplicação',
    content: '',
  },
]);
</script>
