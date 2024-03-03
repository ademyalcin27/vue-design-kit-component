<template>
  <div class="flex flex-wrap gap-2">
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
  </div>
</template>

<script setup lang="ts">
const colors = ref(["red", "green", "blue"]);
const selectedColorSingle = ref();
const selectedColor = ref();
</script>

<style scoped></style>
