<template>
  <div class="my-5 flex-1">
    <h2 class="mb-2 text-base font-medium">{{ title }}</h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
interface PreviewItemProps {
  title: string;
}

defineProps<PreviewItemProps>();
</script>

<style scoped></style>
