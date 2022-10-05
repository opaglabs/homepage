<template>
  <section id="planos" class="flex gap-2">
    <div class="w-2/12 relative hidden lg:block">
      <img src="@/assets/images/project_line_1.svg" class="absolute top-9" />
    </div>
    <div class="w-full lg:w-8/12 py-4 px-4 lg:px-0">
      <div class="w-full lg:mb-24 mb-12">
        <h2 class="text-4xl tracking-tight font-extrabold">Planos de Consultoria</h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div
          class="relative shadow-neobrutalism border-black border-2 bg-white"
        >
          <div class="p-4 font-extrabold uppercase bg-base-1 text-white">
            Consultoria Assíncrona
          </div>
          <div class="p-4">
            <ul>
              <li v-for="i in 12">Item {{ i }}</li>
            </ul>
          </div>
          <div class="flex flex-col justify-center items-center p-4">
            <span>A partir de</span>
            <button class="px-8 py-3 text-base font-medium text-white md:py-4 md:text-lg md:px-10 relative shadow-neobrutalism border-2 border-black bg-base-1 transition ease-in-out delay-75 lg:hover:scale-[105%]">R$ 27,00</button>
          </div>
        </div>
        <div
          class="relative shadow-neobrutalism border-black border-2 bg-white lg:scale-y-[110%]"
        >
          <div class="p-4 font-extrabold uppercase bg-base-2 text-white">
            Consultoria Síncrona
          </div>
          <div class="p-4">
            <ul>
              <li v-for="i in 12">Item {{ i }}</li>
            </ul>
          </div>
          <div class="flex justify-center p-4">
            <button class="px-8 py-3 text-base font-medium text-white md:py-4 md:text-lg md:px-10 relative shadow-neobrutalism border-2 border-black bg-base-2 transition ease-in-out delay-75 lg:hover:scale-[105%]">R$ 187,00</button>
          </div>
        </div>
        <div
          class="relative shadow-neobrutalism border-black border-2 bg-white"
        >
          <div class="p-4 font-extrabold uppercase bg-base-3 text-white">
            Consultoria Personalizada
          </div>
          <div class="p-4">
            <ul>
              <li v-for="i in 12">Item {{ i }}</li>
            </ul>
          </div>
          <div class="flex justify-center p-4">
            <button @click="handleClick" class="px-8 py-3 text-base font-medium text-white md:py-4 md:text-lg md:px-10 relative shadow-neobrutalism border-2 border-black bg-base-3 transition ease-in-out delay-75 lg:hover:scale-[105%]">Entre em contato</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const handleClick = () => {
  document.getElementById('contato')?.scrollIntoView({
    behavior: 'smooth',
  });
};
</script>