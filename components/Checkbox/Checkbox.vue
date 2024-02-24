<template>
  <div class="checkbox-wrapper" :class="{ 'checkbox-wrapper--error': error }">
    <div class="checkbox-wrapper__field">
      <input
        :id="id"
        v-model="modelValue"
        type="checkbox"
        :value="value"
        :name="name"
        :disabled="disabled"
        class="checkbox-wrapper__input"
        @input="$emit('input', $event)"
        @change="$emit('change', $event)"
      />
      <label :for="id" class="checkbox-wrapper__label">
        <slot name="checkmark">
          <div class="checkbox-wrapper__checkmark">
            <font-awesome-icon icon="fa-check" class="checkbox-wrapper__icon" />
          </div>
        </slot>
        <slot>
          {{ label }}
        </slot>
      </label>
    </div>
    <div v-if="errorMessage" class="checkbox-wrapper__error-message">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
interface CheckboxProps {
  value: string | number | boolean;
  label?: string;
  name?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
}
const props = withDefaults(defineProps<CheckboxProps>(), {
  name: "checkbox-" + self.crypto.randomUUID(),
  label: "",
  errorMessage: "",
});
defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "input", event: Event): void;
  (e: "change", event: Event): void;
}>();

const id = self.crypto.randomUUID();
const modelValue = defineModel<T>({
  get(value) {
    if (Array.isArray(value)) {
      return value;
    }
    return props.value === value;
  },
  set(value) {
    if (typeof props.value === "boolean" || Array.isArray(modelValue.value)) {
      return value;
    }
    return value ? props.value : "";
  },
});
</script>

<style scoped>
@import url("@/components/Checkbox/checkbox.css");
</style>
