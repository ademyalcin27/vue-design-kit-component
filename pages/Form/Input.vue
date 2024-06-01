<template>
  <PreviewPage :title="title" :description="description">
    <PreviewItem title="Normal Usage">
      <FormInput v-model="name" label="User Name" />
    </PreviewItem>

    <PreviewItem title="Disabled">
      <FormInput v-model="name" label="User Name" disabled />
    </PreviewItem>

    <PreviewItem title="Read only">
      <FormInput v-model="name" label="User Name" readonly />
    </PreviewItem>

    <PreviewItem title="Clearable">
      <FormInput v-model="name" label="User Name" clearable />
    </PreviewItem>

    <PreviewItem title="Append Icon">
      <FormInput v-model="name" label="User Name" append-icon="fa-user" />
    </PreviewItem>

    <PreviewItem title="Prepend Icon">
      <FormInput v-model="name" label="User Name" prepend-icon="fa-user" />
    </PreviewItem>

    <PreviewItem title="Append & Prepend Icon">
      <FormInput
        v-model="name"
        label="User Name"
        append-icon="fa-user"
        prepend-icon="fa-user"
      />
    </PreviewItem>

    <PreviewItem title="Error">
      <FormInput
        v-model="name"
        label="User Name"
        error
        error-message="Error Message"
      />
    </PreviewItem>
    <template #props>
      <BaseTable :columns="columns" :data="propsData" />
    </template>
    <template #slots>
      <BaseTable :columns="slotsColumns" :data="slotsData" />
    </template>
  </PreviewPage>
</template>

<script setup lang="ts">
const title = "Input Component";
const description = `The Input component serves as a replacement for the standard HTML
      button. It provides several built-in style presets and enables users to
      manually adjust various attributes such as size, color, and opacity.`;
const columns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "types", label: "TYPES" },
  { key: "default", label: "DEFAULT" },
];

const propsData = [
  {
    name: "label",
    description: "Label for the input field.",
    types: "String",
    default: '""',
  },
  {
    name: "type",
    description: "Type of the input field.",
    types: '"text" | "number" | "email" | "password" | "tel" | "url"',
    default: '"text"',
  },
  {
    name: "placeholder",
    description: "Placeholder text for the input field.",
    types: "String",
    default: '""',
  },
  {
    name: "disabled",
    description: "Disables the input field.",
    types: "Boolean",
    default: "false",
  },
  {
    name: "readonly",
    description: "Makes the input field read-only.",
    types: "Boolean",
    default: "false",
  },
  {
    name: "clearable",
    description: "Allows the input to be cleared.",
    types: "Boolean",
    default: "false",
  },
  {
    name: "errorMessage",
    description: "Error message for the input field.",
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
    name: "prependIcon",
    description: "Icon to be displayed before the input field.",
    types: "String",
    default: '""',
  },
  {
    name: "appendIcon",
    description: "Icon to be displayed after the input field.",
    types: "String",
    default: '""',
  },
];

const name = ref("izle ve öğren");

const slotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "scopeProperties", label: "SCOPED PROPERTIES" },
];
const slotsData = [
  {
    name: "label",
    description: "Slot to override the label content.",
    scopeProperties: "None",
  },
  {
    name: "prepend",
    description: "Slot to insert content before the input field.",
    scopeProperties: "None",
  },
  {
    name: "append",
    description: "Slot to insert content after the input field.",
    scopeProperties: "None",
  },
];
</script>

<style scoped></style>
