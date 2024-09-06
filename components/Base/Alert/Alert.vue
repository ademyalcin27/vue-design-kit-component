<template>
  <div
    class="alert-wrapper"
    :class="[`alert-wrapper--${type}`, { 'alert-wrapper--outlined': outlined }]"
  >
    <div class="alert-wrapper__content">
      <h2 v-if="title || $slots.title" class="alert-wrapper__title">
        <slot name="title">{{ title }}</slot>
      </h2>
      <p
        v-if="description || $slots.description"
        class="alert-wrapper__description"
      >
        <slot name="title">{{ description }}</slot>
      </p>
    </div>
    <font-awesome-icon
      v-if="dismissable"
      icon="remove"
      class="alert-wrapper__dismiss"
      size="lg"
      @click="$emit('dismiss')"
    />
  </div>
</template>

<script setup lang="ts">
import { type AlertNames, Alerts } from "@/types/Alert";
interface AlertProps {
  title?: string;
  description?: string;
  dismissable?: boolean;
  type?: AlertNames;
  outlined?: boolean;
}

withDefaults(defineProps<AlertProps>(), {
  title: "",
  description: "",
  type: Alerts.INFO,
});
defineEmits(["dismiss"]);
</script>

<style scoped>
@import url("./alert.css");
</style>
