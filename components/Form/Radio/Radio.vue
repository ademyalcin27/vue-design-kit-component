<template>
  <div class="radio-wrapper" :class="{ 'radio-wrapper--error': error }">
    <input
      :id="id"
      v-model="modelValue"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      class="radio-wrapper__input"
    />
    <FormLabel :id="id">
      <slot>{{ label }}</slot>
    </FormLabel>
    <div v-if="errorMessage" class="radio-wrapper__error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
interface RadioProps {
  name: string;
  value: string | number | boolean | null | undefined;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}
defineProps<RadioProps>();
const id = self.crypto.randomUUID();
const modelValue = defineModel<T>();
</script>

<style scoped>
@import url("./radio.css");
</style>
