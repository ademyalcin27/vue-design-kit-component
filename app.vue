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
  {{ teamArray }}
  <div>
    <Checkbox v-model="teamArray" label="Galatasaray" value="Galatasaray" />
    <Checkbox
      v-model="teamArray"
      label="Fenerbahçe"
      value="Fenerbahçe"
      error-message="Şampiyon olacak"
    />
    <Checkbox v-model="teamArray" label="Beşiktaş" value="Beşiktaş" error />
    <Checkbox v-model="teamArray" label="24" :value="24" disabled />
  </div>
</template>
<script setup lang="ts">
const name = ref("izle ve öğren");

const team = ref("Galatasaray");
const teamArray = ref(["Galatasaray", "Fenerbahçe", "Beşiktaş"]);
</script>
