<template>
  <div class="wrapper">
    <button
      class="text-c-primary-foreground bg-c-primary w-max justify-center rounded-md p-2"
      @click="toggleTheme"
    >
      Theme Toggle
    </button>
    <h2 class="wrapper__section-title">Input Components</h2>
    <PreviewInput />
    <h2 class="wrapper__section-title">Checkbox Components</h2>
    <PreviewCheckbox />
    <h2 class="wrapper__section-title">Toggle Components</h2>
    <PreviewToggle />
    <h2 class="wrapper__section-title">Radio Components</h2>
    <PreviewRadio />
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
    @apply text-c-primary mb-4 text-2xl font-semibold;
  }
}
</style>
