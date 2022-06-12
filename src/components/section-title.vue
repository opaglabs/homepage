<template>
  <div class="sticky top-24 z-30 bg-[#F8F8F8] w-full px-4 lg:px-0">
    <div
      class="max-w-screen-xl mx-auto px-4 py-2 bg-white shadow-neobrutalism border-black border-solid border-2 rounded-xl"
      :class="{
        'text-red-600': color === 'red',
        'text-yellow-600': color === 'yellow',
        'text-green-600': color === 'green',
        'text-blue-600': color === 'blue',
        'text-indigo-600': color === 'indigo',
        'text-purple-600': color === 'purple',
        'text-pink-600': color === 'pink',
      }"
    >
      <div class="flex items-center justify-between">
        <!-- <div v-if="!noLogo" @click="changeColor" class="cursor-pointer hidden xl:block relative" v-ripple>
          <Logo class="h-16 w-auto text-white" />
        </div> -->
        <h1 class="text-3xl tracking-tight font-extrabold px-4 xl:px-0">{{ title }}</h1>
      </div>
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