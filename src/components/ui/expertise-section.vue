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
      <div
        class="col-span-3"
        :class="[
          {
            'h-[21rem] overflow-hidden': !showAll,
          },
        ]"
      >
        <div class="flex gap-4 flex-wrap justify-start">
          <div
            v-for="(item, index) in whatWeDo"
            :key="index"
            class="shadow-neobrutalism border border-black flex-[1_0_100%] md:flex-[1_0_40%] lg:flex-[1_0_30%]"
          >
            <div class="p-4 flex gap-2">
              <div class="basis-1/6 h-12 py-2 rounded flex items-center justify-center">
                <img :src="item.icon" class="h-8 w-8" />
              </div>
              <div class="basis-3/4 flex flex-col relative">
                <div class="font-extrabold tracking-tight flex justify-center text-white text-center" :class="[item.color]">
                  <span class="drop-shadow-lg">{{ item.title }}</span>
                </div>
                <div class="line-clamp-3">
                  {{ item.content }}
                </div>
                <div v-if="item.showContent" class="absolute z-10 bg-white p-2 border-2 border-solid border-black shadow-neobrutalism">
                  {{ item.content }}
                  <div class="text-blue-700 hover:underline cursor-pointer" @click="item.showContent = !item.showContent">{{ item.showContent ? 'Ler menos' : 'Leia mais' }}</div>
                </div>
                <div class="text-blue-700 hover:underline cursor-pointer" @click="item.showContent = !item.showContent">{{ item.showContent ? 'Ler menos' : 'Leia mais' }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        class="col-span-3 flex justify-center cursor-pointer bg-base-6 shadow-neobrutalism-min text-white font-bold"
        @click="handleClickShowAll"
      >
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
import AnalysisImg from '@/assets/images/expertise/analysis.png';
import CloudComputingImg from '@/assets/images/expertise/cloud-computing.png';
import DashboardLayoutImg from '@/assets/images/expertise/dashboard-layout.png';
import DiagramImg from '@/assets/images/expertise/diagram.png';
import DirectionCenterImg from '@/assets/images/expertise/direction-center.png';
import GrowUpImg from '@/assets/images/expertise/grow-up.png';
import KanbanImg from '@/assets/images/expertise/kanban.png';
import MulticastImg from '@/assets/images/expertise/multicast.png';
import Performance1Img from '@/assets/images/expertise/performance-1.png';
import Performance2Img from '@/assets/images/expertise/performance-2.png';
import SolutionImg from '@/assets/images/expertise/solution.png';
import SourceCodeImg from '@/assets/images/expertise/source-code.png';
import TypescriptImg from '@/assets/images/expertise/typescript.png';
import WebAccessibilityImg from '@/assets/images/expertise/web-accessibility.png';
import { ref } from 'vue';

const showAll = ref(false);

const handleClickShowAll = (): MouseEvent | undefined => {
  showAll.value = !showAll.value;
  return;
}

const whatWeDo = ref([
  {
    icon: MulticastImg,
    color: 'bg-base-1',
    title: 'Arquitetura Front-end',
    content: 'A arquitetura front-end de um projeto refere-se à organização e estruturação do código relacionado à interface de um website ou aplicativo, incluindo HTML, CSS e JavaScript. É fundamental ter uma arquitetura sólida para garantir a manutenção, escalabilidade e eficiência do projeto a longo prazo. Uma arquitetura bem projetada pode facilitar a adição ou alteração de recursos e funcionalidades, permitindo a expansão do software conforme as necessidades do usuário. Também pode melhorar o desempenho do aplicativo ou site, reduzindo o tempo de carregamento e o consumo de recursos do dispositivo. Portanto, a arquitetura na programação front-end pode ser vista como uma estrutura que permite a implementação, organização e gerenciamento da lógica do software e que precisa ser pensada cuidadosamente para garantir um produto de qualidade e de fácil manutenção.',
    showContent: false,
  },
  {
    icon: DirectionCenterImg,
    color: 'bg-base-3',
    title: 'Testes de unidade (TDD)',
    content: 'Testes de unidade (TDD) é uma prática de desenvolvimento de software em que os testes são escritos antes da implementação do código. Esses testes validam o comportamento do código em unidades isoladas, garantindo que cada unidade funcione como o esperado.',
    showContent: false,
  },
  {
    icon: Performance1Img,
    color: 'bg-base-2',
    title: 'Testes de integração (E2E)',
    content: 'Testes de integração (E2E) é uma prática de desenvolvimento de software em que os testes são realizados para verificar se o sistema como um todo está funcionando corretamente, garantindo que todas as unidades interagem de forma adequada. Geralmente, esse tipo de teste é feito após testes de unidade.',
    showContent: false,
  },
  {
    icon: TypescriptImg,
    color: 'bg-base-1',
    title: 'TypeScript',
    content: 'TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional e outros recursos avançados, como classe, interface, enumeração e tipos genéricos. Ele permite que os desenvolvedores escrevam e mantenham códigos JavaScript grandes em equipe com mais confiança e produtividade.',
    showContent: false,
  },
  {
    icon: GrowUpImg,
    color: 'bg-base-6',
    title: 'Escalabilidade',
    content: 'A escalabilidade de software se refere à capacidade de um sistema de software lidar com uma quantidade crescente de dados ou usuários sem comprometer o desempenho ou a funcionalidade. Isso é fundamental para garantir que um software possa crescer e se adaptar às necessidades do negócio e dos usuários ao longo do tempo.',
    showContent: false,
  },
  {
    icon: Performance2Img,
    color: 'bg-base-3',
    title: 'Performance',
    content: 'Refere à qualidade e eficiência do sistema em relação ao tempo de resposta e consumo de recursos. É um aspecto importante para garantir a satisfação do usuário e a otimização do sistema como um todo.',
    showContent: false,
  },
  {
    icon: DashboardLayoutImg,
    color: 'bg-base-2',
    title: 'Layout Responsivo',
    content: 'O Layout Responsivo é uma técnica de design que adapta automaticamente a apresentação de conteúdo de acordo com o tamanho e orientação da tela do dispositivo, garantindo uma experiência consistente e otimizada para o usuário.',
    showContent: false,
  },
  {
    icon: SourceCodeImg,
    color: 'bg-base-4',
    title: 'Elementos Semânticos',
    content: 'Elementos Semânticos são capazes de fornecer significado e estrutura ao conteúdo em uma página web. Eles são importantes para a acessibilidade e visibilidade do site em mecanismos de busca.',
    showContent: false,
  },
  {
    icon: WebAccessibilityImg,
    color: 'bg-base-2',
    title: 'Acessibilidade Web',
    content: 'Acessibilidade Web é o conjunto de práticas e técnicas aplicadas no desenvolvimento de websites visando torná-los mais acessíveis aos usuários com deficiência, garantindo que todos possam acessar o conteúdo e funcionalidades do site de forma igualitária.',
    showContent: false,
  },
  {
    icon: DiagramImg,
    color: 'bg-base-3',
    title: 'Diagramação e Algoritmos',
    content: 'Diagramação é a arte de organizar elementos em uma página para comunicar uma mensagem de forma visualmente agradável. Algoritmos são sequências lógicas e finitas de instruções que resolvem um determinado problema. Estes dois conceitos são fundamentais no desenvolvimento de interfaces digitais eficientes e agradáveis aos usuários.',
    showContent: false,
  },
  {
    icon: KanbanImg,
    color: 'bg-base-5',
    title: 'Organização e Gestão de Projetos',
    content: 'Refere-se às práticas e métodos utilizados para planejar, monitorar e executar projetos de desenvolvimento de software, garantindo entregas de qualidade dentro do prazo e orçamento definidos. É uma área de grande importância para o sucesso de qualquer projeto de software.',
    showContent: false,
  },
  {
    icon: SolutionImg,
    color: 'bg-base-4',
    title: 'Integração Contínua e Entrega Contínua (CI/CD)',
    content: 'São práticas de desenvolvimento de software que buscam automatizar e acelerar a entrega de novas funcionalidades de forma contínua e consistente. Isso é feito através da automação de testes, integração de código e uso de pipelines de entrega.',
    showContent: false,
  },
  {
    icon: CloudComputingImg,
    color: 'bg-base-6',
    title: 'Configuração de Servidores e Infraestrutura',
    content: 'Configuração de Servidores e Infraestrutura é o processo de preparar e manter os recursos de hardware e software que formam a base de uma aplicação ou sistema. Isso inclui servidores, redes, bancos de dados e outras ferramentas fundamentais para garantir a disponibilidade e desempenho da aplicação em produção.',
    showContent: false,
  },
  {
    icon: AnalysisImg,
    color: 'bg-base-1',
    title: 'Análise e Monitoramento da Aplicação',
    content: 'É o processo de coletar e analisar dados de desempenho e comportamento da aplicação em tempo real, com o objetivo de identificar e resolver problemas de forma proativa e garantir a melhor experiência do usuário final.',
    showContent: false,
  },
]);
</script>
