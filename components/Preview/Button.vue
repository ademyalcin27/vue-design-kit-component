<template>
  <div class="flex flex-wrap gap-2">
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
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
