<template>
  <div class="flex flex-col relative mt-6">
    <label
      :for="inputName"
      class="bg-white absolute -top-3 left-3 px-2"
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
      {{ label }}
    </label>
    <input
      v-if="type !== 'textarea'"
      autocomplete="off"
      v-model="model"
      :id="inputName"
      :type="type"
      class="p-4 border rounded-xl outline-none focus:border-2"
      :class="{
        'border-red-600': color === 'red',
        'border-yellow-600': color === 'yellow',
        'border-green-600': color === 'green',
        'border-blue-600': color === 'blue',
        'border-indigo-600': color === 'indigo',
        'border-purple-600': color === 'purple',
        'border-pink-600': color === 'pink',
      }"
    >
    <textarea
      v-else
      v-model="model"
      :id="inputName"
      class="p-4 border rounded-xl outline-none focus:border-2"
      :class="{
        'border-red-600': color === 'red',
        'border-yellow-600': color === 'yellow',
        'border-green-600': color === 'green',
        'border-blue-600': color === 'blue',
        'border-indigo-600': color === 'indigo',
        'border-purple-600': color === 'purple',
        'border-pink-600': color === 'pink',
      }"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    modelValue: null,
    inputName: String,
    label: String,
    type: {
      type: String,
      default: 'text'
    },
  },
  computed: {
    ...mapGetters(['color']),
    model: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('input:modelValue', value);
      },
    }
  }
}
</script>

<style lang="scss" scoped>

</style>