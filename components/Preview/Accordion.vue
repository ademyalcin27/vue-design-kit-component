<template>
  <div class="flex flex-wrap gap-2">
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
  </div>
</template>

<script setup lang="ts">
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
