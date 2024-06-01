<template>
  <div class="py-10">
    <h1 class="py-2 text-3xl font-bold text-c-title-foreground">
      {{ title }}
    </h1>
    <div class="page__description mb-10">
      {{ description }}
    </div>
    <div class="flex flex-col">
      <slot />
    </div>
    <div class="mt-10">
      <h2 class="my-3 text-lg font-semibold">Props</h2>
      <slot name="props" />
      <h2 class="my-3 mt-10 text-lg font-semibold">Slots</h2>
      <slot name="slots" />
    </div>
  </div>
</template>

<script lang="ts" setup>
interface PreviewPageProps {
  title?: string;
  description?: string;
}
defineProps<PreviewPageProps>();
</script>

<style lang="scss" scoped></style>
