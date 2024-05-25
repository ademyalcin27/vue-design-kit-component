<template>
  <div class="accordion-item">
    <button class="accordion-item__title" :disabled="disabled" @click="toggle">
      <slot name="title">{{ title }}</slot>
      <slot name="icon" :is-open="{ isOpen }">
        <font-awesome-icon
          :icon="isOpen ? expandIconLocal : collapseIconLocal"
          class="accordion-item__icon"
        />
      </slot>
    </button>
    <Transition name="accordion-item__description">
      <div v-if="isOpen">
        <slot name="description">{{ description }}</slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
interface AccordionItemProps {
  title?: string;
  description?: string;
  expandIcon?: string;
  collapseIcon?: string;
  disabled?: boolean;
  name?: string;
}

const props = defineProps<AccordionItemProps>();
const emit = defineEmits(["toggle"]);
const name = props.name || self.crypto.randomUUID();
const { isOpen, toggle: baseToggle, accordionProps } = useAccordionItem(name);

const expandIconLocal = computed(
  () => accordionProps.value.expandIcon || props.expandIcon || "chevron-down",
);
const collapseIconLocal = computed(
  () => accordionProps.value.collapseIcon || props.collapseIcon || "chevron-up",
);

function toggle() {
  if (props.disabled) return;
  baseToggle!();
  emit("toggle", isOpen);
}
</script>

<style scoped>
@import url("./accordion.css");
</style>
