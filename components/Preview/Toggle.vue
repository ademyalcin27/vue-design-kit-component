<template>
  <div class="flex flex-wrap gap-2">
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
  </div>
</template>

<script setup lang="ts">
const toggle = ref(true);
</script>

<style scoped></style>
