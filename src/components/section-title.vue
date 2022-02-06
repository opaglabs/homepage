<template>
  <div
    class="max-w-7xl mx-auto border-b-4 py-3 sticky top-0 z-20 bg-white"
    :class="{
      'border-b-red-600 text-red-600': color === 'red',
      'border-b-yellow-600 text-yellow-600': color === 'yellow',
      'border-b-green-600 text-green-600': color === 'green',
      'border-b-blue-600 text-blue-600': color === 'blue',
      'border-b-indigo-600 text-indigo-600': color === 'indigo',
      'border-b-purple-600 text-purple-600': color === 'purple',
      'border-b-pink-600 text-pink-600': color === 'pink',
    }"
  >
    <div class="flex items-center justify-between">
      <div v-if="!noLogo" @click="changeColor" class="cursor-pointer hidden lg:block relative" v-ripple>
        <Logo class="h-16 w-auto text-white" />
      </div>
      <h1 class="text-4xl tracking-tight font-extrabold px-4 lg:px-0">{{ title }}</h1>
    </div>
  </div>
</template>

<script>import { computed, ref } from "vue";
import { useStore } from "vuex"
import Logo from "./logo.vue";

export default {
    props: {
      title: {
        type: String,
        default: "O que fazemos?"
      },
      noLogo: {
        type: Boolean,
        default: false
      }
    },
    setup() {
      const store = useStore();
      const color = computed(() => store.getters.color);
      const colors = [
        "red",
        "yellow",
        "green",
        "blue",
        "indigo",
        "purple",
        "pink"
      ];
      const lastColor = ref(null);
      const changeColor = () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        if (newColor !== lastColor.value)
          store.commit("color", colors[Math.floor(Math.random() * colors.length)]);
        else
          changeColor();
      };
      return {
        color,
        changeColor,
      };
    },
    components: { Logo }
}
</script>

<style lang="scss" scoped>

</style>