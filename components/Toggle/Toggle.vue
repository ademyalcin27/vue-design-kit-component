<template>
  <div class="toggle-wrapper" :class="{ 'toggle-wrapper--error': error }">
    <Checkbox
      v-model="modelValue"
      :value="value"
      :name="name"
      :disabled="disabled"
      :error-message="errorMessage"
    >
      <template #checkmark>
        <div
          class="toggle-wrapper__checkmark"
          :class="{ 'toggle-wrapper__checkmark--checked': modelValue }"
        />
        <span class="toggle-wrapper__label"><slot />{{ label }}</span>
      </template>
    </Checkbox>
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
@import url("@/components/Toggle/toggle.css");
</style>
