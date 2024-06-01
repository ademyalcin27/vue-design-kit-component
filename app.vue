<template>
  <div class="wrapper">
    <button
      class="w-max justify-center rounded-md bg-c-primary p-2 text-c-primary-foreground"
      @click="toggleTheme"
    >
      Theme Toggle
    </button>
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const { toggleTheme, initTheme } = useTheme();

onMounted(() => {
  initTheme();
});
</script>
<style scoped>
.wrapper {
  @apply flex flex-col p-5;
  &__section-title {
    @apply mb-4 text-2xl font-semibold text-c-primary;
  }
}
</style>
