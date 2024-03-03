<template>
  <label :for="id" class="label-wrapper">
    <slot />
  </label>
</template>

<script setup lang="ts">
interface LabelProps {
  id: string;
}
defineProps<LabelProps>();
</script>

<style scoped>
.label-wrapper {
  @apply flex items-center text-sm font-medium leading-6 text-gray-600;
}
</style>
