<template>
  <PreviewPage :title="title" :description="description">
    <PreviewItem title="Single Usage">
      {{ selectedColorSingle }}
      <FormRadio
        v-model="selectedColorSingle"
        name="color"
        value="red"
        label="Red"
      />
    </PreviewItem>
    <PreviewItem title="Group Usage">
      {{ selectedColor }}
      <FormRadio
        v-for="color in colors"
        :key="color"
        v-model="selectedColor"
        name="color"
        :value="color"
        :label="color"
      />
    </PreviewItem>
    <PreviewItem title="Disabled">
      <FormRadio
        v-model="selectedColorSingle"
        name="color"
        value="red"
        label="Red"
        disabled
      />
    </PreviewItem>
    <PreviewItem title="Error">
      <FormRadio
        v-model="selectedColorSingle"
        name="color"
        value="red"
        label="Red"
        error
      />
    </PreviewItem>
    <template #props>
      <BaseTable :columns="radioColumns" :data="radioPropsData" />
    </template>
    <template #slots>
      <BaseTable :columns="radioSlotsColumns" :data="radioSlotsData" />
    </template>
  </PreviewPage>
</template>

<script setup lang="ts">
const title = "Radio Input Component";
const description = `The Radio Input component serves as a replacement for the standard HTML
      button. It provides several built-in style presets and enables users to
      manually adjust various attributes such as size, color, and opacity.`;
const radioColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "types", label: "TYPES" },
  { key: "default", label: "DEFAULT" },
];

const radioPropsData = [
  {
    name: "name",
    description: "Name attribute of the radio button.",
    types: "String",
    default: '""',
  },
  {
    name: "value",
    description: "Value of the radio button.",
    types: "String | Number | Boolean | null | undefined",
    default: "undefined",
  },
  {
    name: "label",
    description: "Label for the radio button.",
    types: "String",
    default: '""',
  },
  {
    name: "error",
    description: "Indicates if there is an error.",
    types: "Boolean",
    default: "false",
  },
  {
    name: "errorMessage",
    description: "Error message for the radio button.",
    types: "String",
    default: '""',
  },
  {
    name: "disabled",
    description: "Disables the radio button.",
    types: "Boolean",
    default: "false",
  },
];

const radioSlotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "scopeProperties", label: "SCOPED PROPERTIES" },
];

const radioSlotsData = [
  {
    name: "default",
    description: "Slot for the radio button label.",
    scopeProperties: "None",
  },
];

const colors = ref(["red", "green", "blue"]);
const selectedColorSingle = ref();
const selectedColor = ref();
</script>

<style scoped></style>
