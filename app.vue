<template>
  <div class="wrapper" :class="{ 'wrapper__content--expanded': toggleSidebar }">
    <div class="wrapper__content">
      <button
        class="w-max justify-center rounded-md bg-c-primary p-2 text-c-primary-foreground"
        @click="toggleTheme"
      >
        Theme Toggle
      </button>

      <NuxtPage />
    </div>
    <BaseSidebar v-slot="slotProps" v-model="toggleSidebar">
      <BaseSidebarItem
        :items="menuItems"
        :extended="slotProps.extended"
        @toggle="toggleSidebar = true"
      />
    </BaseSidebar>
  </div>
</template>
<script setup lang="ts">
import type { SidebarItem } from "~/components/Base/Sidebar/SidebarItem.type";

const { toggleTheme, initTheme } = useTheme();
const toggleSidebar = ref(true);
const route = useRoute();

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

function updateActiveState(items: SidebarItem[], path: string) {
  let anyChildActive = false;
  items.forEach((item) => {
    item.active = item.link === path;
    if (item.children) {
      const childActive = updateActiveState(item.children, path);
      item.active = item.active || childActive;
      anyChildActive = anyChildActive || childActive;
    } else {
      anyChildActive = anyChildActive || item.active;
    }
  });
  return anyChildActive;
}

function collapseAllMenu(items: SidebarItem[]) {
  items.forEach((item) => {
    if (item.children) {
      item.isOpen = false;
      collapseAllMenu(item?.children);
    }
  });
}

watchEffect(() => {
  updateActiveState(menuItems.value, route.path);
});

watchEffect(() => {
  if (!toggleSidebar.value) {
    collapseAllMenu(menuItems.value);
  }
});
onMounted(() => {
  initTheme();
});
</script>
<style scoped>
.wrapper {
  --sidebar-width: 16rem;
  @apply flex flex-col  pl-16 lg:pl-[var(--sidebar-width)];
  &__section-title {
    @apply mb-4 text-2xl font-semibold text-c-primary;
  }
  &__content {
    @apply p-4;
  }
  &--expanded {
    --sidebar-width: 16rem;
  }
}
</style>
