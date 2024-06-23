<template>
  <div>
    <ul>
      <li v-for="link in links" :key="link.name">
        <NuxtLink :to="link.path">{{ link.name }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const links = [
  { name: "Button Component", path: "/form/button" },
  { name: "Toggle Component", path: "/form/toggle" },
  { name: "Checkbox Component", path: "/form/checkbox" },
  { name: "Radio Component", path: "/form/radio" },
  { name: "Input Component", path: "/form/input" },
  { name: "Accordion Component", path: "/base/accordion" },
  { name: "Sidebar Component", path: "/base/sidebar" },
];
</script>

<style scoped></style>
