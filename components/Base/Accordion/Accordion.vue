<template>
  <div class="accordion-wrapper">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { AccordionProps } from "./accordion.type";

const props = defineProps<AccordionProps>();
const modelValue = defineModel<string[]>({ required: false, default: [] });
const { openItems } = useAccordion(modelValue.value, props);

watch(openItems, (value) => {
  modelValue.value = value;
});
</script>

<style scoped>
@import url("./accordion.css");
</style>
