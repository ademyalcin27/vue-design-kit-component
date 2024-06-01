<template>
  <PreviewPage :title="title" :description="description">
    <PreviewItem title="Normal Usage">
      <FormButton label="izle ve öğren" />
    </PreviewItem>
    <PreviewItem title="Prepend Icon">
      <FormButton label="izle ve öğren" prepend-icon="fa-user" />
    </PreviewItem>
    <PreviewItem title="Append Icon">
      <FormButton label="izle ve öğren" append-icon="fa-user" />
    </PreviewItem>
    <PreviewItem title="Prepend & Append Icon">
      <FormButton
        label="izle ve öğren"
        prepend-icon="fa-user"
        append-icon="fa-user"
      />
    </PreviewItem>
    <PreviewItem title="Size">
      <div class="flex items-baseline gap-2">
        <FormButton label="Small" size="small" />
        <FormButton label="Medium" size="medium" />
        <FormButton label="Large" size="large" />
      </div>
    </PreviewItem>
    <PreviewItem title="Color">
      <div class="flex items-baseline gap-2">
        <FormButton label="Red" color="red" />
        <FormButton label="Primary" />
      </div>
    </PreviewItem>
    <PreviewItem title="Variant/Red">
      <div class="flex items-baseline gap-2">
        <FormButton label="Text" color="red" variant="text" />
        <FormButton label="Outlined" color="red" variant="outlined" />
        <FormButton label="Contanied" color="red" />
      </div>
    </PreviewItem>
    <PreviewItem title="Variant/Primary">
      <div class="flex items-baseline gap-2">
        <FormButton label="Text" variant="text" />
        <FormButton label="Outlined" variant="outlined" />
        <FormButton label="Contanied" />
      </div>
    </PreviewItem>
    <PreviewItem title="Disabled">
      <div class="flex items-baseline gap-2">
        <FormButton label="Contained" disabled />
        <FormButton label="text" disabled variant="text" />
        <FormButton label="Outlined" disabled variant="outlined" />
        <FormButton label="Contained" disabled color="red" />
        <FormButton label="text" disabled variant="text" color="red" />
        <FormButton label="Outlined" disabled variant="outlined" color="red" />
      </div>
    </PreviewItem>
    <PreviewItem title="Loading">
      <div class="flex items-baseline gap-2">
        <FormButton label="Contained" loading />
        <FormButton label="text" loading variant="text" />
        <FormButton label="Outlined" loading variant="outlined" />
        <FormButton label="Contained" loading color="red" />
        <FormButton label="text" loading variant="text" color="red" />
        <FormButton label="Outlined" loading variant="outlined" color="red" />
      </div>
    </PreviewItem>
    <PreviewItem title="Link">
      <div class="flex items-baseline gap-2">
        <FormButton label="Link" is-link to="https://www.google.com" external />
        <FormButton
          label="Link"
          is-link
          to="https://www.google.com"
          external
          target="_blank"
        />
        <FormButton label="Link" is-link to="/about" />
        <FormButton label="Link" is-link to="/about" disabled />
      </div>
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
const title = "Button Component";
const description = `The BaseButton component serves as a replacement for the standard HTML
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
    description: "The text displayed on the button.",
    types: "string",
    default: "-",
  },
  {
    name: "size",
    description: "The size of the button.",
    types: '"small" | "medium" | "large"',
    default: '"medium"',
  },
  {
    name: "color",
    description: "The color of the button.",
    types: '"primary" | "red"',
    default: '"primary"',
  },
  {
    name: "type",
    description: "The type of the button.",
    types: '"button" | "submit" | "reset"',
    default: '"button"',
  },
  {
    name: "variant",
    description: "The style variant of the button.",
    types: '"text" | "outlined" | "contained"',
    default: '"contained"',
  },
  {
    name: "prependIcon",
    description: "The icon displayed before the label.",
    types: "string",
    default: "-",
  },
  {
    name: "appendIcon",
    description: "The icon displayed after the label.",
    types: "string",
    default: "-",
  },
  {
    name: "disabled",
    description: "Disables the button if `true`.",
    types: "boolean",
    default: "false",
  },
  {
    name: "loading",
    description: "Shows a loading state if `true`.",
    types: "boolean",
    default: "false",
  },
  {
    name: "isLink",
    description: "Renders the button as a link if `true`.",
    types: "boolean",
    default: "-",
  },
  {
    name: "to",
    description: "The target URL if the button is a link.",
    types: "string",
    default: "-",
  },
  {
    name: "external",
    description: "Opens the link in a new tab if `true`.",
    types: "boolean",
    default: "false",
  },
  {
    name: "target",
    description: "The target attribute for the link.",
    types: 'NuxtLinkProps["target"]',
    default: "-",
  },
];

const slotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
];
const slotsData = [
  {
    name: "prependIcon",
    description: "Slot to insert content before the button's main content.",
  },
  {
    name: "default",
    description:
      "Default slot for the button's main content, typically the label.",
  },
  {
    name: "appendIcon",
    description: "Slot to insert content after the button's main content.",
  },
];
</script>

<style scoped></style>
