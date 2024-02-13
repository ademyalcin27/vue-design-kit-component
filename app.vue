<template>
  <div>
    <Input
      v-model="name"
      label="name"
      error-message="Error"
      prepend-icon="fa-user"
      clearable
      disabled
    />
  </div>
</template>
<script setup lang="ts">
const name = ref("izle ve öğren");
</script>
