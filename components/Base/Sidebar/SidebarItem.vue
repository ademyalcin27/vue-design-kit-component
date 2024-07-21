<template>
  <ul class="menu">
    <li
      v-for="(item, index) in items"
      :key="index"
      class="menu__item"
      @click.stop="toggle(item)"
    >
      <div class="menu__item-content">
        <NuxtLink
          :to="item.link"
          :external="item.external"
          class="menu__link"
          :class="{ 'menu__link--active': item.isOpen || item.active }"
        >
          <font-awesome-icon
            :icon="item.icon"
            class="menu__icon"
            :size="item.iconSize"
          />
          <template v-if="extended">{{ item.text }}</template>
        </NuxtLink>
        <font-awesome-icon
          v-if="hasChildren(item) && extended"
          :icon="item.isOpen ? 'fa-chevron-up' : 'fa-chevron-down'"
          class="menu__toggle-icon"
          size="md"
        />
      </div>
      <BaseSidebarItem
        v-if="item.isOpen && hasChildren(item) && item.children"
        :items="item.children"
        class="menu__sub-menu"
        :extended="extended"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { SidebarItem } from "./SidebarItem.type";

defineProps<{ items: SidebarItem[]; extended: boolean }>();
const emit = defineEmits(["toggle"]);

function hasChildren(item: SidebarItem) {
  return !!item.children && item.children.length > 0;
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
