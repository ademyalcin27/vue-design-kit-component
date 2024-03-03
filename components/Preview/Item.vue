<template>
  <div class="flex-1 basis-80">
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
