<template>
  <button
    :type="type"
    :disabled="disabled"
    class="button-wrapper"
    :class="[
      `button-wrapper--${size}`,
      `button-wrapper--${color}`,
      `button-wrapper--${variant}`,
    ]"
  >
    <slot name="prependIcon">
      <font-awesome-icon
        v-if="prependIcon"
        :icon="prependIcon"
        class="input-wrapper__prepend-icon"
      />
    </slot>
    <BaseLoader v-if="loading" class="h-8 w-8" />
    <slot>{{ label }}</slot>
    <slot name="appendIcon">
      <font-awesome-icon
        v-if="appendIcon"
        :icon="appendIcon"
        class="input-wrapper__prepend-icon"
      />
    </slot>
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  label?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "red";
  type?: "button" | "submit" | "reset";
  variant?: "text" | "outline" | "contained";
  prependIcon?: string;
  appendIcon?: string;
  disabled?: boolean;
  loading?: boolean;
}
withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  color: "primary",
  type: "button",
  variant: "contained",
  disabled: false,
  loading: false,
});
</script>

<style scoped>
@import url("./button.css");
</style>
