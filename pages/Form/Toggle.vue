<template>
  <PreviewPage :title="title" :description="description">
    <PreviewItem title="Normal Usage">
      <FormToggle v-model="toggle" label="Galatasaray" :value="false" />
    </PreviewItem>
    <PreviewItem title="Selected">
      <FormToggle v-model="toggle" label="Beşiktaş" :value="true" />
    </PreviewItem>
    <PreviewItem title="Disabled">
      <FormToggle v-model="toggle" label="Fenerbahçe" :value="false" disabled />
    </PreviewItem>
    <PreviewItem title="Error">
      <FormToggle
        v-model="toggle"
        label="Galatasaray"
        :value="false"
        error
        error-message="Error Message"
      />
    </PreviewItem>
    <template #props>
      <BaseTable :columns="toggleColumns" :data="togglePropsData" />
    </template>
    <template #slots>
      <BaseTable :columns="toggleSlotsColumns" :data="toggleSlotsData" />
    </template>
  </PreviewPage>
</template>

<script setup lang="ts">
const title = "Toggle Component";
const description = `The Toggle component serves as a replacement for the standard HTML
      button. It provides several built-in style presets and enables users to
      manually adjust various attributes such as size, color, and opacity.`;
const toggleColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "types", label: "TYPES" },
  { key: "default", label: "DEFAULT" },
];

const togglePropsData = [
  {
    name: "label",
    description: "Label for the toggle.",
    types: "String",
    default: '""',
  },
  {
    name: "value",
    description: "Value of the toggle (boolean indicating the state).",
    types: "Boolean",
    default: "false",
  },
  {
    name: "name",
    description: "Name attribute of the toggle.",
    types: "String",
    default: '""',
  },
  {
    name: "disabled",
    description: "Disables the toggle.",
    types: "Boolean",
    default: "false",
  },
  {
    name: "error",
    description: "Indicates if there is an error.",
    types: "Boolean",
    default: "false",
  },
  {
    name: "errorMessage",
    description: "Error message for the toggle.",
    types: "String",
    default: '""',
  },
];

const toggleSlotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "scopeProperties", label: "SCOPED PROPERTIES" },
];

const toggleSlotsData = [
  {
    name: "checkmark",
    description: "Slot to override the checkmark content.",
    scopeProperties: "checked: Boolean",
  },
  {
    name: "default",
    description: "Slot for the toggle label.",
    scopeProperties: "None",
  },
];

const toggle = ref(true);
</script>

<style scoped></style>
