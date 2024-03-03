<template>
  <div class="toggle-wrapper" :class="{ 'toggle-wrapper--error': error }">
    <FormCheckbox
      v-model="modelValue"
      :value="value"
      :name="name"
      :disabled="disabled"
      :error-message="errorMessage"
    >
      <template #checkmark="{ checked }">
        <div
          class="toggle-wrapper__checkmark"
          :class="{ 'toggle-wrapper__checkmark--checked': checked }"
        />
        <slot>{{ label }}</slot>
      </template>
    </FormCheckbox>
  </div>
</template>

<script setup lang="ts">
interface ToggleProps {
  label?: string;
  value: boolean;
  name?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}
defineProps<ToggleProps>();
const modelValue = defineModel<boolean>();
</script>

<style scoped>
@import url("./toggle.css");
</style>
