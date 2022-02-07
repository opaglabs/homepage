<template>
  <div class="snap-center w-full relative h-full xl:h-screen" id="vamos-trabalhar-juntos">
    <SectionTitle title="Vamos trabalhar juntos?" :noLogo="noLogo" />

    <div class="max-w-screen-md mx-auto xl:mt-14 p-4 xl:p-0">
      <div class="grid grid-cols-1 content-center">
        <div>
          <XInput
            v-model="contact_name"
            label="Digite seu nome"
            input-name="contact_name"
          />
          <XInput
            v-model="contact_email"
            label="Digite seu melhor e-mail"
            type="email"
            input-name="contact_email"
          />
          <XInput
            v-model="contact_company"
            label="Qual o nome da sua empresa?"
            input-name="contact_company"
          />
          <XInput
            v-model="contact_message"
            label="Escreva sua mensagem"
            type="textarea"
            input-name="contact_message"
          />

          <button
            class="w-full text-white rounded-xl p-4 text-xl font-bold mt-4 relative"
            v-ripple
            :class="{
              'bg-red-600': color === 'red',
              'bg-yellow-600': color === 'yellow',
              'bg-green-600': color === 'green',
              'bg-blue-600': color === 'blue',
              'bg-indigo-600': color === 'indigo',
              'bg-purple-600': color === 'purple',
              'bg-pink-600': color === 'pink',
            }"
          >
            Vamos nessa!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>import { computed, ref } from "vue";
import { useStore } from "vuex";
import SectionTitle from "./section-title.vue";
import XInput from "./XInput.vue";

export default {
  props: {
    noLogo: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const contact_name = ref("");
    const contact_email = ref("");
    const contact_company = ref("");
    const contact_message = ref("");
    const store = useStore();
    const color = computed(() => store.getters.color);
    return {
      contact_name,
      contact_email,
      contact_company,
      contact_message,
      color,
    };
  },
  components: { SectionTitle, XInput }
}
</script>

<style lang="scss" scoped>

</style>