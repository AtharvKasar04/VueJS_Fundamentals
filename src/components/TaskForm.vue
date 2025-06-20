<script lang="ts" setup>
import { ref } from "vue";

const emit = defineEmits<{
    addTask: [newtask: string];
}>();

const newTask = ref("");
const error = ref("")

function formSubmitted() {
    if (newTask.value.trim()) {
        // console.log(newTask.value.trim());
        emit("addTask", newTask.value.trim());
        newTask.value = "";
    } else {
        error.value = "Task cannot be empty!"
    }
}
</script>

<template>
    <form @submit.prevent="formSubmitted">
        <label for="">
            New Task
            <input
                v-model="newTask"
                type="text"
                placeholder="Enter task"
                name="newTask"
                autocomplete="off" 
                :aria-invalid="!!error || undefined" 
                @input="error = '' "/>

            <small v-if="error" id="invalid-helper">{{ error }}</small>
        </label>

        <div class="buttonContainer">
            <button>Add</button>
        </div>
    </form>
</template>
