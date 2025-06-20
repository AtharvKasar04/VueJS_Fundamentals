<script lang="ts" setup>
// -------------------------------------------------------------
// TaskForm.vue
// A controlled form input for adding a new task to the task list
// Uses Vue 3 Composition API with <script setup> syntax
// -------------------------------------------------------------

import { ref } from "vue"; // Import the ref API for creating reactive variables

// -------------------------------------------------------------
// Emits
// -------------------------------------------------------------
// defineEmits declares the events this component can send to its parent
const emit = defineEmits<{
  (e: 'addTask', newTask: string): void; // Emitted when a new task is submitted
}>();

// -------------------------------------------------------------
// State
// -------------------------------------------------------------
// Holds the value of the input field
const newTask = ref("");

// Holds error message text, if validation fails
const error = ref("");

// -------------------------------------------------------------
// Methods
// -------------------------------------------------------------

/**
 * Called when the form is submitted.
 * Emits the 'addTask' event if the input is valid.
 * Resets input after submission.
 * Shows an error if the input is empty.
 */
function formSubmitted() {
  if (newTask.value.trim()) {
    emit("addTask", newTask.value.trim());
    newTask.value = "";
  } else {
    error.value = "Task cannot be empty!";
  }
}
</script>

<template>
  <!-- 
    Form element that prevents default submit behavior and instead calls formSubmitted()
  -->
  <form @submit.prevent="formSubmitted">
    <label>
      <!-- 
        Input bound to newTask using v-model for two-way data binding
        - autocomplete="off" prevents browsers from auto-filling
        - :aria-invalid enhances accessibility by indicating invalid state
        - @input clears error as the user types
      -->
      New Task
      <input
        v-model="newTask"
        type="text"
        placeholder="Enter task"
        name="newTask"
        autocomplete="off"
        :aria-invalid="!!error || undefined"
        @input="error = ''"
      />

      <!-- Error message displayed if validation fails -->
      <small v-if="error" id="invalid-helper">{{ error }}</small>
    </label>

    <!-- 
      Container for the submit button. 
      Button triggers formSubmitted() because it's inside the <form> with @submit.prevent.
    -->
    <div class="buttonContainer">
      <button>Add</button>
    </div>
  </form>
</template>
