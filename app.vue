<template>
  <div class="wrapper">
    <button
      class="w-max justify-center rounded-md bg-c-primary p-2 text-c-primary-foreground"
      @click="toggleTheme"
    >
      Theme Toggle
    </button>
    <h2 class="wrapper__section-title">Button Components</h2>
    <PreviewButton />
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
    @apply mb-4 text-2xl font-semibold text-c-primary;
  }
}
</style>
