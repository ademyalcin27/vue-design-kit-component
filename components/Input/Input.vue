<template>
  <div class="input-wrapper">
    <label v-if="label" :for="id" class="input-wrapper__label">{{
      label
    }}</label>
    <div class="relative flex">
      <input
        :id="id"
        v-model="modelValue"
        :type="type"
        class="input-wrapper__input"
        :class="{
          'input-wrapper__input--clearable': showClearable,
          'input-wrapper__input--error': error,
        }"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
      />
      <font-awesome-icon
        v-if="showClearable"
        icon="fa-xmark"
        class="input-wrapper__clear"
        @click="clearInput"
      />
    </div>
    <span v-if="errorMessages" class="input-wrapper__error-message">
      {{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import type { InputHTMLAttributes } from "vue";
import { errorMessages } from "vue/compiler-sfc";
type InputTypes = Extract<
  InputHTMLAttributes["type"],
  "text" | "number" | "email" | "password" | "tel" | "url"
>;
interface InputProps {
  id?: string;
  label?: string;
  type?: InputTypes;
  placeholder?: string;
  disabled?: boolean;
  readonly?: boolean;
  clearable?: boolean;
  errorMessage?: string;
  error?: boolean;
}

const props = withDefaults(defineProps<InputProps>(), {
  id: self.crypto.randomUUID(),
  label: "",
  type: "text",
  placeholder: "",
  errorMessage: "",
});
const emit = defineEmits(["update:modelValue"]);

const modelValue = defineModel<string | number>();

const showClearable = computed(
  () => props.clearable && modelValue.value && !props.disabled,
);
function clearInput() {
  if (!props.clearable) return;
  modelValue.value = undefined;
}
</script>

<style scoped>
@import url("@/components/Input/Input.css");
</style>
