<script lang="ts" setup>
// -------------------------------------------------------------
// FilterButton.vue
// A single button used to filter tasks in the app
// Changes its style if it represents the currently selected filter
// -------------------------------------------------------------

// Import type definitions for task filtering options
import type { TaskFilter } from '../types';

// -------------------------------------------------------------
// Props
// -------------------------------------------------------------
// Props are reactive inputs passed from the parent component
const props = defineProps<{
  filter: TaskFilter;         // The filter value this button represents (e.g., "all", "todo", or "done")
  currentFilter: TaskFilter;  // The filter currently active in the parent, used to determine button styling
}>();

// -------------------------------------------------------------
// Emits
// -------------------------------------------------------------
// Emits a 'setFilter' event with the filter value when clicked
const emits = defineEmits<{
  (e: 'setFilter', filter: TaskFilter): void;
}>();
</script>

<template>
  <!-- 
    Button to change the current filter in the parent component
    - 'secondary' is a base button class
    - 'contrast' is conditionally applied if this filter matches the current active filter
  -->
  <button
    class="secondary"
    @click="emits('setFilter', props.filter)"
    :class="{ contrast: props.currentFilter === props.filter }"
  >
    {{ props.filter }}
  </button>
</template>

<style scoped>
/* Capitalizes first letter of the button text (e.g., 'Todo' instead of 'todo') */
button {
  text-transform: capitalize;
}
</style>
