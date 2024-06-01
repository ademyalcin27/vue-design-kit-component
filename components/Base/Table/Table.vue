<template>
  <table class="table">
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <td v-for="column in columns" :key="column.key">
          {{ row[column.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
type Column = {
  key: string;
  label: string;
};

type Data = Record<string, any>;

interface Table {
  columns: Column[];
  data: Data[];
}
defineProps<Table>();
</script>

<style scoped>
@import url("./table.css");
</style>
