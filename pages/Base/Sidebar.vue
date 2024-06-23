<template>
  <PreviewPage :title="title" :description="description">
    <PreviewItem title="Normal Usage">
      <BaseSidebar v-model="toggleSidebar" :full-hide="fullHide" :outside-click="outsideClick"/>
      <FormButton
        label="Toggle Sidebar"
        @click="toggleSidebar = !toggleSidebar"
      />
      <FormCheckbox v-model="fullHide" label="Full Hide" :value="true" name="full-hide"/>
      <FormCheckbox v-model="outsideClick" label="Outside Clickk" :value="true" name="outisde-click"/>
    </PreviewItem>

    <template #props>
      <BaseTable :columns="sidebarColumns" :data="sidebarProps" />
    </template>
    <template #slots>
      <BaseTable :columns="sidebarSlotsColumns" :data="sidebarSlots" />
    </template>
  </PreviewPage>
</template>

<script setup lang="ts">

const title = "Sidebar Component";
const description = `The Sidebar component serves as a replacement for the standard HTML
      button. It provides several built-in style presets and enables users to
      manually adjust various attributes such as size, color, and opacity.`;

const toggleSidebar = ref(false);
const fullHide = ref(true);
const outsideClick = ref(false);

const sidebarColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "types", label: "TYPES" },
  { key: "default", label: "DEFAULT" },
];

const sidebarProps = [
  {
    name: "smallSize",
    description: "Class for the small size of the sidebar.",
    type: "String",
    default: '"w-16"',
  },
  {
    name: "bigSize",
    description: "Class for the big size of the sidebar.",
    type: "String",
    default: '"w-64"',
  },
  {
    name: "collapsebleQuery",
    description: "Breakpoint for collapsible sidebar.",
    type: "Number | Boolean",
    default: "1144",
  },
  {
    name: "fullHide",
    description: "Fully hides the sidebar.",
    type: "Boolean",
    default: "false",
  },
  {
    name: "outsideClick",
    description: "Closes sidebar on outside click.",
    type: "Boolean",
    default: "true",
  },
  {
    name: "direction",
    description: "Direction of the sidebar.",
    type: "String",
    default: '"left"',
  },
];

const sidebarSlotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "scopeProperties", label: "SCOPED PROPERTIES" },
];

const sidebarSlots = [
  {
    name: "default",
    description: "Slot for the sidebar content.",
    scopedProperties: "None",
  },
];
</script>

<style scoped></style>
