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
  <expertise-section />
  <div class="relative mt-4">
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
import ProjectCards from '@/components/ui/project-cards.vue';
import ContactButton from '@/components/ui/contact-button.vue';
import ContactSection from '@/components/ui/contact-section.vue';
import PlanSection from '@/components/ui/plan-section.vue';
import FooterSection from '@/components/ui/footer-section.vue';
import ExpertiseSection from '@/components/ui/expertise-section.vue';
</script>