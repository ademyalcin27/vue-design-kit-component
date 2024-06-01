<template>
  <PreviewPage :title="title" :description="description">
    <PreviewItem title="Normal Usage">
      <FormCheckbox v-model="team" label="Galatasaray" value="" />
    </PreviewItem>
    <PreviewItem title="Selected">
      <FormCheckbox v-model="team" label="Galatasaray" value="Galatasaray" />
    </PreviewItem>
    <PreviewItem title="Array Data">
      {{ teamArray }}
      <FormCheckbox
        v-model="teamArray"
        label="Galatasaray"
        value="Galatasaray"
      />
      <FormCheckbox v-model="teamArray" label="Beşiktaş" value="Beşiktaş" />
    </PreviewItem>
    <PreviewItem title="Boolean">
      {{ isSelected }}
      <FormCheckbox v-model="isSelected" label="Galatasaray" :value="true" />
    </PreviewItem>
    <PreviewItem title="Disabled">
      <FormCheckbox v-model="team" label="Galatasaray" value="" disabled />
    </PreviewItem>
    <PreviewItem title="Error">
      <FormCheckbox
        v-model="team"
        label="Galatasaray"
        value=""
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
const title = "Checkbox Component";
const description = `The Checkbox component serves as a replacement for the standard HTML
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
    description: "Label for the checkbox.",
    types: "String",
    default: '""',
  },
  {
    name: "value",
    description: "Value of the checkbox.",
    types: "String | Number | Boolean",
    default: "undefined",
  },
  {
    name: "name",
    description: "Name attribute of the checkbox.",
    types: "String",
    default: '"checkbox-" + self.crypto.randomUUID()',
  },
  {
    name: "disabled",
    description: "Disables the checkbox.",
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
    description: "Error message for the checkbox.",
    types: "String",
    default: '""',
  },
];
const slotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "scopeProperties", label: "SCOPED PROPERTIES" },
];

const slotsData = [
  {
    name: "checkmark",
    description: "Slot to override the checkmark content.",
    scopeProperties: "checked: Boolean",
  },
  {
    name: "default",
    description: "Slot for the default content (checkbox label).",
    scopeProperties: "None",
  },
];

const team = ref("Galatasaray");
const teamArray = ref(["Galatasaray"]);
const isSelected = ref(false);
</script>

<style scoped></style>
