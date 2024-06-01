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
    @click="handleClick"
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
import type { NuxtLinkProps } from "#app";

interface ButtonProps {
  label?: string;
  size?: "small" | "medium" | "large";
  color?: "primary" | "red";
  type?: "button" | "submit" | "reset";
  variant?: "text" | "outlined" | "contained";
  prependIcon?: string;
  appendIcon?: string;
  disabled?: boolean;
  loading?: boolean;
  isLink?: boolean;
  to?: string;
  external?: boolean;
  target?: NuxtLinkProps["target"];
}
const props = withDefaults(defineProps<ButtonProps>(), {
  size: "medium",
  color: "primary",
  type: "button",
  variant: "contained",
  disabled: false,
  loading: false,
  external: false,
});
const emit = defineEmits(["click"]);

async function handleClick(event: Event) {
  emit("click", event);
  if (props.isLink) {
    const options = {
      external: props.external,
      open: { target: props.target || "_self" },
    };
    await navigateTo(props.to, options);
  }
}
</script>

<style scoped>
@import url("./button.css");
</style>
