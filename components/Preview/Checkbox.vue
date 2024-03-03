<template>
  <div class="flex flex-wrap gap-2">
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
  </div>
</template>

<script setup lang="ts">
const team = ref("Galatasaray");
const teamArray = ref(["Galatasaray"]);
const isSelected = ref(false);
</script>

<style scoped></style>
