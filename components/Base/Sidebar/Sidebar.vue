<template>
  <div
    v-on-click-outside="handleOutsideClick"
    class="sidebar-wrapper"
    :class="sidebarClass"
  >
    <FormButton
      v-if="windowWidth < (props.collapsebleQuery as number)"
      prepend-icon="angle-right"
      rounded
      size="small"
      class="sidebar-wrapper__close-button"
      @click="toggleSidebar"
    />
    <slot :extended="modelValue" />
  </div>
</template>

<script setup lang="ts">
import { vOnClickOutside } from "@vueuse/components";

interface SidebarProps {
  smallSize?: string;
  bigSize?: string;
  collapsebleQuery?: number | boolean;
  fullHide?: boolean;
  outsideClick?: boolean;
  direction: "left" | "right";
}

const props = withDefaults(defineProps<SidebarProps>(), {
  smallSize: "w-16",
  bigSize: "w-64",
  collapsebleQuery: 1024,
  outsideClick: true,
  direction: "left",
});

const modelValue = defineModel<boolean>({ required: false, default: false });
const windowWidth = ref(window.innerWidth);
const sidebarClass = computed(() => {
  const classes = [`sidebar-wrapper--${props.direction}`];

  if (props.fullHide && !modelValue.value) {
    classes.push("sidebar-wrapper--hide");
  }

  if (!modelValue.value && !props.fullHide) {
    classes.push(props.smallSize);
  } else {
    classes.push(props.bigSize);
  }

  return classes;
});

function handleOutsideClick() {
  if (
    props.outsideClick &&
    windowWidth.value < (props.collapsebleQuery as number)
  ) {
    modelValue.value = false;
  }
}

function toggleSidebar() {
  modelValue.value = !modelValue.value;
}

function handleResize() {
  if (props.collapsebleQuery === false) {
    return;
  }
  windowWidth.value = window.innerWidth;

  if (windowWidth.value < (props.collapsebleQuery as number)) {
    modelValue.value = false;
  } else {
    modelValue.value = true;
  }
}

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
@import url("./sidebar.css");
</style>
