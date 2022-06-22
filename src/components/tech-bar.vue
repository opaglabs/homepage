<template>
  <div class="relative border border-solid border-black rounded-sm p-4 w-full">
    <div class="flex flex-wrap min-h-7 gap-2">
      <a
        v-for="tech in props.techList"
        :href="tech.url"
        target="_blank"
      >
        <span class="text-gray-500 text-xs font-semibold flex items-end">
          <img v-if="tech.image" class="w-1/2" :src="tech.image" :alt="tech.name" />
          <span v-else>
            {{ tech.name }}
          </span>
        </span>
      </a>
    </div>
    <small class="bg-[#f8f8f8] absolute -bottom-2 px-2">{{ category }}</small>
  </div>
</template>

<script setup>

const props = defineProps({
  techList: [],
  category: ''
});

</script>