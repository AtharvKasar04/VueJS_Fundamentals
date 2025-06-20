<script lang="ts" setup>
// -------------------------------------------------------------
// TaskList.vue
// Displays a list of tasks with checkboxes to mark complete/incomplete
// and buttons to remove tasks
// Uses Vue 3 Composition API with <script setup> syntax
// -------------------------------------------------------------

// Import the Task type definition for strong typing of props
import type { Task } from "../types";

// -------------------------------------------------------------
// Props
// -------------------------------------------------------------
// defineProps allows the parent to pass reactive data into this component
const props = defineProps<{
  taskList: Task[]; // Array of Task objects to be rendered
}>();

// -------------------------------------------------------------
// Emits
// -------------------------------------------------------------
// defineEmits allows this component to emit custom events to its parent
const emits = defineEmits<{
  (e: "toggleDone", id: string): void;   // Emitted when a task is checked/unchecked
  (e: "removeTask", id: string): void;   // Emitted when a task is removed
}>();
</script>

<template>
  <!-- 
    TransitionGroup adds animation when items in the list are added or removed
    tag="div" makes the wrapper element a <div>
    name="task-list" applies CSS transition classes with that prefix
  -->
  <TransitionGroup name="task-list" tag="div" class="task-list">
    <!-- Loop through the provided task list and render each task -->
    <article v-for="task in props.taskList" :key="task.id" class="task">
      <label>
        <!-- 
          Checkbox for marking the task done/undone
          Emits 'toggleDone' with the task ID whenever changed
        -->
        <input
          @input="emits('toggleDone', task.id)"
          :checked="task.done"
          type="checkbox"
        />
        <!-- 
          Span displays the task title
          Dynamically applies the 'done' class if task.done === true
        -->
        <span :class="{ done: task.done }">{{ task.title }}</span>
      </label>

      <!-- Button to remove the task, emits 'removeTask' event -->
      <button @click="emits('removeTask', task.id)" class="outline">
        Remove
      </button>
    </article>
  </TransitionGroup>
</template>

<style scoped>
/* Adds spacing above the task list */
.task-list {
  margin-top: 1rem;
}

/* Applies strikethrough style when a task is marked done */
.done {
  text-decoration: line-through;
}

/* Layout for each task row: space between text and button */
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 
  Transition styles for when tasks enter or leave the DOM
  Vue automatically applies these classes when elements are added/removed
*/
.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.5s ease;
}

.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transform: translateX(300px);
}
</style>
