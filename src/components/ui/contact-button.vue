<template>
  <button    
    class="px-8 py-3 text-base font-medium text-white md:py-4 md:text-lg md:px-10 relative shadow-neobrutalism border-2 border-black bg-[#CA8A04] transition ease-in-out delay-75 hover:scale-110"
    @click.prevent="handleClick"
  >
    Contato
  </button>
</template>

<script setup lang="ts">
const handleClick = (): MouseEvent | undefined => {
  document.getElementById('contato')?.scrollIntoView({
    behavior: 'smooth',
  });
  return;
};
</script>
