<template>
  <PreviewPage :title="title" :description="description">
    <PreviewItem title="Normal Usage">
      <BaseAccordion>
        <BaseAccordionItem
          v-for="(item, index) in accordionItems"
          :key="index"
          :title="item.title"
          :description="item.description"
        />
      </BaseAccordion>
    </PreviewItem>
    <PreviewItem title="Multiple">
      <BaseAccordion multiple>
        <BaseAccordionItem
          v-for="(item, index) in accordionItems"
          :key="index"
          :title="item.title"
          :description="item.description"
        />
      </BaseAccordion>
    </PreviewItem>
    <PreviewItem title="Disabled">
      <BaseAccordion multiple>
        <BaseAccordionItem
          v-for="(item, index) in accordionItems"
          :key="index"
          :title="item.title"
          :description="item.description"
          :disabled="index == 2"
        />
      </BaseAccordion>
    </PreviewItem>
    <PreviewItem title="Icon">
      <BaseAccordion expand-icon="minus" collapse-icon="plus">
        <BaseAccordionItem
          v-for="(item, index) in accordionItems"
          :key="index"
          :title="item.title"
          :description="item.description"
          :disabled="index == 2"
        />
      </BaseAccordion>
    </PreviewItem>
    <template #props>
      <BaseTable :columns="accordionColumns" :data="accordionPropsData" />
      <h2 class="my-3 text-lg font-semibold">Item Component Props</h2>
      <BaseTable
        :columns="accordionItemColumns"
        :data="accordionItemPropsData"
      />
    </template>
    <template #slots>
      <BaseTable :columns="accordionSlotsColumns" :data="accordionSlotsData" />
      <h2 class="my-3 text-lg font-semibold">Item Component Slots</h2>
      <BaseTable
        :columns="accordionItemSlotsColumns"
        :data="accordionItemSlotsData"
      />
    </template>
  </PreviewPage>
</template>

<script setup lang="ts">
const title = "Accordion Component";
const description = `The Accordion component serves as a replacement for the standard HTML
      button. It provides several built-in style presets and enables users to
      manually adjust various attributes such as size, color, and opacity.`;
const accordionColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "types", label: "TYPES" },
  { key: "default", label: "DEFAULT" },
];

const accordionPropsData = [
  {
    name: "modelValue",
    description: "The currently open accordion items.",
    types: "string[]",
    default: "[]",
  },
];
const accordionSlotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "scopeProperties", label: "SCOPED PROPERTIES" },
];

const accordionSlotsData = [
  {
    name: "default",
    description: "Slot for the content of the accordion.",
    scopeProperties: "None",
  },
];
const accordionItemColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "types", label: "TYPES" },
  { key: "default", label: "DEFAULT" },
];

const accordionItemPropsData = [
  {
    name: "title",
    description: "Title of the accordion item.",
    types: "String",
    default: '""',
  },
  {
    name: "description",
    description: "Description of the accordion item.",
    types: "String",
    default: '""',
  },
  {
    name: "expandIcon",
    description: "Icon to display when the accordion item is expanded.",
    types: "String",
    default: '"chevron-down"',
  },
  {
    name: "collapseIcon",
    description: "Icon to display when the accordion item is collapsed.",
    types: "String",
    default: '"chevron-up"',
  },
  {
    name: "disabled",
    description: "Disables the accordion item.",
    types: "Boolean",
    default: "false",
  },
  {
    name: "name",
    description: "Unique name of the accordion item.",
    types: "String",
    default: '"self.crypto.randomUUID()"',
  },
];

const accordionItemSlotsColumns = [
  { key: "name", label: "NAME" },
  { key: "description", label: "DESCRIPTION" },
  { key: "scopeProperties", label: "SCOPED PROPERTIES" },
];

const accordionItemSlotsData = [
  {
    name: "title",
    description: "Slot to override the title content.",
    scopeProperties: "None",
  },
  {
    name: "icon",
    description: "Slot to override the icon content.",
    scopeProperties: "isOpen: Boolean",
  },
  {
    name: "description",
    description: "Slot for the description content.",
    scopeProperties: "None",
  },
];

const accordionItems = [
  {
    title: "Title - 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    disabled: false,
  },
  {
    title: "Title - 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    disabled: false,
  },
  {
    title: "Title - 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    disabled: false,
  },
];
</script>

<style scoped></style>
