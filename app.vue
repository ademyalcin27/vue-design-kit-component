<template>
  <div class="wrapper">
    <button
      class="w-max justify-center rounded-md bg-c-primary p-2 text-c-primary-foreground"
      @click="toggleTheme"
    >
      Theme Toggle
    </button>
    <NuxtPage />
    <BaseSidebar v-model="toggleSidebar">
      <BaseSidebarItem :items="menuItems" />
    </BaseSidebar>
  </div>
</template>
<script setup lang="ts">
import type { SidebarItem } from "~/components/Base/Sidebar/SidebarItem.type";

const { toggleTheme, initTheme } = useTheme();
const toggleSidebar = ref(true);

const menuItems = ref<SidebarItem[]>([
  {
    icon: "fa-home",
    text: "Home",
    link: "/",
    active: false,
  },
  {
    icon: "fa-cog",
    text: "Form Components",
    children: [
      {
        icon: "fa-circle",
        text: "Button Component",
        link: "/form/button",
        active: false,
        iconSize: "xs",
      },
      {
        icon: "fa-circle",
        text: "Toggle Component",
        link: "/form/toggle",
        active: false,
        iconSize: "xs",
      },
      {
        icon: "fa-circle",
        text: "Checkbox Component",
        link: "/form/checkbox",
        active: false,
        iconSize: "xs",
      },
      {
        icon: "fa-circle",
        text: "Radio Component",
        link: "/form/radio",
        active: false,
        iconSize: "xs",
      },
      {
        icon: "fa-circle",
        text: "Input Component",
        link: "/form/input",
        active: false,
        iconSize: "xs",
      },
    ],
  },
  {
    icon: "fa-cog",
    text: "Base Components",
    children: [
      {
        icon: "fa-circle",
        text: "Accordion Component",
        link: "/base/accordion",
        active: false,
        iconSize: "xs",
      },
      {
        icon: "fa-circle",
        text: "Sidebar Component",
        link: "/base/sidebar",
        active: false,
        iconSize: "xs",
      },
    ],
  },
]);
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
