<template>
  <div>
    <Input v-model="name" label="name" error-message="Error" error />
  </div>
</template>
<script setup lang="ts">
const name = ref("asdasd");

watch(name, (newVal, oldVal) => {
  console.log(newVal, oldVal);
});
</script>
