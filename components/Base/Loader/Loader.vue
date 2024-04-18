<template>
  <div class="loader"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.loader {
  @apply box-border inline-block min-h-8 min-w-8 text-c-background;
  &:after {
    @apply m-1 box-border block h-[calc(100%-10px)] w-[calc(100%-10px)] animate-spin rounded-[50%] border-[2.4px]
     border-solid  border-b-current border-l-transparent border-r-transparent border-t-current content-[''];
  }
}
</style>
