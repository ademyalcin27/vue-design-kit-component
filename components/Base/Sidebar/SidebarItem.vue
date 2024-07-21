<template>
  <ul class="menu">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="menu__item"
      @click="toggle(item)"
    >
      <div class="menu__item-content">
        <NuxtLink
          :to="item.link"
          :external="item.external"
          class="menu__link"
          :class="{ 'menu__link--active': item.isOpen }"
        >
          <font-awesome-icon
            :icon="item.icon"
            class="menu__icon"
            :size="item.iconSize"
          />
          {{ item.text }}
        </NuxtLink>
        <font-awesome-icon
          :icon="item.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'"
          class="menu__toggle-icon"
          size="md"
        />
      </div>
      <BaseSidebarItem
        v-if="item.isOpen && hasChildren(item)"
        :items="item.children"
        class="menu__sub-menu"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { SidebarItem } from "./SidebarItem.type";

defineProps<{ items: SidebarItem[] }>();
const emit = defineEmits(["toggle"]);

function hasChildren(item: SidebarItem) {
  return item.children && item.children.length > 0;
}

function toggle(item: SidebarItem) {
  if (hasChildren(item)) {
    item.isOpen = !item.isOpen;
    emit("toggle", item);
  }
}
</script>

<style scoped>
@import url("./sidebaritem.css");
</style>
./SidebarItem.type.js
