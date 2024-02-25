<template>
  <div
    class="radio-input-wrapper"
    :class="{ 'radio-input-wrapper--error': error }"
  >
    <input
      :id="id"
      v-model="modelValue"
      type="radio"
      :name="name"
      :value="value"
      :disabled="disabled"
      class="radio-input-wrapper__input"
    />
    <label :for="id" class="radio-input-wrapper__label">
      <slot>{{ label }}</slot>
    </label>
    <div v-if="errorMessage" class="radio-input-wrapper__error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
interface RadioInputProps {
  name: string;
  value: string | number | boolean | null | undefined;
  label?: string;
  error?: boolean;
  errorMessage?: string;
  disabled?: boolean;
}
defineProps<RadioInputProps>();
const id = self.crypto.randomUUID();
const modelValue = defineModel<T>();
</script>

<style scoped>
@import url("@/components/RadioInput/radio-input.css");
</style>
