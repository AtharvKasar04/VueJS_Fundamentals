<script lang="ts" setup>
// -------------------------------------------------------------
// App.vue
// Root component of the Tasks App
// Uses Vue 3 Composition API with <script setup> for a simpler, cleaner structure
// -------------------------------------------------------------

// Import Vue Composition API functions
import { computed, ref } from 'vue';

// Import child components for composing the UI
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import FilterButton from './components/FilterButton.vue';

// Import TypeScript types for better type safety
import type { Task, TaskFilter } from './types';

// -------------------------------------------------------------
// Reactive State
// -------------------------------------------------------------

// Reactive reference for the app heading/title
const message = ref("Tasks-App");

// The array holding all task objects, each of type Task (defined in types.ts)
const taskList = ref<Task[]>([]);

// The currently selected filter for showing tasks: 'all' | 'todo' | 'done'
const filter = ref<TaskFilter>('all');

// -------------------------------------------------------------
// Computed Properties
// Computed properties derive values from reactive state
// They automatically update when their dependencies change
// -------------------------------------------------------------

// Calculate total number of completed tasks
const totalDoneTasks = computed(() =>
  taskList.value.reduce((total, task) => (task.done ? total + 1 : total), 0)
);

// Filter the tasks shown in the UI depending on the selected filter
const filteredTasks = computed(() => {
  switch (filter.value) {
    case 'all':
      return taskList.value;
    case 'todo':
      return taskList.value.filter((task) => !task.done);
    case 'done':
      return taskList.value.filter((task) => task.done);
    default:
      return taskList.value;
  }
});

// -------------------------------------------------------------
// Functions / Methods
// Event handlers to update the task list or state
// -------------------------------------------------------------

/**
 * Adds a new task to the task list.
 * @param newTask - The text/title of the new task
 */
function addTask(newTask: string) {
  taskList.value.push({
    id: crypto.randomUUID(), // Generates a unique ID for each task
    title: newTask,
    done: false, // New tasks are incomplete by default
  });
}

/**
 * Toggles the completion status of a task by its ID.
 * @param id - The ID of the task to toggle
 */
function toggleDone(id: string) {
  const task = taskList.value.find((task) => task.id === id);
  if (task) {
    task.done = !task.done;
  }
}

/**
 * Removes a task from the list by its ID.
 * @param id - The ID of the task to remove
 */
function removeTask(id: string) {
  const index = taskList.value.findIndex((task) => task.id === id);
  if (index !== -1) {
    taskList.value.splice(index, 1);
  }
}

/**
 * Sets the currently active filter for displaying tasks.
 * @param value - The filter value to set ('all' | 'todo' | 'done')
 */
function setFilter(value: TaskFilter) {
  filter.value = value;
}
</script>

<template>
  <main>
    <!-- App heading -->
    <h1>{{ message }}</h1>

    <!-- Task creation form component -->
    <TaskForm @add-task="addTask" />

    <!-- Display message based on whether there are tasks or not -->
    <h3 v-if="!taskList.length">Add a task to get started.</h3>
    <h3 v-else>{{ totalDoneTasks }} / {{ taskList.length }} tasks completed</h3>

    <!-- Filter buttons, shown only if there are tasks -->
    <div v-if="taskList.length" class="buttonContainer">
      <FilterButton :currentFilter="filter" filter="all" @set-filter="setFilter" />
      <FilterButton :currentFilter="filter" filter="todo" @set-filter="setFilter" />
      <FilterButton :currentFilter="filter" filter="done" @set-filter="setFilter" />
    </div>

    <!-- Task list component showing filtered tasks -->
    <TaskList
      :task-list="filteredTasks"
      @toggle-done="toggleDone"
      @remove-task="removeTask"
    />
  </main>
</template>

<style>
/* -------------------------------------------------------------
Styling for the root component
------------------------------------------------------------- */

main {
  max-width: 800px;
  margin: 1rem auto;
}

.buttonContainer {
  display: flex;
  justify-content: end;
  gap: 0.5rem; /* adds spacing between filter buttons */
}
</style>
