<template>
  <PreviewPage :title="title" :description="description">
    <PreviewItem title="Normal Usage">
      <BaseAlert
        :title="alertTitle"
        :description="alertDescription"
        dismissable
      />
    </PreviewItem>
    <PreviewItem title="Colors">
      <BaseAlert
        :title="alertTitle"
        :description="alertDescription"
        dismissable
      />
      <BaseAlert
        type="success"
        :title="alertTitle"
        :description="alertDescription"
        dismissable
      />
      <BaseAlert
        type="error"
        :title="alertTitle"
        :description="alertDescription"
        dismissable
      />
      <BaseAlert
        type="message"
        :title="alertTitle"
        :description="alertDescription"
        dismissable
      />
      <BaseAlert
        type="warning"
        :title="alertTitle"
        :description="alertDescription"
        dismissable
      />
    </PreviewItem>
    <PreviewItem title="Outlined">
      <BaseAlert
        :title="alertTitle"
        :description="alertDescription"
        dismissable
        outlined
      />
    </PreviewItem>
    <PreviewItem title="Dismissable">
      <FormButton @click="isActive = !isActive">Toggle Alert</FormButton>
      <BaseAlert
        v-if="isActive"
        :title="alertTitle"
        :description="alertDescription"
        dismissable
        @dismiss="isActive = false"
      />
    </PreviewItem>
    <template #props>
      <BaseTable :columns="propsColumns" :data="alertPropsData" />
    </template>
    <template #slots>
      <BaseTable :columns="slotsColumns" :data="alertSlotsData" />
    </template>
  </PreviewPage>
</template>

<script setup lang="ts">
const title = "Alert Component";
const description = `The Alert component serves as a replacement for the standard HTML
      button. It provides several built-in style presets and enables users to
      manually adjust various attributes such as size, color, and opacity.`;

const alertTitle = "Alert Title";
const alertDescription = "Alert Descrtipion";
const isActive = ref(true);

const propsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "types", label: "TYPES" },
  { key: "default", label: "DEFAULT" },
];
const alertPropsData = [
  {
    name: "title",
    description: "The title displayed in the alert.",
    types: "string",
    default: '""',
  },
  {
    name: "description",
    description: "The description text displayed in the alert.",
    types: "string",
    default: '""',
  },
  {
    name: "dismissable",
    description: "Adds a dismiss button if `true`.",
    types: "boolean",
    default: "false",
  },
  {
    name: "type",
    description: "The type of the alert, defining its style.",
    types: "AlertNames",
    default: '"info"',
  },
  {
    name: "outlined",
    description: "Displays the alert with an outlined style if `true`.",
    types: "boolean",
    default: "false",
  },
];

const slotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
];
const alertSlotsData = [
  {
    name: "title",
    description: "Slot to insert custom content for the title of the alert.",
  },
  {
    name: "description",
    description: "Slot to insert custom content for the alert's description.",
  },
];
</script>

<style scoped></style>
