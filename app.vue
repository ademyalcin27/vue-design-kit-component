<template>
  <!-- <div>
    <Input
      v-model="name"
      label="name"
      error-message="Error"
      prepend-icon="fa-user"
      clearable
      disabled
    />
  </div> -->
  <div>
    <!-- <Checkbox v-model="team" label="Galatasaray" value="Galatasaray" /> -->
    <!-- <Checkbox
      v-model="teamArray"
      label="Fenerbahçe"
      value="Fenerbahçe"
      error-message="Şampiyon olacak"
    />
    <Checkbox v-model="teamArray" label="Beşiktaş" value="Beşiktaş" error />
    <Checkbox v-model="teamArray" label="24" :value="24" disabled /> -->
    {{ toggle }}
    <Toggle
      v-model="toggle"
      label="Toggle Item"
      :value="true"
      error
      disabled
      error-message="Error"
    />
  </div>
</template>
<script setup lang="ts">
const name = ref("izle ve öğren");

const team = ref("Galatasaray");
const toggle = ref(false);
const teamArray = ref(["Galatasaray", "Fenerbahçe", "Beşiktaş"]);
</script>
