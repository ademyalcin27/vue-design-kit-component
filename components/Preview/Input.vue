<template>
  <div class="flex flex-wrap gap-2">
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
  </div>
</template>

<script setup lang="ts">
const name = ref("izle ve öğren");
</script>

<style scoped></style>
